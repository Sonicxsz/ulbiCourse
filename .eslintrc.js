module.exports = {
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  "overrides": [
    {
      "env": {
        "browser": true,
        "jest": true,
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
    "linebreak-style": 0,
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/react-in-jsx-scope": "off",
    "no-multi-spaces": ["error"],
    "react/jsx-indent" : ["error", 2],
    "react/jsx-indent-props": [2, 2],
    "indent": [2, 2],
    "import/no-unresolved": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/no-deprecated": "off",
    "sort-imports": [
      "error", 
      { 
        "ignoreCase": true, 
        "ignoreDeclarationSort": true 
      }
    ], 

  }
}
