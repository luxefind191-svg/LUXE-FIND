import inquirer from 'inquirer';
import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

// Configuration
const CONFIG = {
    owner: process.env.GITHUB_OWNER || 'unknown', // User must set this
    repo: process.env.GITHUB_REPO || 'luxe-find',
    branch: process.env.GITHUB_BRANCH || 'main',
    localDataPath: './data/products'
};

const CATEGORIES = {
    women: ['skincare', 'makeup', 'fragrance'],
    men: ['skincare', 'grooming', 'fragrance'],
    unisex: ['essentials']
};

console.log('🖤 Luxe Sync – Premium Product Curator Bot Initialized');

async function main() {
    if (!process.env.GITHUB_TOKEN) {
        console.warn('⚠️  GITHUB_TOKEN is missing in .env. Commits will fail if not simulated.');
    }

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to curate?',
            choices: ['Add New Product', 'Update Existing Product', 'Exit']
        }
    ]);

    if (answers.action === 'Exit') {
        console.log('Exiting Luxe Sync.');
        return;
    }

    if (answers.action === 'Add New Product') {
        await addNewProduct();
    } else {
        console.log('Feature coming soon.');
    }
}

async function addNewProduct() {
    const product = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Product Name:',
            validate: input => input.length > 3 || 'Name too short.'
        },
        {
            type: 'input',
            name: 'brand',
            message: 'Brand:',
            default: 'Luxe Find Selection'
        },
        {
            type: 'list',
            name: 'gender',
            message: 'Target Gender:',
            choices: Object.keys(CATEGORIES)
        },
        {
            type: 'list',
            name: 'category',
            message: 'Sub-Category:',
            choices: (answers) => CATEGORIES[answers.gender]
        },
        {
            type: 'input',
            name: 'description',
            message: 'Short Premium Description (2-3 lines):',
            validate: input => {
                if (input.length < 20) return 'Too short for premium description.';
                if (input.includes('magic') || input.includes('cure')) return 'Avoid exaggerated claims (magic, cure).';
                return true;
            }
        },
        {
            type: 'input',
            name: 'price',
            message: 'Price (USD):',
            validate: input => !isNaN(parseFloat(input)) || 'Must be a number.'
        },
        {
            type: 'input', // Could be recursive for multiple benefits
            name: 'benefits',
            message: 'Key Benefits (comma separated):'
        },
        {
            type: 'input',
            name: 'imageUrl',
            message: 'Image URL:',
            validate: input => input.startsWith('http') || 'Must be a valid URL.'
        }
    ]);

    // Transform data
    product.price = parseFloat(product.price).toFixed(2);
    product.benefits = product.benefits.split(',').map(b => b.trim()).filter(b => b);
    product.id = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    // Preview
    console.log('\n🔎 Review Product Details:');
    console.log(JSON.stringify(product, null, 2));

    const confirmation = await inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message: 'Is this content satisfactory for publishing?',
        default: false
    }]);

    if (!confirmation.ok) {
        console.log('❌ Action cancelled.');
        return;
    }

    await commitProduct(product);
}

async function commitProduct(product) {
    const filePath = `data/products/${product.gender}/${product.category}.json`;

    console.log(`\n🔄 Fetching current data from ${filePath}...`);

    let currentData = [];
    let sha; // File SHA for update

    // Try fetch from GitHub first if token exists, else local fallback
    const octokit = process.env.GITHUB_TOKEN ? new Octokit({ auth: process.env.GITHUB_TOKEN }) : null;

    if (octokit) {
        try {
            const { data } = await octokit.repos.getContent({
                owner: CONFIG.owner,
                repo: CONFIG.repo,
                path: filePath,
                ref: CONFIG.branch
            });

            if (Array.isArray(data)) {
                // It's a directory? Shouldn't be.
            } else {
                const content = Buffer.from(data.content, 'base64').toString('utf-8');
                currentData = JSON.parse(content);
                sha = data.sha;
            }
        } catch (error) {
            if (error.status === 404) {
                console.log('File not found on GitHub, creating new.');
            } else {
                console.error('GitHub Error:', error.message);
                console.log('Falling back to local file system...');
                // Fallback logic could go here, but for now we rely on the user having the file locally to "simulate" or just error out.
                // Actually, let's read local file as source of truth if GH fails or not configured
            }
        }
    }

    // Local Fallback if no specific GitHub data retrieved (or no token)
    if (!sha) {
        try {
            const localContent = await fs.readFile(filePath, 'utf-8');
            currentData = JSON.parse(localContent);
        } catch (err) {
            console.log('Local file not found or empty, starting fresh.');
        }
    }

    // Add new product
    currentData.push(product);

    const newContent = JSON.stringify(currentData, null, 2);

    // Commit
    if (octokit && CONFIG.owner !== 'unknown') {
        try {
            await octokit.repos.createOrUpdateFileContents({
                owner: CONFIG.owner,
                repo: CONFIG.repo,
                path: filePath,
                message: `Add ${product.name} to ${product.gender} ${product.category} - Luxe Find`,
                content: Buffer.from(newContent).toString('base64'),
                sha: sha, // undefined if creating new
                branch: CONFIG.branch
            });
            console.log('✅ Successfully committed to GitHub!');
        } catch (err) {
            console.error('❌ Failed to commit to GitHub:', err.message);
            // Save locally as backup
            await fs.writeFile(filePath, newContent);
            console.log('✅ Saved locally instead.');
        }
    } else {
        console.log('⚠️  No GitHub configuration. Saving locally only.');
        await fs.writeFile(filePath, newContent);
        console.log('✅ Saved locally.');
    }
}

main().catch(console.error);
