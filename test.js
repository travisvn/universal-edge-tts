#!/usr/bin/env node

/**
 * Simple test script to verify the proxy package works correctly
 */

console.log('🧪 Testing universal-edge-tts proxy package...\n');

try {
  // Test main export
  console.log('📦 Testing main export...');
  const main = require('./index.js');
  console.log('✅ Main export loaded successfully');

  // Test browser export
  console.log('📦 Testing browser export...');
  const browser = require('./browser.js');
  console.log('✅ Browser export loaded successfully');

  // Test isomorphic export
  console.log('📦 Testing isomorphic export...');
  const isomorphic = require('./isomorphic.js');
  console.log('✅ Isomorphic export loaded successfully');

  // Test webworker export
  console.log('📦 Testing webworker export...');
  const webworker = require('./webworker.js');
  console.log('✅ Webworker export loaded successfully');

  console.log('\n🎉 All proxy exports working correctly!');
  console.log('\n📋 Available exports:');
  console.log('  - require("universal-edge-tts")           // Main export');
  console.log('  - require("universal-edge-tts/browser")   // Browser export');
  console.log(
    '  - require("universal-edge-tts/isomorphic")// Isomorphic export'
  );
  console.log(
    '  - require("universal-edge-tts/webworker") // Webworker export'
  );
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
