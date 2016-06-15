module.exports = function(grunt) {
  grunt.initConfig({
    nodemon: {
      server: {
        script: './app.js',
        options: {
          nodeArgs: [ /*'--debug' */ ],
          ignore: ['node_modules/**'],
          env: {
            PORT: 4999,
            // for development, isomorphic server rendering
            NODE_ENV: '',
            DEBUG: 'app:*,',
            DEBUG_COLORS: true,
            USERNAME: 'XG'
          },
          ext: 'js,jsx,html,ejs',
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  // grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server', ['nodemon:server']);
};
