import babel from 'gulp-babel';

export default (gulp) => {
  gulp.task('babel:js', () => {
    const gs = gulp.src([
        '**/*.js',
        '!./gulp/*.js',
        '!./node_modules/**/*'
      ]).pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('dist'));
    gs.on('end', () => {
      /* eslint-disable no-console */
      console.log('JS Linting success! code looks clean!'.green);
    });
    return gs;
  });
};
