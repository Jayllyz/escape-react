import { defineConfig } from '@farmfe/core';
import farmJsPluginPostcss from '@farmfe/js-plugin-postcss';
import react from '@farmfe/plugin-react';

export default defineConfig({
  plugins: [react({ runtime: 'automatic', refresh: true }), farmJsPluginPostcss()],
  compilation: {
    output: {
      targetEnv: 'browser-esnext',
    },
  },
  server: {
    port: 3000,
  },
});
