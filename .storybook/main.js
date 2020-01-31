const reactWebpackConfig = require("../config/webpack.config.js")(
  "development"
);

// module.exports = {
//   webpackFinal: async config => {
//     return {
//       ...config,
//       ...reactWebpackConfig,
//       entry: config.entry,
//       output: config.output
//     };
//   }
// };

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
