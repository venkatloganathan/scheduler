const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({filename: './dist/app.css'});
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const requireContext = require('require-context');

const libraryName = pkg.name;
const version = pkg.version;
let legacyOutputFile = libraryName + '.js';
let esmOutputFile = libraryName + '.esm.js';

const context = path.resolve(__dirname, 'src');
//const moduleContext = context + '/modules';
const moduleContext = path.resolve(context, 'modules');

const entry = {
  app: './index.js'
};

const legacyOutput = {
  path: path.resolve(__dirname, 'dist'),
  filename: legacyOutputFile
};

const moduleOutput = {
  path: path.resolve(__dirname, 'dist/modules'),
  filename: '[name].js',
};

const esmOutput = {
  path: path.resolve(__dirname, 'dist'),
  filename: esmOutputFile
};

const esmModuleOutput = {
  path: path.resolve(__dirname, 'dist/modules'),
  filename: '[name].esm.js'
};

const optimization = {
  minimizer: [new TerserPlugin()],
};

const devServer = {
  contentBase: path.resolve(__dirname, "./dist/assets/media"),
  compress: true,
  port: 12000,
  stats: 'errors-only',
  open: true
};

const dirSeparator = path.sep;
const moduleFactoryFileName = 'ModuleFactory.js';

let cache = null;

function mapFiles(context) {
  cache = context.keys();
}

mapFiles(requireContext(moduleContext, true, /\ModuleFactory.js$/));

const moduleEntries = {};

for (let i = 0; i < cache.length; i++) {
  const filePath = cache[i];
  const index = filePath.indexOf(dirSeparator);
  if (index >= 0) {
    const dir = filePath.substr(0, index);
    const dirContext = path.resolve(moduleContext, dir);
    moduleEntries[dir] = path.resolve(dirContext, moduleFactoryFileName);
  }
}

const copyLoaderPlugin = new CopyWebpackPlugin([
  {from: 'Say.js', to: path.resolve(__dirname, 'dist'), toType: 'dir'}
]);

const globalPlugin = new webpack.DefinePlugin(
  {
    APP_VERSION: JSON.stringify(version)
  });


const plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: 'index.html'
  }),
  extractPlugin,
  copyLoaderPlugin,
  globalPlugin
];

const esmPlugins = [
  new HtmlWebpackPlugin({
    template: 'index_esm.html'
  }),
  extractPlugin,
  //copyLoaderPlugin,
  globalPlugin
];

const legacyConfig = {
  module: {
    rules: [
      //babel-loader
      {
        test: /\.js$/,
        include: /src/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //html-loader
      {test: /\.html$/, use: ['html-loader']},
      //sass-loader
      {
        test: /\.scss$/,
        //include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      //file-loader(for images)
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      //file-loader(for fonts)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }

    ]
  }
};

const moduleConfig = {
  module: {
    rules: [

      //babel-loader
      {
        test: /\.js$/,
        include: /modules/,
        exclude: [/node_modules/, /src/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      //html-loader
      {test: /\.html$/, use: ['html-loader']},
      //sass-loader
      {
        test: /\.scss$/,
        //include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      //file-loader(for images)
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      //file-loader(for fonts)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }

    ]
  }
};


const esmConfig = {
  module: {
    rules: [

      //babel-loader
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['babel-preset-env',
                {
                  targets: {
                    browsers: [
                      /**
                       *  Browser List: https://bit.ly/2Yjs58M
                       */
                      'Edge >= 16',
                      'Firefox >= 60',
                      'Chrome >= 61',
                      'Safari >= 11',
                      'Opera >= 48'
                    ]
                  },
                  useBuiltIns: 'usage',
                  modules: false,
                  corejs: 2
                }]
            ]
          }
        }
      },
      //html-loader
      {test: /\.html$/, use: ['html-loader']},
      //sass-loader
      {
        test: /\.scss$/,
        //include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      //file-loader(for images)
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      //file-loader(for fonts)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }

    ]
  }
};

const esmModuleConfig = esmConfig;

legacyConfig.context = context;
esmConfig.context = context;
esmModuleConfig.context = context;
moduleConfig.context = context;

legacyConfig.entry = entry;
esmConfig.entry = entry;
moduleConfig.entry = moduleEntries;
esmModuleConfig.entry = moduleEntries;

legacyConfig.output = legacyOutput;
esmConfig.output = esmOutput;
moduleConfig.output = moduleOutput;
esmModuleConfig.output = esmModuleOutput;

legacyConfig.optimization = optimization;
esmConfig.optimization = optimization;
esmModuleConfig.optimization = optimization;

legacyConfig.devServer = devServer;
esmConfig.devServer = devServer;
esmModuleConfig.devServer = devServer;

legacyConfig.plugins = plugins;
esmConfig.plugins = esmPlugins;
esmModuleConfig.plugins = esmPlugins;

//const config = [legacyConfig, moduleConfig, esmConfig, esmModuleConfig];
const config = [legacyConfig, moduleConfig];

module.exports = config;