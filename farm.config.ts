import { defineConfig } from '@farmfe/core';
import farmJsPluginPostcss from '@farmfe/js-plugin-postcss';

export default defineConfig({
  plugins: ['@farmfe/plugin-react', farmJsPluginPostcss()],
  compilation: {
    output: {
      targetEnv: 'browser-esnext',
    },
  },
  server: {
    port: 3000,
  },
});
