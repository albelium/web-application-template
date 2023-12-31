import { defineConfig } from '@pandacss/dev'
import { corePreset } from 'panda-preset'

export default defineConfig({
  presets: [corePreset],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {},

  // The output directory for your css system
  emitPackage: true,
  outdir: '@web-application-template-admin/styled-system',
  jsxFramework: 'react',
})
