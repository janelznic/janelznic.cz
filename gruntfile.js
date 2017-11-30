module.exports = function(grunt) {
	grunt.initConfig({
		// running `grunt less` will compile once
		less: {
			development: {
				options: {
					paths: ["./wwwroot/css"],
					yuicompress: true
				},
			files: {
				"./wwwroot/css/screen.css": "./wwwroot/css/screen.less"
			}
		}
	},
	// running `grunt watch` will watch for changes
	watch: {
		files: "./wwwroot/css/*.less",
		tasks: ["less"]
	}
});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};

