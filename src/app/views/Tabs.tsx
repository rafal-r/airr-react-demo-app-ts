import React, { SyntheticEvent } from "react";
import { View, ViewProps, ViewConfig, SceneProps } from "airr-react";
import Standard from "./Tabs/Standard";
import Menu from "../ui/Menu";
import "./css/Scene.css";

export const viewName = "tabs";

interface TabsViewProps extends ViewProps {
    handleViewportViewPop: () => void;
    handleViewportScenePush: (sceneConfig: ViewConfig<SceneProps>) => void;
    description: React.ReactNode;
}
export default class Tabs extends View<TabsViewProps> {
    tabsOptions = [
        {
            name: "Standard",
            conf: {
                type: Standard,
                props: {
                    name: "Standard",
                    title: "Tabs",
                    handleBackButton: this.props.handleViewportViewPop
                }
            }
        }
    ];

    handleItemClick = (e: SyntheticEvent<HTMLElement>) => {
        const tab = this.tabsOptions.find(
            val => val.name === e.currentTarget.dataset.view
        );
        tab && this.props.handleViewportScenePush(tab.conf);
    };

    content() {
        return (
            <div>
                <div className="wrap col tabs-view">
                    {this.props.description}
                </div>

                <Menu
                    items={this.tabsOptions}
                    handleClick={this.handleItemClick}
                    title="Tabs implementations:"
                    className="second-menu"
                />
            </div>
        );
    }
}
