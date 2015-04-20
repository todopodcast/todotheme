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
          'src/bower_components/mediaelement/build/mediaelementplayer.min.css',
          'assets/css/style.min.css'
        ],
        dest: 'assets/css/main.min.css'
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/bower_components/mediaelement/build',
        src: ['jquery.js', 'mediaelement-and-player.min.js'],
        dest: 'assets/js/',
      },
      css: {
        expand: true,
        cwd: 'src/bower_components/mediaelement/build',
        src: [
          'controls.fw.png',
          'controls.svg',
          'background.png'
        ],
        dest: 'assets/css/',
      }
    },
    watch: {
      scripts: {
        files: ['assets/css/style.css'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin', 'concat', 'copy']);
};
