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
- Add Redux
```
npm install @reduxjs/toolkit
npm install react-redux
``` 