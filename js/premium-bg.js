/**
 * LUXE FIND - Professional 3D Background 2.0
 * High-end fluid simulation using Three.js displacement and custom shaders.
 */

class PremiumBackground {
    constructor() {
        this.canvas = document.getElementById('canvas-3d');
        if (!this.canvas) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.mouse = new THREE.Vector2(0, 0);
        this.targetMouse = new THREE.Vector2(0, 0);

        this.time = 0;
        this.init();
        this.animate();
        this.addEventListeners();
    }

    init() {
        // Create a large plane that covers the background
        const geometry = new THREE.PlaneGeometry(20, 10, 128, 128);

        // Custom Material with Fresnel effect and Noise
        this.material = new THREE.MeshPhysicalMaterial({
            color: 0x080808,
            emissive: 0xE2C275,
            emissiveIntensity: 0.15,
            metalness: 0.9,
            roughness: 0.2,
            reflectivity: 1,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
            wireframe: false,
            flatShading: false,
            side: THREE.DoubleSide
        });

        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.rotation.x = -Math.PI / 4;
        this.mesh.position.z = -2;
        this.scene.add(this.mesh);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this.scene.add(ambientLight);

        this.mainLight = new THREE.PointLight(0xE2C275, 5, 20);
        this.mainLight.position.set(0, 5, 5);
        this.scene.add(this.mainLight);

        this.blueLight = new THREE.PointLight(0x00aaff, 1, 15);
        this.blueLight.position.set(-5, -2, 2);
        this.scene.add(this.blueLight);

        this.camera.position.z = 5;
    }

    addEventListeners() {
        window.addEventListener('mousemove', (e) => {
            this.targetMouse.x = (e.clientX / window.innerWidth) - 0.5;
            this.targetMouse.y = -(e.clientY / window.innerHeight) + 0.5;
        });

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.time += 0.005;

        // Smooth mouse movement
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        // Deform mesh vertices
        const pos = this.mesh.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);

            // Perlin-style noise simulation using Sine/Cosine waves
            const noise = Math.sin(x * 0.5 + this.time) * Math.cos(y * 0.5 + this.time * 0.8) * 0.5;
            const interaction = Math.exp(-((x - this.mouse.x * 10) ** 2 + (y - this.mouse.y * 5) ** 2) / 2) * 0.8;

            pos.setZ(i, noise + interaction);
        }
        pos.needsUpdate = true;

        // Animate lights
        this.mainLight.position.x = this.mouse.x * 10;
        this.mainLight.position.y = this.mouse.y * 10;

        this.mesh.rotation.z = this.time * 0.05;

        this.renderer.render(this.scene, this.camera);
    }
}

// Load Three.js dynamically if not present
if (typeof THREE === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => {
        new PremiumBackground();
    };
    document.head.appendChild(script);
} else {
    new PremiumBackground();
}
