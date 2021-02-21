import React, { useState } from "react";

import Header from "../../Header/Header";
import BtnMain from "../../Btn/BtnMain";
import PayIcon from "../../Icon/PayIcon";
import PaidIcon from "../../Icon/PaidIcon";
import ViewIcon from "../../Icon/ViewIcon";
import AddIcon from "../../Icon/AddIcon";

import getDate from "../../assets/scripts/getDate";

import "./Main.css";

const Main = () => {

    const[postIt, setPostIt] = useState(false);
    let postItState;

    if (postIt == false){
        postItState = false;
    }else{
        postItState = true;
    }

    //todo handle add postit click

    return (
        <React.Fragment>
            <Header title="Dashboard" username="John" date={getDate()} />
            <main className="main">
                <section>
                    <BtnMain txt="Bills to pay" info={true} number="6" href="/topay">
                        <PayIcon />
                    </BtnMain>
                    <BtnMain txt="Paid bills" info={true} number="2" href={"/"}>
                        <PaidIcon />
                    </BtnMain>
                    <BtnMain txt="View all" info={true} number="23" href={"/"}>
                        <ViewIcon />
                    </BtnMain>
                </section>
                <section>
                {
                    postItState ? {postIt} : <p className="txt--default">Here will appear your postit cards!</p>
                }
                </section>
                <AddIcon/>
            </main>
        </React.Fragment>
    )
}

export default Main;