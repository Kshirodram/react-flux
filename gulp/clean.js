import del from 'del';

export default (gulp) => {
  gulp.task('clean', cb => {
    del.sync('./dist', {force: true});
    cb();
  });
};
