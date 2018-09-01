module.exports = function(grunt) {
    // ===========================================================================
    // Конфигурация GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        //Здесь будут указаны модули и их настройки
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                },
                files: {
                    'css/style.css': 'style.scss'
                }
            },
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: '*.scss',
                tasks: ['sass'],
            },
        },

    });
    // ===========================================================================
    // Загружаем модули GRUNT ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'sass',
        'watch'
    ]);
}