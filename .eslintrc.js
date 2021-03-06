module.exports = {
  "extends": "airbnb",
  "plugins": [
    "import",
    "react",
    "react-native"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": 1,
    // "jsx-quotes": ["error", "prefer-single"],
    "jsx-quotes": "off",
    "keyword-spacing": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/jsx-boolean-value": "off",
    "space-before-function-paren": "off",
    "quotes": "off",
  },
  "settings": {
      "import/resolver": {
      "webpack": {
        "config": 'webpack.config.babel.js'
      }
    }
  }
}
