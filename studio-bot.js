/**
 * Luxe Find Studio Bot v2.0 - Cinematic Engine
 * Features: Kinetic Typography, Audio Viz, Subtitles, Robust Recording
 */

// --- Configuration & State ---
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
const statusLog = document.getElementById('statusLog');
const musicUpload = document.getElementById('musicUpload');

let STATE = {
    mode: 'video', // 'video' or 'pin'
    image: null,
    isPlaying: false,
    audioCtx: null,
    analyser: null,
    dataArray: null,
    animationId: null,
    ttsWords: []
};

const DIMS = { width: 1080, height: 1920 };

// --- Initialization ---
function init() {
    log("Initializing Cinematic Engine v2.0...");
    loadImage(document.getElementById('pImg').value);

    // Initial listeners
    document.getElementById('pImgFile').addEventListener('change', handleImageUpload);
    document.getElementById('showBorder').addEventListener('change', updatePreview);
    document.getElementById('showText').addEventListener('change', updatePreview);

    document.getElementById('bgMusic').addEventListener('change', (e) => {
        if (e.target.value === 'upload') musicUpload.click();
    });
    musicUpload.addEventListener('change', handleMusicUpload);

    setTimeout(updatePreview, 500);
}

function log(msg) {
    statusLog.textContent = `> ${msg}`;
    console.log(`[StudioBot] ${msg}`);
}

function setMode(mode) {
    STATE.mode = mode;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    const btn = document.getElementById('actionBtn');
    if (mode === 'video') {
        btn.innerHTML = '<span>🔴</span> Start Cinematic Record';
        DIMS.height = 1920;
    } else {
        btn.innerHTML = '<span>⬇️</span> Download Pin Image';
        DIMS.height = 1500;
    }
    canvas.height = DIMS.height;
    updatePreview();
}

// --- Image & Audio Logic ---
function loadImage(src) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => { STATE.image = img; updatePreview(); };
    img.onerror = () => log("Image load error. Try uploading a file.");
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            document.getElementById('pImg').value = "File Uploaded: " + file.name;
            loadImage(evt.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function handleMusicUpload(e) {
    if (e.target.files[0]) {
        STATE.customMusicFile = e.target.files[0];
        log("Custom music loaded.");
    }
}

// --- Rendering Loop ---
function updatePreview() {
    if (STATE.isPlaying) return;

    // Static Preview Logic
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, DIMS.width, DIMS.height);

    const data = getData();
    // Safety check for image url Update
    if (data.imgUrl && !data.imgUrl.startsWith("File Uploaded") && (!STATE.image || STATE.image.src !== data.imgUrl)) {
        loadImage(data.imgUrl);
    }

    if (STATE.mode === 'pin') {
        drawPinLayout(data);
    } else {
        drawVideoFrame(data, 2.5); // Show "Benefits" frame as preview
    }
}

function getData() {
    return {
        title: document.getElementById('pTitle').value,
        price: document.getElementById('pPrice').value,
        tagline: document.getElementById('pTagline').value, // Used as Subtitle or Benefits
        script: document.getElementById('pScript').value,
        imgUrl: document.getElementById('pImg').value
    };
}

// --- ASSET GENERATION ---

