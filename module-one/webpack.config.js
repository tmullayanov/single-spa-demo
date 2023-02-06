const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "home",
    projectName: "module-one",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // ключ - имя, по которому мы обращаемся к библиотеке в этом модуле
    // значение - название, по которому библиотека найдется в systemJS-importmap
    // этот importmap прописывается в 
    externals: {
      '@home/lib': '@home/lib',
      '@home/nested': '@home/nested-mf',
      'single-spa': 'single-spa'
    }
  });
};
