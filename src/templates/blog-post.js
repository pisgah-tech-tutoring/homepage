import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <section className="main">
          <div className="grid-wrapper">
            <div className="col-12">
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
