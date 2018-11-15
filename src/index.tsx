import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "components/App";

import "./index.html";

const element = (
    <>
        <App message="Hello" />
    </>
);

const container = document.getElementById("root") as HTMLElement;

ReactDOM.render(element, container);
