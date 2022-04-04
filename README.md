A non-CRA boilerplate for an Electron app with React, TypeScript, and Webpack

**Why?** Too much going on under the hood with `create-react-app`, so things have been stripped down to allow for more freedom.

## Setting Up
* [Download](https://github.com/slashinfty/nocra-electron-ts/archive/refs/heads/main.zip) and unzip the latest release
* Rename the folder, then enter it and initiate the project with `npm init` (entry point should be `index.js`)
* Install dependencies

```
npm i -D @types/react @types/react-dom concurrently cross-env css-loader electron electron-builder electron-devtools-installer html-webpack-plugin react react-dom ts-loader typescript wait-on webpack webpack-cli webpack-dev-server
```

* Add scripts to `package.json`

```
"scripts": {
  "dev": "rm -rf build/ && webpack -c ./webpack.electron.config.js && concurrently \"webpack s -c ./webpack.web.config.js\" \"wait-on http://localhost:9000/ && cross-env NODE_ENV=development ELECTRON_DISABLE_SECURITY_WARNINGS=true electron ./build/electron.js\"",
  "build": "rm -rf build/ && webpack -c ./webpack.electron.config.js && webpack -c ./webpack.web.config.js",
  "build-linux": "npm run build && electron-builder -l",
  "build-mac": "npm run build && electron-builder -m",
  "build-windows": "npm run build && electron-builder -w"
}
```

* Add [Electron Builder](https://www.electron.build/configuration/configuration#configuration) options to `package.json` (preferred output directory is `/dist`)

## Next Steps
* Run `npm run dev` to launch the dev server and Electron window (updates on changes and includes React devtools)
* Install React components and UI frameworks
* Replace this `README` with your own