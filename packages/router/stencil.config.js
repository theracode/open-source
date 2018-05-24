exports.config = {
  enableCache: false,
  namespace: 'router',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
