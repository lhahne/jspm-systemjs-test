System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:process@0.10.1/browser",
      "github:components/jquery@2.1.3/jquery",
      "npm:process@0.10.1",
      "github:components/jquery@2.1.3",
      "github:jspm/nodelibs-process@0.1.1/index",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:lodash@3.8.0/index",
      "npm:lodash@3.8.0",
      "lib/bootstrap",
      "lib/main"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.2.16",
    "babel-runtime": "npm:babel-runtime@5.2.16",
    "core-js": "npm:core-js@0.9.6",
    "jquery": "github:components/jquery@2.1.3",
    "lodash": "npm:lodash@3.8.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

