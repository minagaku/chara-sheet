/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { UsersProvider } from "./src/context/UsersContext"
export const wrapRootElement = ({ element }) => (
  <UsersProvider>{element}</UsersProvider>
)
