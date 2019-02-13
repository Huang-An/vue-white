module.exports = {
    "env": {
        "browser": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": "standard",
    "plugins": [
        "html"
    ],
    "rules": {
        "indent": [2, 4],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "space-before-function-paren": [0, "always"]
    }
};