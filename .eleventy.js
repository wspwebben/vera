module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/.cpanel.yml')
    eleventyConfig.addPassthroughCopy('./src/.htaccess')
    eleventyConfig.addPassthroughCopy('./src/styles.css')
    eleventyConfig.addPassthroughCopy('./src/script.js')
    eleventyConfig.addPassthroughCopy('./src/images')
    eleventyConfig.addPassthroughCopy('./src/uploads')
    eleventyConfig.addPassthroughCopy('./src/fonts')
    eleventyConfig.addPassthroughCopy('./src/admin')
    eleventyConfig.addPassthroughCopy({ './src/favicon': '/' })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}