/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 const {getDefaultConfig} = require('metro-config')
 const path = require('path');

 module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts} }= await getDefaultConfig();

  return {
   transformer: {
     getTransformOptions: async () => ({
       transform: {
         experimentalImportSupport: false,
         inlineRequires: false,
       },
     }),
     babelTransformerPath: require.resolve('react-native-svg-transformer','react-native-typescript-transformer')
   }, 
   resolver: {
     assetExts: assetExts.filter(ext => ext !== 'svg'),
     sourceExts: [...sourceExts, 'svg'],
   },
 }
}
);