
module.exports = function(eleventyConfig) {
    
    // Output directory: _site, copy folders 'images' 'css' 'js'
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');

    //Custom collection for recipes
    eleventyConfig.addCollection('recipes', function (collectionApi) {
        return collectionApi
          .getAll()
          .filter((i) => i.data.layout === '/recipe.njk')
          .sort((recipeA, recipeB) => {
            return recipeA.date - recipeB.date;
          });
      });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site'
        }
    };     
  };
  