module.exports = function(config) {


  config.setBrowserSyncConfig({
    https: {
      key: '/.ssl/localhost.key',
      cert: '/.ssl/localhost.crt'
    }
  });

  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};
