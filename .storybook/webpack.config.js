const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

function modifyBabel(config) {
  const babelRules = config.module.rules.filter(rule => {
    let isBabelLoader = false;

    if (rule.loader && rule.loader.includes('babel-loader')) {
      isBabelLoader = true;
    }

    return rule.use && rule.use.loader === 'babel-loader';
  });

  // Add Typescript to Babel Loader Test
  babelRules.forEach(rule => {
    rule.test = /\.(jsx|js|ts|tsx)$/;
    rule.use.options.presets.push('@babel/preset-typescript');
    rule.use.options.plugins.push([
      '@babel/plugin-proposal-decorators',
      { legacy: true }
    ]);
  });
}

function addTypescript(config) {
  config.resolve.extensions.push('.ts', '.tsx', '.json');
  modifyBabel(config);
}

module.exports = ({ config }) => {
  const custom = defaultConfig({
    config,
    transpilePackages: ['lit-html', 'lit-element', '@open-wc']
  });

  addTypescript(custom);

  return custom;
};
