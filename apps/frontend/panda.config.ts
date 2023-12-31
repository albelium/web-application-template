import { defineConfig } from '@pandacss/dev'
import { corePreset } from 'panda-preset'

export default defineConfig({
  presets: [corePreset],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/features/**/*.{ts,tsx,js,jsx}',
    './node_modules/ui/dist/panda.json',
    './node_modules/ui/src/**/*.tsx',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  emitPackage: true,
  outdir: '@web-application-template-admin/styled-system',
})
