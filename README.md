# nocra-electron-ts
A non-CRA boilerplate for an Electron app with React, TypeScript, and Webpack

*Why?* Too much going on under the hood with `create-react-app`, so things have been stripped down to allow for more freedom.

## Setting Up
* [Download](https://github.com/slashinfty/nocra-electron-ts/zipball/main/) and unzip the latest release
* Enter the extracted folder and initiate the project with `npm init`
* Install dependencies

```
npm i -D @types/react @types/react-dom concurrently cross-env css-loader electron electron-builder html-webpack-plugin react react-dom ts-loader typescript wait-on webpack webpack-cli webpack-dev-server
```

* Add scripts to `package.json`

```
"scripts": {
    "dev": "concurrently \"webpack serve\" \"wait-on http://localhost:9000/ && cross-env NODE_ENV=development electron ./build/electron.js\"",
    "build": "rm -rf build/ && webpack --config ./webpack.config.js",
    "build-linux": "npm run build && electron-builder -l",
    "build-mac": "npm run build && electron-builder -m",
    "build-windows": "npm run build && electron-builder -w"
},
```

* Add [Electron Builder](https://www.electron.build/configuration/configuration#configuration) options to `package.json` (preferred output directory is `/dist`)

## Next Steps
* Run `npm run dev` to launch the dev server and Electron window (updates on changes)
* Install React components and UI frameworks
* Replace this `README` with your own