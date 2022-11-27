module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/styles.css')
    eleventyConfig.addPassthroughCopy('./src/images')
    eleventyConfig.addPassthroughCopy('./src/admin')
    eleventyConfig.addPassthroughCopy({ './src/favicon': '/' })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}