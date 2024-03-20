# Files by Clipboard

Transfer files across restrictive environments by using plaintext and the clipboard.

## Overview

To encode, the following process is used:

```mermaid
graph TD
  Data --> cd["Compressed Data (gzip)"] --> b64[Base64 String with Checksum];
```

To decode, the reverse process is used:

```mermaid
graph TD
  b64[Base64 String with Checksum] --> cd["Compressed Data (gzip)"] --> Data;
```

All of this processing is done in-browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
