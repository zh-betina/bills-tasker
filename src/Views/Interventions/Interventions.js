import React from "react";

import Header from "../../Header/Header";

import logo from "../../assets/media/png/logo.png";
import getDate from "../../assets/scripts/getDate";

const Interventions = ()=> {
    return(
        <React.Fragment>
        <Header title="Mes interventions" logo={logo} username="John" date={getDate()} />
        <main className="main">
        </main>
    </React.Fragment>
    )
}

export default Interventions;