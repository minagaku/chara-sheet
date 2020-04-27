import React, { useContext } from "react"
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

const IndexPage = () => {
  const state = useContext(UsersContext);

  return <>
    <style>{ `#logo{height:100px} header{height:100px} main{margin-top:120px}` }</style>
    <SEO title="Home" />
    <div class="container">
      {
        state.users.length === 0 ? <Loading /> : state.users.map(st => <article class="student-info student-info-index" style={{ backgroundImage: `url(${oldPaper})`}}>
        <div class="student-info2">
        <h2>
          <Link to={`/${st.fullname}`}>
            {st.fullname}
            <span class="age">{st.age}歳　{st.sex}</span>
          </Link>
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

export default IndexPage
