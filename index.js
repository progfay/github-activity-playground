const Parser = require('rss-parser')

const main = async (url) => {
  const parser = new Parser()
  const feed = await parser.parseURL(url)
  console.log(JSON.stringify(feed, undefined, 2))
}

main(process.env.GITHUB_RSS_URL)
