import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'
import SEO from '../components/seo'

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle
    const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null

    return (
      <Layout>
        <div>
          {/* <Helmet>
            <title>{`${postTitle} - ${title}`}</title>
            <meta name="description" content={description} />
          </Helmet> */}
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            image={image}
            pathname={this.props.location.pathname}
          />
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          email
          twitter
          github
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        thumb {
          childImageSharp {
            fixed(width: 96, height: 96) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
