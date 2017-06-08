/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-18 14:14:52
 * @version $Id$
 */
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src(['dist/css', 'dist/js'], { read: false })
               .pipe(clean());
});