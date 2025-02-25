// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

// Add SVG transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

// Configure resolver
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts
    .filter((ext) => ext !== 'svg')
    .concat('jpg', 'jpeg', 'png', 'gif', 'webp'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};

module.exports = withNativeWind(config, {
  input: './global.css',
  projectRoot: __dirname,
});
