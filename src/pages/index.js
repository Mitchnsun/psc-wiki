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
  constructor(props) {
    super(props)
    this.state = { filter: '' };
  }

  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    )
    const posts = get(this, 'props.data.allCosmicjsPosts.edges',[])
    const homePageHero = get(this, 'props.data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid')
    const displayedPost = this.state.filter === '' ? posts : posts.filter(post => post && post.node.metadata.section === this.state.filter)

    return (
      <div>
        <Helmet title={siteTitle} />
        <PosterImage image={homePageHero} title={siteTitle} />
        <Container>
          <Breadcrumb setFilter={filter => this.setState({ filter })} />
          <Posts>
            {displayedPost.map(({ node }) => {
              const title = get(node, 'title') || node.slug
              return (
                <Post key={node.slug}>
                  <h2
                    style={{
                      margin: `${rhythm(1 / 4)} 0`,
                      fontSize: rhythm(3 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={`/posts/${node.slug}`}>
                      {title}
                    </Link>
                  </h2>
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
            section
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY", locale: "FR")
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
