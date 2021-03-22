module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
  },
}
