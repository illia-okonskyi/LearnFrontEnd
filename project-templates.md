# 1 Vite + React + ESLint + Redux (RTK)

- Run console commands
```
npm create vite@latest <APP-NAME> -- --template react
cd <APP-NAME>
npm install
npm install eslint --save-dev
npm install vite-plugin-eslint --save-dev
npm install eslint-config-react-app --save-dev
```
- Create .eslintrc file:
```
{
  "extends": [
    "react-app"
  ]
}
```
- Update vite.config.js:
```
+import eslint from 'vite-plugin-eslint';
+plugins: [react(), eslint()],
```
- Install Redux
```
npm install @reduxjs/toolkit
npm install react-redux
``` 
- Create a Redux store using RTK's `configureStore` API, and pass in at least one reducer function
- Import the Redux store into your application's entry point file (such as src/index.js)
- Wrap your root React component with the `<Provider>` component from React-Redux, like:
```
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```