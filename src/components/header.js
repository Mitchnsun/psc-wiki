import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

export default ({ siteTitle }) => (
  <h3
    style={{
      fontFamily: 'Montserrat, sans-serif',
      marginTop: 0,
      marginBottom: rhythm(-1),
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(24),
      padding: `${rhythm(3 / 4)}`,
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
  </h3>
)