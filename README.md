# EPG app

This app has been made with [Dinou](https://dinou.dev), a minimal React 19 framework. It uses also `Suspense` from [react-enhanced-suspense](https://www.npmjs.com/package/react-enhanced-suspense).

## Instruction on how to use the app

To use this app, you need [this package](https://github.com/NoriginMedia/candidate-tester). You do `npm install` in this package and then `npm start`. When you see `Mock service running at http://localhost:1337` then you are ready to use the EPG app.

\*Note: If you use Windows, change the `start:mock-api` script of the above package to `osprey-mock-service -f ./node_modules/nm-mock-api/demo.raml -p 1337 --cors` in order to work.

### Clone and install dependencies

Clone the repo and do `npm install`.

### Build it and start it

You can build the app with `npm run build`. Then do `npm start` and navigate to `localhost:3000` to see the app in action.

### To develop

Alternatively to the build process, you can just run `npm run dev` to start the app in development mode. When doing so, you should wait for the log of Rollup `waiting for changes...` to appear on the terminal. Then you can navigate to `localhost:3000`.
