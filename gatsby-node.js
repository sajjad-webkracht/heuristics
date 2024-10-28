exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.fbx$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'src/models/',
                  publicPath: '/src/models/',
                },
              },
            ],
          },
        ],
      },
    });
  };