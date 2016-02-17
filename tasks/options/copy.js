//copy
'use strict';
module.exports = {

    js: {
        cwd: '<%= pkg.source %>' + '/javascript',
        dest: '<%= pkg.development %>' + '/javascript',
        src: ['**'],
        expand: true
    },
    html: {
        cwd: '<%= pkg.source %>' + '/html',
        dest: '<%= pkg.development %>' + '/html',
        src: ['**'],
        expand: true
    },
    dev: {
        options:{

        },
        files: [
            {
                expand: true,
                cwd: '<%= pkg.source %>',
                dest: '<%= pkg.development %>',
                src: [
                    'css/**.css',
                    'fonts/**',
                    'html/**',
                    'images/**',
                    'javascript/**',
                    'sounds/**',
                    'index.html'
                ]
            }
        ]
    },
    libs: {
        options:{

        },
        files: [
            [
                {
                    dest: '<%= pkg.development %>'+'/javascript/libs/jquery.js',
                    src: ['./'+ '<%= pkg.libraries %>' +'/jquery/dist/jquery.js']
                },
                {
                    dest: '<%= pkg.development %>'+'/javascript/libs/jquery-ui.js',
                    src: ['./'+ '<%= pkg.libraries %>' +'/jquery-ui/jquery-ui.js']
                },
                {
                    dest: '<%= pkg.development %>'+'/javascript/libs/jquery.mask.js',
                    src: ['./'+ '<%= pkg.libraries %>' +'/jQuery-Mask-Plugin/dist/jquery.mask.js']
                },
                {
                    dest: '<%= pkg.development %>'+'/javascript/libs/require.js' ,
                    src: ['./'+ '<%= pkg.libraries %>' +'/requirejs/require.js']
                },
                {
                    dest: '<%= pkg.development %>'+'/javascript/libs/text.js' ,
                    src: ['./'+ '<%= pkg.libraries %>' +'/requirejs-text/text.js']
                },
                {
                    dest: '<%= pkg.development %>'+'/javascript/libs/simpleStorage.js',
                    src: ['./'+ '<%= pkg.libraries %>' +'/simpleStorage/simpleStorage.js']
                }
            ]
        ]
    },
    prod: {
        options:{
            cwd: '<%= pkg.development %>',
            dest: '<%= pkg.production %>',
            src: ['**']
        }
    },

    docs: {
        cwd: '<%= pkg.source %>',
        dest: '<%= pkg.documentation %>',
        src: [
            '**/*.js',
            '!scripts/libs/*.js',
            '!scripts/gameConfig/*.js',
            '!scripts/stageConfig/*.js',
            '!scripts/main.js',
            '!scripts/requireJsBootstrap.js'
        ],
        expand: true
    }
};
