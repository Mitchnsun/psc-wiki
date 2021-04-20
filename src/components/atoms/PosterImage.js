import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import { rhythm, scale } from '../../utils/typography'

export default ({ image, title}) => (
  <BackgroundImage
    Tag="div"
    fluid={image}
    backgroundColor={`#007ACC`}
    style={{
      height: rhythm(14),
      position: 'relative',
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
        {title}
      </Link>
    </h1>
  </BackgroundImage>
)