module.exports = {
    "root": true,
    "env": {
        "node": true,
        "mocha": true,
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "eslint.autoFixOnSave": true,
    "rules": {
        //Style configuration
        "indent": [
            2,
            "tab",
            {
                "SwitchCase": 1,
                "VariableDeclarator": 2
            }
        ],
        "space-before-function-paren": [
            2,
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "no-use-before-define": [
            2,
            "nofunc"
        ],
        "comma-dangle": [
            1
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "quotes": [
            2,
            "single"
        ],
        "semi": [
            2,
            "always"
        ],
        //ECMAScript 6
        "no-var": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "object-shorthand": 2,
        "arrow-spacing": 2,
        "no-const-assign": 2,
        "arrow-parens": [
            2,
            "always"
        ],
        //"prefer-rest-params": 2,
        "prefer-template": 2,
        //Best Practices
        "no-multi-spaces": 2,
        "no-alert": 2,
        "no-console": 0,
        "no-new-wrappers": 2,
        "no-useless-concat": 2,
        "no-self-compare": 2,
        "no-trailing-spaces": 2,
        "radix": 2,
        "no-magic-numbers": 1,
        "no-floating-decimal": 2
    }


}
