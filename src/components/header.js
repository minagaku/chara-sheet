import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bp from "../images/black-paper1.jpg";

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundImage: `url(${bp})`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      </div>
    <a class="link" href="https://w.atwiki.jp/ragadoon/pages/1276.html"><img src="https://w.atwiki.jp/favicon.ico" /></a>
    <a class="link" href="https://fujimi-trpg-online.jp/game/grancrest.html"><img src="https://fujimi-trpg-online.jp/themes/trpg-online/images/favicon.ico" /></a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
