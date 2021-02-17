import React from "react";

import Header from "../../Header/Header";
import BtnMain from "../../Btn/BtnMain";
import IntervIcon from "../../Icon/IntervIcon";
import HistorIcon from "../../Icon/HistorIcon";

import logo from "../../assets/media/png/logo.png";
import getDate from "../../assets/scripts/getDate";

import "./Main.css";

const Main = () => {
    return (
        <React.Fragment>
            <Header title="Accueil" logo={logo} username="John" date={getDate()} />
            <main className="main">
                <BtnMain txt="Mes interventions" info={true} number="3" href="/interventions">
                    <IntervIcon />
                </BtnMain>
                <BtnMain txt="Historique" info={false} href={"/"}>
                    <HistorIcon />
                </BtnMain>
            </main>
        </React.Fragment>
    )
}

export default Main;