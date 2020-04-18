import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import UsersContext from "../context/UsersContext"

const IndexPage = () => (
    <UsersContext.Consumer>{users =>
        <Layout>
            <SEO title="Home" />
            <h1>404</h1>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    }
    </UsersContext.Consumer>
)

export default IndexPage
