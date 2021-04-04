import React from 'react'
import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'

export default () => (
  <footer
    style={{
      textAlign: 'center',
      padding: `0 20px 80px 0`,
    }}
  >
    powered by&nbsp;
    <a
      target="_blank"
      href="https://gatsbyjs.org"
      style={{
        color: '#191919',
        boxShadow: 'none',
      }}
    >
      <img
        src={gatsbyLogo}
        alt="Gatsby JS"
        style={{
          width: '20px',
          margin: '0 4px -3px 2px',
        }}
      />
      <strong>Gatsby</strong>
    </a>
    &nbsp;and&nbsp;
    <a
      target="_blank"
      href="https://cosmicjs.com"
      style={{
        color: '#191919',
        boxShadow: 'none',
      }}
    >
      <img
        src={cosmicjsLogo}
        alt="Cosmic JS"
        style={{
          width: '18px',
          margin: '0 4px -2px 5px',
        }}
      />
      <strong>Cosmic JS</strong>
    </a>
  </footer>
)