import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import UsersContext from "../context/UsersContext"

const IndexPage = () => (
  <UsersContext.Consumer>{users =>
    <>
    <SEO title="Home" />
    <div>
      {users.users.length === 0 ? "Loading..." : users.users.map(x => <div>
        <h3>{x.fullname}</h3>
        <span>{x.age}歳</span>
        <span>{x.player}</span>
      </div>)}

    </div>
    <Link to="/page-2/">Go to page 2</Link>
    </>
  }
  </UsersContext.Consumer>
)

export default IndexPage
