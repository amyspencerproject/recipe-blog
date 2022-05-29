const eleventyPluginCookLang = require('eleventy-plugin-cooklang');

module.exports = function(eleventyConfig) {
    
    // Output directory: _site, copy folders 'images' 'css' 'js'
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');

    //Custom collection for recipes
    eleventyConfig.addCollection('recipes', function (collectionApi) {
        return collectionApi
          .getAll()
          .filter((i) => i.data.layout === '/recipe.njk')
          .sort((recipeA, recipeB) => {
            return recipeA.date - recipeB.date;
          });
      });

    // Plugins
    eleventyConfig.addPlugin(eleventyPluginCookLang, { limitIngredientDecimals: 2 });

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
  