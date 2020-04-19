import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import UsersContext from "../context/UsersContext"
import oldPaper from "../images/old-paper-back.jpg"
import Loading from "./loading";

import twitter from "../images/twitter.svg"
import { inherits } from "util";
const FusenList = (props) => (
    <div class="side-fusens">
    {
        props.users.map(st => 
            <div class={ "side-fusen " + (st.fullname === props.current ? "current" : "") }>
                <Link to={`/${st.fullname}`}>
                    {st.fullname}
                    {/* <span class="age">{st.age}歳</span> */}
                    {/* <span class="sex">{st.sex}</span> */}
                </Link>
            </div>
        )
    }
    </div>
)

export default FusenList
