import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import UsersContext from "../context/UsersContext"
import twitter from "../images/twitter.svg"
import oldPaper from "../images/old-paper-back.jpg"
import Mahoujin from "../images/mahoujinx.inline.svg"
import mj from "../images/mj.svg"
import Loading from "./loading";
import FusenList from "./fusenList";

const ragaTable =
{
  "ラガドーン会員(今年度名簿登録予定者)": "Ragadoon\nmember",
  "元会員": "Ragadoon\nformer member",
  "新規入会希望": "Ragadoon\nnew member",
  "非会員": "Ragadoon\nnon-member",
}

function renderFigcaption(cap){
  if(!cap || cap === "")return "";
  const m = cap.match(/https?:\/\/[\w!?\/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/);
  const c = cap.replace(/https?:\/\/[\w!?\/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/,"");

  if(m) return (<><a href={m[0]}>出典</a> {c}</>);
  return "出典:" + c;
}

function renderUser(users, name) {
  if (users.length === 0) return <div class="student-info" style={{ backgroundImage: `url(${oldPaper})`, width: "100%", display: "flex", justifyContent: "center" }}>
    <div class="student-info2">
      <Loading />
    </div>
  </div>
  
  const st = users.find(x => x.fullname === name);
  if (!st) return <div>学生 {name} が見つかりません</div>
  return <>
    <style>{ `#logo{height:50px} header{height:50px}` }</style>
    <FusenList users={users} current={name} />
    <div class="student-info student-detail" style={{ backgroundImage: `url(${oldPaper})` }}>
      <div class="student-info2">
        <h2 style={ st.fullname.length >= 15 ? { marginTop: "1em"} : undefined}>
          <Link to={`/${st.fullname}`}>{st.fullname}</Link>
          <span class="age">{st.age}歳 {st.sex}</span>
        </h2>
        <div class="fusen-wrapper">
          <div class="fusen">
            <div class="pl">PL</div>
            <div class="player-name">{st.player}</div>
            <div class="membership">{ragaTable[st.raga]}</div>
            {st.twitter ? <a href={`https://twitter.com/${st.twitter}`}><img src={twitter} /></a> : ""}
          </div>
        </div>
        <div class={st.chara_card ? "mini-grid" : "mini-table" }>
          { st.chara_card ? <figure class="chara-card"><img src={ st.chara_card } /><figcaption>{renderFigcaption(st.chara_card_by)} </figcaption></figure> : "" }
          <table class="a2">
            <tr>
              <th>出自</th>
              <td>{st.from}</td>
            </tr>
            <tr>
              <th>経験1</th>
              <td>{st.exp1}</td>
            </tr>
            <tr>
              <th>経験2</th>
              <td>{st.exp2}</td>
            </tr>
          </table>
          <table class="a3">
            <tr>
              <th>信念/禁忌</th>
              <td>{st.taboo}</td>
            </tr>
            <tr>
              <th>信念/目的</th>
              <td>{st.purpose}</td>
            </tr>
            <tr>
              <th>信念/趣味嗜好</th>
              <td>{st.hobby}</td>
            </tr>
          </table>
        </div>
        <h3>外見的特徴</h3>
        <div class="box">{st.app}</div>
        <h3>詳細設定</h3>
        <div class="box">{st.life}</div>
        <h3>一人称</h3>
        <div class="box">{st.first_person}</div>
        <h3>二人称</h3>
        <div class="box">{st.second_person}</div>
        <h3>敬称</h3>
        <div class="box">{st.honorific}</div>
        <h3>口調</h3>
        <div class="box">{st.expression}</div>
        <h3>台詞例</h3>
        <div class="box">{st.expression_sample}</div>
        <h3>能力値</h3>
        <div class="box">
          <table>
            <tr>
              <th>筋力</th><th>反射</th><th>感覚</th><th>知力</th><th>精神</th><th>共感</th>
            </tr>
            <tr>
              <td>{st.status_str}</td>
              <td>{st.status_agi}</td>
              <td>{st.status_feel}</td>
              <td>{st.status_int}</td>
              <td>{st.status_mnd}</td>
              <td>{st.status_emp}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </>
}

const StudentPage = (props) => {
  const {users} = useContext(UsersContext);
  return <>
    <SEO title={props.name} />
    {
      renderUser(users, props.name)
    }
  </>
}

export default StudentPage
