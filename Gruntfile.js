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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin', 'concat']);
}
