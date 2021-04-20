import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import PosterImage from '../components/atoms/PosterImage'
import Breadcrumb from '../components/Breadcrumb'
import { rhythm } from '../utils/typography'

const Container = styled.main`
  max-width: ${rhythm(40)};
  margin: auto;
  padding: 0 ${rhythm(1)};
`;

const Posts = styled.article`
  display: flex;
  flex-wrap: wrap;
  transform: translateY(-${rhythm(1)});
`;

const Post = styled.div`
  padding: 0 ${rhythm(1/2)};
  @media (min-width: 750px) {
    flex-basis: 50%;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    )
    const posts = get(this, 'props.data.allCosmicjsPosts.edges')
    const homePageHero = get(this, 'props.data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid')

    return (
      <div>
        <Helmet title={siteTitle} />
        <PosterImage image={homePageHero} title={siteTitle} />
        <Container>
          <Breadcrumb />
          <Posts>
            {posts.map(({ node }) => {
              const title = get(node, 'title') || node.slug
              return (
                <Post key={node.slug}>
                  <h3
                    style={{
                      margin: `${rhythm(1 / 4)} 0`,
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.created}</small>
                  <p
                    dangerouslySetInnerHTML={{ __html: node.metadata.description }}
                  />
                </Post>
              )
            })}
          </Posts>
        </Container>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        homepage_hero {
          local {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
