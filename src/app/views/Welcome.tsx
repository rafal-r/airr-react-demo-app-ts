import React, { SyntheticEvent } from "react";
import { View, ViewProps } from "airr-react";
import Menu from "../ui/Menu";
import "./css/Welcome.css";

export const viewName = "welcome";

interface WelcomeViewProps extends ViewProps {
    description: React.ReactNode;
    menuHandler: (e: SyntheticEvent<HTMLElement>) => void;
}
export default class Welcome extends View<WelcomeViewProps> {
    menuOptions = [
        {
            name: "mayers",
            desc: "modal layers a.k.a. dialogs, popups"
        },
        {
            name: "sidepanel",
            desc: "draggable side container"
        },
        {
            name: "scene",
            desc: "views management"
        },
        {
            name: "tabs",
            desc: "scene with nav"
        }
    ];

    content() {
        return (
            <div className="wrap">
                <div className="col">
                    Welcome to airr-react demo.
                    <br />
                    Here you can test all main features of this small but
                    functional library.
                </div>
                <Menu
                    items={this.menuOptions}
                    handleClick={this.props.menuHandler}
                    title="Components:"
                />
            </div>
        );
    }
}
