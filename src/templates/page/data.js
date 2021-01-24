const PageTemplateFragment = layouts => `
fragment PageTemplateFragment on WPGraphQL_Page {
    id
    title
    pageId
    content
    uri
    slug
    isFrontPage
    featuredImage {
        node{
          sourceUrl
        }
    }
    pageBuilder {
        layouts {
            ${layouts}
        }
    }
}
`
module.exports.PageTemplateFragment = PageTemplateFragment
