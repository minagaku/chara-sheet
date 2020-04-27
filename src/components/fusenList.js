import React from "react"
import { Link } from "gatsby"


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
