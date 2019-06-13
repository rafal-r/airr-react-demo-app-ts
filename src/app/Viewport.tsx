import { Scene, SceneProps, ViewConfig } from "airr-react";
import MainScene, { viewName as MainSceneViewName } from "./MainScene";

interface ViewportProps extends SceneProps {}

export default class Viewport extends Scene<ViewportProps> {
    constructor(props: ViewportProps) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: MainSceneViewName,
            name: "viewport",
            animation: "overlay",
            views: [
                this.getFreshViewConfig({
                    type: MainScene,
                    props: {
                        name: MainSceneViewName,
                        handleViewportScenePush: this.handleViewportScenePush,
                        handleViewportViewPop: this.handleViewportViewPop
                    }
                })
            ],
            stackMode: true
        };
    }

    handleViewportViewPop = () => {
        this.popView();
    };

    handleViewportScenePush = (sceneConfig: ViewConfig<SceneProps>) => {
        this.changeView(sceneConfig);
    };
}
