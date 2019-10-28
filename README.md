# Bora Malhar!
Bora Malhar é uma API desenvolvido em NodeJS com Express. #portfolio

## Configuração do ESLint + Prettier

Instale via Yarn:
```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint
yarn eslint --init
```

Utilize o padrão do `airbnb` que irá gerar o arquivo `.eslintrc.js`

```
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
```

Adicione o arquivo de configuração do Prettier:

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Configuração do EditorConfig

```
root = true

[*]
charset = utf-8
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```

## Configuração do Nodemon com Sucrase

```
yarn add -D nodemon sucrase
```

Crie o arquivo `nodemon.json`:

```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

Configure no arquivo `package.json`:

```
"scripts": {
    "dev": "nodemon src/server.js",
    "debug": "nodemon --inspect src/server.js"
  },
```

