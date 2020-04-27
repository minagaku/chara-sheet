import React from "react"

import Layout from "../components/layout"
import { Router } from "@reach/router"
import IndexPage from "../components";
import Default from "../components/default"
import StudentPage from "../components/student";
import { UsersProvider } from "../context/UsersContext";

const RootPage = (props) => (
      <UsersProvider>
    <Layout>
      <Router basepath="/students">
        <IndexPage path="/" />
        <IndexPage path="/index.html" />
        <StudentPage path=":name" />
      </Router>
    </Layout>
      </UsersProvider>
)

export default RootPage
