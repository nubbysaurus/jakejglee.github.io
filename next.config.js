/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

const repo = "gh-pages"
let assetPrefix = ""
let basePath = ""

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: "export"
}

module.exports = nextConfig
/*
  images: {
    loader: "imgix",
    path: "domain of Imigix source if needed "
  }
*/
