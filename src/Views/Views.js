import React from "react";
import { Route } from "react-router-dom";

import Main from "./Main/Main";
import Interventions from "./Interventions/Interventions";

const Views = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Main} />
            <Route path="/interventions" component={Interventions} />
        </React.Fragment>
    )
}

export default Views;