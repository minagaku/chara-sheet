import React from "react"

import Layout from "../components/layout"
import { Router } from "@reach/router"
import IndexPage from "../components";
import Default from "../components/default"
import StudentPage from "../components/student";

const RootPage = (props) => (
  <Layout>
    <Router basepath={props.uri}>
      <IndexPage path="/" />
      <StudentPage path="stu/:name" />
      <Default path="/hoge" />
    </Router>
  </Layout>
)

export default RootPage
