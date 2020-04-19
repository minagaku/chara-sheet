import React from "react"

import Layout from "../components/layout"
import { Router } from "@reach/router"
import IndexPage from "../components";
import Default from "../components/default"
import StudentPage from "../components/student";

const RootPage = (props) => (
  <Layout>
    <Router basepath={props.uri.includes("/students") ? "/students" : ""}>
      <IndexPage path="/" />
      <IndexPage path="/index.html" />
      <StudentPage path=":name" />
    </Router>
  </Layout>
)

export default RootPage
