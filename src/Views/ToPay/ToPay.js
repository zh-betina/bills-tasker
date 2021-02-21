import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";

import getDate from "../../assets/scripts/getDate";

const ToPay = ()=> {
    return(
        <React.Fragment>
        <Header title="Bills to pay" username="John" date={getDate()} />
        <main className="toPay">
            <p className="txt--default"> Hi! For now there's nothing right here, but as you can see, react-router-dom is working great :)</p>
            <p className="txt--default"> Go back to</p>
            <Link className="txt--default" to="/">the Dashboard</Link>
        </main>
    </React.Fragment>
    )
}

export default ToPay;