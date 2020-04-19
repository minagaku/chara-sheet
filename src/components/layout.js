/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{useEffect,useState,useContext} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql  } from "gatsby"

import UsersContext from "../context/UsersContext"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {users,setUsers} = useContext(UsersContext);
  useEffect( () => {
    fetch(`https://script.google.com/macros/s/AKfycby2ZIx5H7J96SFGuLzLoU0ePgqgcq6ILYFowa6rQ70nmhVLR7MU/exec`)
      .then( r => r.json())
      .then(rd => {
        setUsers(rd.sort((x,y) => x.fullname.localeCompare(y.fullname, 'ja')));
      })
  });

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class="main" >
        <main>{children}</main>

        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {``}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
