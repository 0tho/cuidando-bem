//gh-pages
'use strict';
module.exports = {
    options : {
        
    },

    prod : {
        options : {
            optimizationLevel: 7
        },
        files : [
            {
                expand: true,

                cwd: '<%= pkg.source %>' + '/images',
                dest: '<%= pkg.production %>' + '/images',
                src: ['**/*.{png, jpg, jpeg}']
            }
        ]
    }
};