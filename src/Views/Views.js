import React from "react";
import { Route } from "react-router-dom";

import Main from "./Main/Main";
import ToPay from "./ToPay/ToPay";

const Views = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Main} />
            <Route path="/topay" component={ToPay} />
        </React.Fragment>
    )
}

export default Views;