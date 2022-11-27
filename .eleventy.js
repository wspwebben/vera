module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/styles.css')
    eleventyConfig.addPassthroughCopy('./src/images')

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}