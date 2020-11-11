/**
 * @file config
 */
const {override, fixBabelImports, addLessLoader} = require('customize-cra');
// https://github.com/arackaf/customize-cra/blob/HEAD/api.md
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true
        }
    })
);
