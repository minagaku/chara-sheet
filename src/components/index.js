import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import UsersContext from "../context/UsersContext"
import oldPaper from "../images/old-paper-back.jpg"
import Loading from "./loading";

import twitter from "../images/twitter.svg"

const ragaTable =
{
  "ラガドーン会員(今年度名簿登録予定者)": "Ragadoon\nmember",
  "元会員": "Ragadoon\nformer member",
  "新規入会希望": "Ragadoon\nnew member",
  "非会員": "Ragadoon\nnon-member",
}

const IndexPage = () => (
  <UsersContext.Consumer>{users =>
    <>
    <SEO title="Home" />
    <div>
      {users.users.length === 0 ? <Loading /> : users.users.map(st => <article class="student-info student-info-index" style={{ backgroundImage: `url(${oldPaper})`}}>
        <div class="student-info2">
        <h2>
          <Link to={`/stu/${st.fullname}`}>{st.fullname}</Link>
          <span class="age">{st.age}歳</span>
          <span class="sex">{st.sex}</span>
        </h2>
        <div class="fusen-wrapper">
          <div class="fusen">
            <div class="pl">PL</div>
            <div class="player-name">{st.player}</div>
            <div class="membership">{ragaTable[st.raga]}</div>
            {st.twitter ? <a href={`https://twitter.com/${st.twitter}`}><img src={twitter} /></a> : ""}
          </div>
        </div></div>
      </article>)}
    </div>
    </>
  }
  </UsersContext.Consumer>
)

export default IndexPage
