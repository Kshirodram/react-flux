import eslint from 'gulp-eslint';

export default (gulp) => {
  gulp.task('lint:js', () => {
    const gs = gulp.src([
        '**/*.js',
        '!./node_modules/**/*',
        '!./dist/**/*'
      ])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
    gs.on('end', () => {
      /* eslint-disable no-console */
      console.log('JS Linting success! code looks clean!'.green);
    });
    return gs;
  });
};
