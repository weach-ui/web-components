import typescript from 'rollup-plugin-typescript2';
import createDefaultConfig from '@open-wc/building-rollup/modern-and-legacy-config';

const configs = createDefaultConfig({
  input: './demo/index.html',
  outputDir: './demo/dist'
});

export default configs.map(config => ({
  ...config,
  plugins: [...config.plugins, typescript()]
}));
