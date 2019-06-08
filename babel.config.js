module.exports = api => {
  api.cache(true);

  return {
    presets: [
      process.env.NODE_ENV === 'production' && [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: '2'
        }
      ],
      '@babel/preset-typescript'
    ].filter(Boolean),
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread',
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  };
};
