#!/usr/bin/env node

/**
 * Script to create a new client website from template
 * Usage: node scripts/new-client.js client-name "Client Display Name"
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Get arguments
const clientId = process.argv[2]
const clientName = process.argv[3] || clientId

if (!clientId) {
  console.error('❌ Error: Client ID required')
  console.log('Usage: npm run new-client client-name "Client Display Name"')
  process.exit(1)
}

// Validate client ID format
if (!/^[a-z0-9-]+$/.test(clientId)) {
  console.error('❌ Error: Client ID must be lowercase letters, numbers, and hyphens only')
  process.exit(1)
}

const templateDir = path.join(__dirname, 'apps', 'adam-plumbing')
const newClientDir = path.join(__dirname, 'apps', clientId)

// Check if template exists
if (!fs.existsSync(templateDir)) {
  console.error('❌ Error: Template directory not found')
  console.error('Expected:', templateDir)
  process.exit(1)
}

// Check if client already exists
if (fs.existsSync(newClientDir)) {
  console.error(`❌ Error: Client '${clientId}' already exists`)
  process.exit(1)
}

console.log(`\n🚀 Creating new client: ${clientName} (${clientId})\n`)

// Copy template
console.log('📁 Copying template files...')
execSync(`cp -r "${templateDir}" "${newClientDir}"`)

// Update package.json
console.log('📝 Updating package.json...')
const packageJsonPath = path.join(newClientDir, 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
packageJson.name = clientId
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

// Update quoteflow.config.ts
console.log('🎨 Updating quoteflow.config.ts...')
const configPath = path.join(newClientDir, 'quoteflow.config.ts')
let configContent = fs.readFileSync(configPath, 'utf8')
configContent = configContent
  .replace(/clientId: '.*?'/, `clientId: '${clientId}'`)
  .replace(/companyName: '.*?'/, `companyName: '${clientName}'`)
fs.writeFileSync(configPath, configContent)

// Update .env.local.example
console.log('⚙️  Updating environment config...')
const envPath = path.join(newClientDir, '.env.local.example')
let envContent = fs.readFileSync(envPath, 'utf8')
envContent = envContent.replace(/NEXT_PUBLIC_CLIENT_ID=.*/, `NEXT_PUBLIC_CLIENT_ID=${clientId}`)
fs.writeFileSync(envPath, envContent)

// Create .env.local from example
const envLocalPath = path.join(newClientDir, '.env.local')
fs.copyFileSync(envPath, envLocalPath)

// Update layout.tsx metadata
console.log('📄 Updating metadata...')
const layoutPath = path.join(newClientDir, 'src', 'app', 'layout.tsx')
let layoutContent = fs.readFileSync(layoutPath, 'utf8')
layoutContent = layoutContent.replace(
  /metadataBase: new URL\('.*?'\)/,
  `metadataBase: new URL('https://www.${clientId}.co.uk')`
)
fs.writeFileSync(layoutPath, layoutContent)

console.log('\n✅ Client created successfully!\n')
console.log('📋 Next steps:\n')
console.log(`1. Update branding and pricing:`)
console.log(`   nano apps/${clientId}/quoteflow.config.ts\n`)
console.log(`2. Set environment variables:`)
console.log(`   nano apps/${clientId}/.env.local\n`)
console.log(`3. Add logo and favicon:`)
console.log(`   apps/${clientId}/public/logo.png`)
console.log(`   apps/${clientId}/public/favicon.ico\n`)
console.log(`4. Test locally:`)
console.log(`   npm run dev --filter=${clientId}\n`)
console.log(`5. Deploy to Vercel:`)
console.log(`   - Root Directory: apps/${clientId}`)
console.log(`   - Build Command: cd ../.. && npx turbo run build --filter=${clientId}`)
console.log(`   - Add environment variables\n`)
console.log('🎉 Happy building!\n')


