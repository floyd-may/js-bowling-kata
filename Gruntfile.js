module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['js/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
        }
      }
    },
    jasmine: {
      src: {
        src: [
          'js/**/*.js'
        ],
        options: {
          specs: 'test/**/*.js'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint']);

};
