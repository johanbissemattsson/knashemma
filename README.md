# Knas hemma

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop
```

## Debugging
### Windows
Windows users might encounter ```node-gyp``` errors when trying to npm install. To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

Also sharp is needed (after build tools are installed)
```
npm install --global sharp
```

### Ubuntu and Ubuntu on Windows
Ubuntu users might also encounter ```node-gyp``` errors when trying to npm install. To resolve, make sure node-gyp is installed as well as sharp (for image processing)

```
yarn global add node-gyp
```

followed by

```
yarn global add sharp
```

If met with error ```Cannot find module '../build/Release/sharp.node``` then install libvips (which sharp uses)
```
sudo apt install libvips 
```

If met with error ```Error: librsvg-2.so.2: cannot enable executable stack as shared object requires: Invalid argument``` then run following command and try again.
```execstack -c node_modules/sharp/vendor/lib/librsvg-2.so.2```
https://github.com/gatsbyjs/gatsby/issues/3917

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
