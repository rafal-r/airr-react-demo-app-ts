import React, { SyntheticEvent } from "react";
import { View, ViewProps, ViewsArray } from "airr-react";

export const viewNameTpl = "slide-view-*";

export const getNextSlideViewName = (views: ViewsArray) => {
    return viewNameTpl.replace("*", String(views.length + 1));
};

interface SlideView extends ViewProps {
    isFirst: boolean;
    viewNumber: number | null;
    animation: string | null;
    handlePrevClick: (e: SyntheticEvent<HTMLElement>) => void;
    handleNextClick: (e: SyntheticEvent<HTMLElement>) => void;
    handleAnimationChange: (e: SyntheticEvent<HTMLElement>) => void;
}

class Slide extends View<SlideView> {
    content() {
        return (
            <div className="wrap col scene-slide">
                {this.props.isFirst && (
                    <p className="text-center">
                        Let's begin views shifting. Tap on `Next` button.
                    </p>
                )}

                <h1 className="view-number">
                    <span>{this.props.viewNumber}</span>
                </h1>

                <div className="nav">
                    {!this.props.isFirst && (
                        <button
                            onClick={this.props.handlePrevClick}
                            className="prev"
                        >
                            Prev
                        </button>
                    )}
                    <button
                        onClick={this.props.handleNextClick}
                        className="next"
                    >
                        Next
                    </button>
                </div>

                <div className="header brd-b view-anim-header">
                    Choose view animation:
                </div>

                <div className="radio-group">
                    <div className="row">
                        <div className="col-4">
                            <span
                                className={
                                    "radio anim " +
                                    (this.props.animation === "slide"
                                        ? "checked"
                                        : "")
                                }
                                data-value="slide"
                                onClick={this.props.handleAnimationChange}
                            >
                                <span />
                            </span>
                            <label>Slide</label>
                        </div>
                        <div className="col-4">
                            <span
                                className={
                                    "radio anim " +
                                    (this.props.animation === "overlay"
                                        ? "checked"
                                        : "")
                                }
                                data-value="overlay"
                                onClick={this.props.handleAnimationChange}
                            >
                                <span />
                            </span>
                            <label>Overlay</label>
                        </div>
                        <div className="col-4">
                            <span
                                className={
                                    "radio anim " +
                                    (this.props.animation === "fade"
                                        ? "checked"
                                        : "")
                                }
                                data-value="fade"
                                onClick={this.props.handleAnimationChange}
                            >
                                <span />
                            </span>
                            <label>Fade</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;
