'use strict';
module.exports = function (grunt) {
    grunt.registerTask('build', 'Builds project', function (n) {
        var pkg = grunt.file.readJSON('package.json');

        var target = grunt.option('target') || 'dev'

        grunt.log.write('Building ' + pkg.name + ' ' + target);

        //Build for development
        grunt.task.run([
            'clean:dev',
            'copy:dev',
            'less:dev'
        ]);

        if(target == 'prod') {
            //Take what was built for development and treat it for production
            grunt.task.run([
                'clean:prod',
                'copy:prod',
                'htmlmin:prod',
                'cssmin:prod',
                'replace:prod',
                'requirejs:prod'
            ]);
        }
    });
};
//     [
//         'clean:build',
//         'copy:build',
//         'htmlmin:build',
//         'less:build',
//         'clean:build_less',
//         'replace',
//         'cssmin:build',
//         'clean:final',
//         'requirejs:compile',
//         'clean:build',
//         'rename:build'
//     ]
// );
