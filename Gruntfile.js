module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    'assets/css/style.min.css': ['assets/css/style.css']
                }
            }
        },
        concat: {
            basic: {
                src: [
                    'src/bower_components/html5-boilerplate/css/normalize.css',
                    'src/bower_components/html5-boilerplate/css/main.css',
                    'assets/css/style.min.css'
                ],
                dest: 'assets/css/main.min.css'
            }
        },
        watch: {
            scripts: {
                files: ['assets/css/style.css'],
                tasks: ['default']
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'concat']);
}
