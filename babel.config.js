module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks'
          }
        }
      ],
      ['react-native-reanimated/plugin'],
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ],
  };
};
