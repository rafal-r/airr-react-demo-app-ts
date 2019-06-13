import React, { SyntheticEvent } from "react";
import { View, ViewProps, ViewConfig } from "airr-react";
import Standard from "./Scene/Standard";
import Menu from "../ui/Menu";

import "./css/Scene.css";

export const viewName = "scene";

interface SceneViewProps extends ViewProps {
    description: React.ReactNode;
    handleMenuClick: (viewCfg: ViewConfig<ViewProps>) => void;
}

export default class Scene extends View<SceneViewProps> {
    sceneOptions = [
        {
            name: "Standard",
            conf: {
                type: Standard,
                props: {
                    name: "Standard",
                    title: "Scene"
                }
            }
        }
    ];

    handleItemClick = (e: SyntheticEvent<HTMLElement>) => {
        const config = this.sceneOptions.filter(
            val => val.name === e.currentTarget.dataset.view
        )[0].conf;

        return this.props.handleMenuClick(config);
    };

    content() {
        return (
            <div>
                <div className="wrap col scene-view">
                    {this.props.description}
                </div>

                <Menu
                    items={this.sceneOptions}
                    handleClick={this.handleItemClick}
                    title="Scene implementations:"
                    className="second-menu"
                />
            </div>
        );
    }
}
