import findFiles from 'find';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {basename} from 'path';
import runSequence from 'run-sequence';

const plugins = gulpLoadPlugins();
const state = {};

/**
 * Automatically find task scripts in current directory and require them
 */
findFiles
  .fileSync(/^((?!index).)*.js$/, __dirname)
  .forEach(file => {
    const taskPath = basename(file, '.js');
    const task = require(`./${taskPath}`);
    (typeof task === 'function' ? task : task.default)(gulp, plugins, state);
  });

  gulp.task('default', (callback) => {
    runSequence('clean', 'lint:js', callback);
  });
