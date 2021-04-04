import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { rhythm, scale } from '../utils/typography'
import Footer from './footer'
import Header from './header'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

export default ({ children, withBackground }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
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
    `}
    render={data => {
      const siteTitle = data.cosmicjsSettings.metadata.site_heading
      const homePageHero =
        data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid
      let header

      if (withBackground) {
        header = (
          <BackgroundImage
            Tag="div"
            className="post-hero"
            fluid={homePageHero}
            backgroundColor={`#007ACC`}
            style={{
              height: rhythm(14),
              position: 'relative',
              marginBottom: `${rhythm(1.5)}`,
            }}
          >
            <h1
              style={{
                ...scale(1.3),
                position: 'absolute',
                textAlign: 'center',
                left: 0,
                right: 0,
                top: rhythm(4),
                marginTop: '0',
                height: rhythm(2.5),
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {siteTitle}
              </Link>
            </h1>
          </BackgroundImage>
        )
      } else {
        header = <Header siteTitle={siteTitle} />
      }

      return (
        <div>
          {header}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
              minHeight: 'calc(100vh - 42px)',
            }}
          >
            {children}
          </div>
          <Footer />
        </div>
      )
    }}
  />
)
