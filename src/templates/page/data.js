// Reverted to ef4bba22bf39c11e74e05590855afe3dd398db58

const PageTemplateFragment = (layouts) => `
    fragment PageTemplateFragment on WPGraphQL_Page {
        id
        title
        pageId
        content
        uri
        slug
        isFrontPage
        featuredImage {
            sourceUrl
            altText
            imageFile {
                childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
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



