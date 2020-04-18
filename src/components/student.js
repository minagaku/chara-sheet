import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import UsersContext from "../context/UsersContext"
import twitter from "../images/twitter.svg"
import oldPaper from "../images/old-paper-back.jpg"
import mahoujin from "../images/mahoujin.svg"

const ragaTable =
{
  "ラガドーン会員(今年度名簿登録予定者)": "Ragadoon\nmember",
  "元会員": "Ragadoon\nformer member",
  "新規入会希望": "Ragadoon\nnew member",
  "非会員": "Ragadoon\nnon-member",
}

function renderUser(users, name) {
  if (users.length === 0) return <div>Loading<img src={ mahoujin } /></div>
  const st = users.find(x => x.fullname === name);
  if (!st) return <div>学生 {name} が見つかりません</div>
  return <div id="student-info" style={{ backgroundImage: `url(${oldPaper})` }}>
    <div class="loading">
      <img src={ mahoujin } />
      Loading...
    </div>
    <div id="student-info2">
      <h2>{st.fullname}
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
      </div>
      <table>
        <tr>
          <th>出自</th>
          <td>{st.from}</td>
          <th>信念/目的</th>
          <td>{st.purpose}</td>
        </tr>
        <tr>
          <th>経験1</th>
          <td>{st.exp1}</td>
          <th>信念/禁忌</th>
          <td>{st.taboo}</td>
        </tr>
        <tr>
          <th>経験2</th>
          <td>{st.exp2}</td>
          <th>信念/趣味嗜好</th>
          <td>{st.hobby}</td>
        </tr>
      </table>
      <h3>外見的特徴</h3>
      <div class="box">{st.app}</div>
      <h3>ライフパス</h3>
      <div class="box">{st.life}</div>
      <h3>一人称</h3>
      <div class="box">{st.first_person}</div>
      <h3>二人称</h3>
      <div class="box">{st.second_person}</div>
      <h3>敬称</h3>
      <div class="box">{st.honorific}</div>
      <h3>口調</h3>
      <div class="box">{st.expression}</div>
      <h3>口調例</h3>
      <div class="box">{st.expression_sample}</div>

    </div>
  </div>
}

const StudentPage = (props) =>
  <UsersContext.Consumer>{users =>
    <>
      <SEO title={props.name} />
      {renderUser(users.users, props.name)}
    </>
  }
  </UsersContext.Consumer>

export default StudentPage
