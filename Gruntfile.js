module.exports = function (grunt) {

    grunt.initConfig({
        env: {
            prod: {
                NODE_ENV: 'production'
            }
        },
        browserify: {
            dist: {
                src: ['client/src/js/**/*.js', 'client/src/js/*.js'],
                dest: 'client/dist/js/bundle.js',
                options: {
                    transform: [
                        ['babelify', {
                            presets: ['es2015', 'react']
                        }]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        exorcise: {
            bundle: {
                options: {},
                files: {
                    'client/dist/js/bundle.js.map': ['client/dist/js/bundle.js'],
                }
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: {
                    'client/dist/js/bundle.js': ['client/dist/js/bundle.js']
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'client/dist/css/main.css': 'client/src/scss/main.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'client/dist/css/main.css': 'client/dist/css/main.css'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'client/dist/css/main.min.css': ['client/dist/css/main.css']
                }
            }
        },
        watch: {
            styles: {
                files: ['client/src/scss/*.scss', 'client/src/scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            scripts: {
                files: ['client/src/js/*.js', 'client/src/js/**/*.js', 'client/src/js/**/**/*.js'],
                tasks: ['browserify', 'exorcise'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exorcise');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['env', 'sass', 'autoprefixer', 'cssmin', 'browserify', 'uglify']);
}