async function generateAsset() {
    if (STATE.mode === 'pin') {
        const link = document.createElement('a');
        link.download = `luxe-pin-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    } else {
        await startCinematicRecording();
    }
}

// --- CINEMATIC VIDEO ENGINE ---
async function startCinematicRecording() {
    const overlay = document.getElementById('recordingOverlay');
    const recProgress = document.getElementById('recProgress');
    overlay.style.display = 'flex';
    STATE.isPlaying = true;

    // 1. Audio Setup
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const dest = audioCtx.createMediaStreamDestination();
    STATE.audioCtx = audioCtx;

    // Analyzer for viz
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64;
    STATE.analyser = analyser;
    STATE.dataArray = new Uint8Array(analyser.frequencyBinCount);

    // TTS Setup
    if (document.getElementById('useTTS').checked) {
        const text = document.getElementById('pScript').value;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        speechSynthesis.speak(utterance);

        // Simple word splitter for subtitles (Approximate timing)
        STATE.ttsWords = text.split(' ');
    }

    // Music Setup
    const musicMode = document.getElementById('bgMusic').value;
    let sourceNode = null;

    if (musicMode === 'synth') {
        // Deep Cinematic Drone
        const osc1 = audioCtx.createOscillator(); osc1.frequency.value = 55; // A1
        const osc2 = audioCtx.createOscillator(); osc2.frequency.value = 110; // A2
        osc2.detune.value = 10; // Chorus effect

        const gain = audioCtx.createGain(); gain.gain.value = 0.15;

        osc1.connect(gain); osc2.connect(gain);
        gain.connect(dest); gain.connect(audioCtx.destination); gain.connect(analyser); // Connect to everything

        osc1.start(); osc2.start();
        sourceNode = { stop: () => { try { osc1.stop(); osc2.stop(); } catch (e) { } } };
    }
    else if (STATE.customMusicFile && musicMode === 'upload') {
        const ab = await STATE.customMusicFile.arrayBuffer();
        const buf = await audioCtx.decodeAudioData(ab);
        const src = audioCtx.createBufferSource();
        src.buffer = buf;
        src.connect(dest); src.connect(audioCtx.destination); src.connect(analyser);
        src.start(0);
        sourceNode = src;
    }

    // 2. Recording Setup
    const stream = canvas.captureStream(60);
    const tracks = [...stream.getVideoTracks(), ...dest.stream.getAudioTracks()];
    const combined = new MediaStream(tracks);
    const recorder = new MediaRecorder(combined, { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond: 5000000 });
    const chunks = [];

    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = `luxe-ad-${Date.now()}.webm`; a.click();

        STATE.isPlaying = false;
        overlay.style.display = 'none';
        if (sourceNode) sourceNode.stop();
        audioCtx.close();
    };

    recorder.start();

    // 3. Animation Loop
    const startTime = performance.now();
    const duration = 12000; // 12 seconds
    const data = getData();

    function loop(now) {
        if (!STATE.isPlaying) return;
        const elapsed = (now - startTime) / 1000;

        // Update Progress Bar
        const pct = Math.min(100, (elapsed / (duration / 1000)) * 100);
        recProgress.style.width = pct + '%';

        drawVideoFrame(data, elapsed);

        if (elapsed < duration / 1000) {
            requestAnimationFrame(loop);
        } else {
            recorder.stop();
        }
    }
    loop(startTime);
}

// --- DRAWING FUNCTIONS ---

function drawPinLayout(data) {
    if (STATE.image) drawImageCover(STATE.image);

    // Styles
    const showBorder = document.getElementById('showBorder')?.checked ?? false;
    const showText = document.getElementById('showText')?.checked ?? true;

    if (showText) {
        const grad = ctx.createLinearGradient(0, DIMS.height / 2, 0, DIMS.height);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, 'rgba(0,0,0,0.9)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, DIMS.width, DIMS.height);
    }

    if (showBorder) {
        ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 20;
        ctx.strokeRect(40, 40, DIMS.width - 80, DIMS.height - 80);
    }

    if (showText) {
        ctx.fillStyle = '#d4af37';
        ctx.font = '60px serif'; ctx.textAlign = 'center'; ctx.fillText('LUXE FIND', DIMS.width / 2, 120);

        const bY = DIMS.height - 150;
        ctx.fillStyle = '#fff'; ctx.font = 'bold 70px sans-serif';
        ctx.fillText(data.title.toUpperCase(), DIMS.width / 2, bY - 100);

        let p = data.price; if (!p.includes('₹') && !p.includes('Rs')) p = '₹' + p;
        ctx.fillStyle = '#d4af37'; ctx.font = '90px sans-serif';
        ctx.fillText(p, DIMS.width / 2, bY);

        // Rounded tag
        ctx.font = '40px sans-serif';
        const w = ctx.measureText(data.tagline).width + 60;
        ctx.fillStyle = 'rgba(212,175,55,0.2)';
        ctx.beginPath(); ctx.roundRect((DIMS.width - w) / 2, bY + 50, w, 80, 40); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.fillText(data.tagline, DIMS.width / 2, bY + 105);
    }
}

function drawVideoFrame(data, time) {
    // 0. Base: Slow Zoom Image
    const scale = 1.0 + (time * 0.03); // Subtle cinematic zoom
    ctx.save();
    ctx.translate(DIMS.width / 2, DIMS.height / 2);
    ctx.scale(scale, scale);
    ctx.translate(-DIMS.width / 2, -DIMS.height / 2);
    if (STATE.image) drawImageCover(STATE.image);
    ctx.restore();

    // 1. Overlays
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(0, 0, DIMS.width, DIMS.height);

    // 2. Timeline Logic
    ctx.textAlign = 'center';

    // Phase 1: The Hook (0s - 3s)
    if (time < 3) {
        // Dramatic Title Reveal
        const yPos = 400 + (time * 20); // Float down
        const alpha = Math.min(1, time * 2);

        ctx.globalAlpha = alpha;
        ctx.shadowColor = 'black'; ctx.shadowBlur = 20;

        ctx.font = 'bold 120px sans-serif'; ctx.fillStyle = '#fff';
        // Split title into lines if too long
        const words = data.title.toUpperCase().split(' ');
        if (words.length > 3) {
            ctx.fillText(words.slice(0, 3).join(' '), DIMS.width / 2, yPos);
            ctx.fillText(words.slice(3).join(' '), DIMS.width / 2, yPos + 130);
        } else {
            ctx.fillText(data.title.toUpperCase(), DIMS.width / 2, yPos);
        }

    }
    // Phase 2: The Benefits / Story (3s - 8s)
    else if (time < 8) {
        // Slide in Subtitles / Tagline
        const localTime = time - 3;
        const xOffset = Math.max(0, (1 - localTime * 2) * 500); // Slide from right

        ctx.globalAlpha = 1;
        ctx.font = '60px serif'; ctx.fillStyle = '#d4af37';
        ctx.fillText("✨ EXCELLENCE REDEFINED", DIMS.width / 2 + xOffset, 500);

        // Main Tagline
        const alphaBox = Math.min(0.8, (localTime - 1));
        if (alphaBox > 0) {
            ctx.globalAlpha = alphaBox;
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(100, 700, DIMS.width - 200, 400);

            ctx.globalAlpha = 1;
            ctx.fillStyle = '#fff'; ctx.font = '50px sans-serif';
            wrapText(ctx, data.script || data.tagline, DIMS.width / 2, 850, DIMS.width - 300, 70);
        }
    }
    // Phase 3: The Close / CTA (8s - 12s)
    else {
        // Price Drop
        const localTime = time - 8;
        const scaleCTA = 1 + Math.sin(localTime * 5) * 0.05; // Pulse

        ctx.save();
        ctx.translate(DIMS.width / 2, 960);
        ctx.scale(scaleCTA, scaleCTA);

        ctx.font = 'bold 150px sans-serif'; ctx.fillStyle = '#d4af37';
        let p = data.price; if (!p.includes('₹')) p = '₹' + p;
        ctx.fillText(p, 0, 0);
        ctx.restore();

        ctx.font = '60px sans-serif'; ctx.fillStyle = '#fff';
        ctx.fillText("ORDER NOW ON AMAZON", DIMS.width / 2, 1200);
    }

    // ALWAYS: Branding / Audio Viz
    ctx.globalAlpha = 1;
    ctx.font = '40px serif'; ctx.fillStyle = 'rgba(212,175,55,0.8)';
    ctx.fillText('LUXE FIND STUDIO', DIMS.width / 2, 100);

    if (STATE.analyser) {
        drawAudioViz();
    }
}

function drawAudioViz() {
    STATE.analyser.getByteFrequencyData(STATE.dataArray);
    const bars = 20;
    const barW = (DIMS.width / bars) * 0.5;
    const center = DIMS.width / 2;

    ctx.fillStyle = '#d4af37';
    for (let i = 0; i < bars; i++) {
        const h = STATE.dataArray[i] * 1.5;
        const x = center + (i * (barW + 10));
        const x2 = center - (i * (barW + 10));

        ctx.fillRect(x, DIMS.height - h, barW, h);
        if (i > 0) ctx.fillRect(x2, DIMS.height - h, barW, h);
    }
}

// Utils
function drawImageCover(img) {
    const iRatio = img.width / img.height;
    const cRatio = DIMS.width / DIMS.height;
    let sWidth, sHeight, sx, sy;
    if (iRatio > cRatio) {
        sHeight = img.height; sWidth = img.height * cRatio;
        sx = (img.width - sWidth) / 2; sy = 0;
    } else {
        sWidth = img.width; sHeight = img.width / cRatio;
        sx = 0; sy = (img.height - sHeight) / 2;
    }
    ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, DIMS.width, DIMS.height);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        if (ctx.measureText(testLine).width > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

// Start
window.addEventListener('load', init);
