module.exports = function(eleventyConfig){

    // make sure assets and css are passed to _site during build 
    eleventyConfig.addPassthroughCopy("src/assets/");  
    eleventyConfig.addPassthroughCopy("src/css/");
    
    // tell 11ty to watch css for changes
    eleventyConfig.addWatchTarget("src/css")

    return {
        dir: {
          input: 'src',
          includes: '_includes',
          output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
      };
}