/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(env, argv) {
  const config = {
    mode: 'production',
    entry: './index.js',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    optimization: {
      minimizer: [
        new TerserPlugin({parallel: true, terserOptions: {}}),
      ]
    },
    module: {
      rules: [
        {
            test: /(static)*\.(html|bin|json)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
      ],
    }
  };
  return config;
}