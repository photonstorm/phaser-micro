module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.initConfig({

        clean: {

            src: ['dist/*']

        },

        uglify: {

            micro: {
                options: {
                    banner: '/* Phaser-Micro v1.0.0 (C) Copyright 2015 Photon Storm Ltd. */\n'
                },
                src: ['src/PhaserMicro.js'],
                dest: 'dist/phaser-micro.min.js'
            }

        },

        jshint: {

            src: {
                src: [
                    'src/*.js',
                ],
                options: { jshintrc: '.jshintrc' }
            }

        },

        jsdoc : {
            dist : {
                src: [
                    'src/*.js',
                    'README.md'
                ],
                options: {
                    destination: "api-docs",
                    template : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
                    configure : "conf.json",
                    private: false,
                    recurse: true,
                    lenient: false
                }
            }
        }

    });

    grunt.registerTask('default', ['clean', 'uglify:micro']);

};