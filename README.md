# Custom Eslint Plugin

Code for the [Youtube video](https://www.youtube.com/watch?v=H0cH4iyZsHE) on how to create your own eslint plugin


## Commands to run
Run below commands to install the relevenat packages

```sh
npm i -g yo
```

```sh
npm i -g generator-eslint
```

Run below command to scaffold the eslint plugin 
```sh
yo eslint:plugin
```

Run below command to create a symlink in the local system to the created eslint plugin module

```sh
npm link (at the root level)
```

Run below command where you would like to install the created eslint plugin

```sh
npm link eslint-plugin-custom-no-console
```
