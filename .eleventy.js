module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/.cpanel.yml')
    eleventyConfig.addPassthroughCopy('./src/.htaccess')
    eleventyConfig.addPassthroughCopy('./src/styles.css')
    eleventyConfig.addPassthroughCopy('./src/script.js')
    eleventyConfig.addPassthroughCopy('./src/images')
    eleventyConfig.addPassthroughCopy('./src/uploads')
    eleventyConfig.addPassthroughCopy('./src/fonts')
    eleventyConfig.addPassthroughCopy({ './src/favicon': '/' })
    
    if(process.env.ENV === 'prod') {
        eleventyConfig.ignores.add('./src/admin/**');
    } else {
        eleventyConfig.addPassthroughCopy('./src/admin')
    }

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}