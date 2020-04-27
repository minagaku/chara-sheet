import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bp from "../images/black-paper1.jpg";
import logo2 from "../images/logo2.svg";
import UsersContext from "../context/UsersContext";
import Loading from "./loading";

const Header = ({ siteTitle }) => {
  const state = React.useContext(UsersContext)
  // const state = {}
  return <header
    style={{
      backgroundImage: `url(${bp})`,
      marginBottom: `1.45rem`,
    }}
  >
    { state.loading ? <Loading /> : ""}
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
        ><img id="logo" src={logo2} /></Link> </h1>
      </div>
    <a class="link" href="https://w.atwiki.jp/ragadoon/pages/1276.html"><img src="https://w.atwiki.jp/favicon.ico" /></a>
    <a class="link" href="https://fujimi-trpg-online.jp/game/grancrest.html"><img src="https://fujimi-trpg-online.jp/themes/trpg-online/images/favicon.ico" /></a>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
