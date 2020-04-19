import React from "react"

import Mahoujin from "../images/mahoujinx.inline.svg"
import mj from "../images/mj.svg"


const Loading = () => (
  <>
    <Mahoujin />
    <div class="loading">
      {/* <div class="load-mahou" /> */}
      <img src={mj} />
      <div>Loading...</div>
    </div>
  </>
)

export default Loading
