const { src, dest, series } = require('gulp');

function buildSite() {
  // Tarefa para compilar e preparar seu site, por exemplo, minificar CSS, JavaScript, etc.
  return src('src/**/*')
    .pipe(dest('dist/'));
}

exports.build = series(buildSite);
