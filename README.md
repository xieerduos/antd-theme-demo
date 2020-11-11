# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 开发日志

```bash
# 创建项目
$ npx create-react-app antd-demo

# 启动项目
$ cd antd-demo
$ yarn install
$ npm start

# 安装antd-theme-generator
$ yarn add antd-theme-generator --dev

# antd
$ yarn add antd

# 创建文件
$ touch color.js
$ mkdir src/styles
$ touch src/styles/main.less src/styles/vars.less
```

color.js

```js
const path = require('path');
const fs = require('fs');
// const {generateTheme, getLessVars} = require('../../index');
// const { generateTheme, getLessVars } = require('../../../antd-theme-webpack-plugin/');
const {generateTheme, getLessVars} = require('antd-theme-generator');

const themeVariables = getLessVars(path.join(__dirname, './src/styles/vars.less'));
const defaultVars = getLessVars('./node_modules/antd/lib/style/themes/default.less');
const darkVars = {
    ...getLessVars('./node_modules/antd/lib/style/themes/dark.less'),
    '@primary-color': defaultVars['@primary-color'],
    '@picker-basic-cell-active-with-range-color': 'darken(@primary-color, 20%)'
};
const lightVars = {
    ...getLessVars('./node_modules/antd/lib/style/themes/compact.less'),
    '@primary-color': defaultVars['@primary-color']
};
// fs.writeFileSync('./src/dark.json', JSON.stringify(darkVars));
// fs.writeFileSync('./src/light.json', JSON.stringify(lightVars));
// fs.writeFileSync('./src/theme.json', JSON.stringify(themeVariables));

const options = {
    stylesDir: path.join(__dirname, './src'),
    antDir: path.join(__dirname, './node_modules/antd'),
    varFile: path.join(__dirname, './src/styles/vars.less'),
    themeVariables: Array.from(
        new Set([...Object.keys(darkVars), ...Object.keys(lightVars), ...Object.keys(themeVariables)])
    ),
    outputFilePath: path.join(__dirname, './public/color.less')
};

generateTheme(options)
    .then(less => {
        console.log('Theme generated successfully');
    })
    .catch(error => {
        console.log('Error', error);
    });
```

生成 public/color.less

```bash
$ node color.js
```

public/index.html

```html
<body>
    <link rel="stylesheet/less" type="text/css" href="%PUBLIC_URL%/color.less" />
    <script>
        window.less = {
            async: true,
            env: 'production'
        };
    </script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>
```

浏览器 console

```js
window.less
{version: Array(3), data: {…}, tree: {…}, Environment: ƒ, AbstractFileManager: ƒ, …}
```

package.json

```js
"scripts": {
    "start": "npm run color && react-scripts start",
    "build": "npm run color && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "color": "node color.js"
}
```

### 控制台报错 console

```bash
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wave which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely
```

src/index.js

```js
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
```

### 安装 customize-cra

```bash
$ touch config-overrides.js

$ yarn add customize-cra  react-app-rewired --dev
```

config-overrides.js

```js
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
```

<!-- https://github.com/arackaf/customize-cra/blob/HEAD/api.md#addlessloaderloaderoptions -->

```bash
$ yarn add --dev less less-loader

```

package.json

```js
"scripts": {
    "start": "npm run color && react-app-rewired start",
    "build": "npm run color && react-app-rewired build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "color": "node color.js"
},
```

运行`npm start`报错

```bash
Failed to compile
./src/index.js
Error: Cannot find module 'babel-plugin-import' from '/Users/v_lishaohai/Desktop/study/react/antd-demo'
   at Array.map (<anonymous>)
```

```bash
$ yarn add babel-plugin-import --dev

$ yarn add postcss --dev
```

设置默认的主题色

src/styles/vars.less

```less
@import '~antd/lib/style/themes/default.less';

@primary-color: #f00; // 全局主色
```

浏览器控制台 console

```js
window.less.modifyVars({'@primary-color': '#00f'});
```

即可以看到效果

---

src/App.js

```js
/**
 * @file App.js
 */
import {useState, useEffect} from 'react';
import './App.css';
import {Button} from 'antd';

const THEME_RED = '#f00';
const THEME_BLUE = '#1890ff';

export default function App() {
    const [theme, setTheme] = useState(THEME_BLUE);

    useEffect(() => {
        window.less.modifyVars({
            '@primary-color': theme
        });
        // effect
        return () => {};
    }, [theme]);

    return (
        <div className="App">
            <Button type="primary">当前主题颜色：{theme}</Button>
            <hr />
            <Button onClick={() => setTheme(THEME_RED)} type="default">
                主题红色: {THEME_RED}
            </Button>

            <Button onClick={() => setTheme(THEME_BLUE)} type="default">
                主题蓝色:{THEME_BLUE}
            </Button>
        </div>
    );
}
```
