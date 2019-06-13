import {
    Scene,
    SceneProps,
    isAnimation,
    TSValidateViewsConfig
} from "airr-react";
import Slide, {
    viewNameTpl as SlideViewNameTpl,
    getNextSlideViewName
} from "./Slide";
import update from "immutability-helper";
import { SyntheticEvent } from "react";

class Standard extends Scene {
    constructor(props: SceneProps) {
        super(props);

        this.state = {
            ...this.state,
            animation: "slide",
            views: [
                this.getFreshViewConfig(SlideViewNameTpl, {
                    animation: "slide",
                    viewNumber: 1
                })
            ],
            activeViewName: "slide-view-1"
        };
    }

    viewAfterActivation() {
        console.log("Scene viewAfterActivation");
    }

    viewAfterDeactivation() {
        console.log("Scene viewAfterDeactivation");
    }

    viewBeforeActivation() {
        console.log("Scene viewBeforeActivation");
    }

    viewBeforeDeactivation() {
        console.log("Scene viewBeforeDeactivation");
    }

    async componentDidMount(): Promise<void> {
        await super.componentDidMount();
        console.log("Scene component did mount");
        return Promise.resolve();
    }

    componentWillUnmount() {
        console.log("Scene component unmounted");
    }

    handleAnimationChange = (e: SyntheticEvent<HTMLElement>) => {
        const val = e.currentTarget.dataset.value;
        isAnimation(val) && this.setState({ animation: val });

        if (this.state.views) {
            const newviewsdefinition = this.state.views.map(item => {
                return update(item, { props: { animation: { $set: val } } });
            });

            this.setState({ views: newviewsdefinition });
        }
    };

    handleNextClick = (e: SyntheticEvent<HTMLElement>) => {
        if (this.state.views) {
            this.changeView(SlideViewNameTpl, {
                viewNumber: this.state.views.length + 1,
                isFirst: false,
                animation: this.state.animation
            });
        }
    };

    handlePrevClick = (e: SyntheticEvent<HTMLElement>) => {
        this.popView();
    };

    viewsConfig = TSValidateViewsConfig({
        [SlideViewNameTpl]: {
            type: Slide,
            props: {
                name: "slide-view",
                viewNumber: null,
                animation: null,
                isFirst: true,
                handleNextClick: this.handleNextClick,
                handlePrevClick: this.handlePrevClick,
                handleAnimationChange: this.handleAnimationChange
            },
            nameGenerator: getNextSlideViewName,
            sceneProps: {
                //to change scene state when needed (eg. when activated)
            }
        }
    });
}

export default Standard;
