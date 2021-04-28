import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.cosmicjsPosts
    const siteTitle = get(
      this.props,
      'data.cosmicjsSettings.metadata.site_title'
    )
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <style>
          {`
          iframe {
            width: 100%;
          }
        `}
        </style>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div
          style={{
            marginTop: rhythm(1.4),
          }}
        >
          <Link to="/">← Retour à l'accueil</Link>
        </div>
        <h1
          style={{
            marginTop: rhythm(1),
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(0.6),
            marginTop: rhythm(-0.6),
          }}
        >
          {post.created}
        </p>
        <p>{get(post, 'metadata.description', '')}</p>
        <div
          style={{ textAlign: 'justify' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={`posts/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={`posts/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      created(formatString: "DD MMMM, YYYY", locale: "FR")
      metadata {
        description
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
      }
    }
  }
`
