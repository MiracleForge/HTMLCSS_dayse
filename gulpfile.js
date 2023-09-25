const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Função para compilar SCSS em CSS
function scssTask() {
  return src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

// Função para processar arquivos JavaScript
function jsTask() {
  return src('src/js/*.js')
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// Função para iniciar o servidor de desenvolvimento com BrowserSync
function browserSyncServe() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
}

// Função para observar alterações nos arquivos SCSS e JavaScript
function watchTask() {
  watch('src/scss/**/*.scss', scssTask);
  watch('src/js/*.js', jsTask);
  watch('*.html').on('change', browserSync.reload);
}

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);
exports.build = series(scssTask, jsTask);
