import React, { SyntheticEvent } from "react";

interface Props {
    handleClick: (e: SyntheticEvent<HTMLElement>) => void;
    className?: string;
    title?: string;
    items: { name: string; desc?: string }[];
}
export default function Menu(props: Props) {
    function handleItemClick(e: SyntheticEvent<HTMLElement>) {
        const item = e.currentTarget;
        item.classList.add("clicked");
        setTimeout(() => {
            item.classList.remove("clicked");
        }, 300);

        props.handleClick(e);
    }

    const items = props.items.map(function(element) {
        return (
            <li
                key={element.name}
                data-view={element.name}
                onClick={handleItemClick}
            >
                <span className="decor">{"{"}</span>
                <span className="text">{element.name}</span>
                <span className="desc">{element.desc}</span>
                <span className="decor">{"}"}</span>
            </li>
        );
    });

    return (
        <div className={props.className}>
            {props.title && (
                <div className="col">
                    <h1 className="menu-title">{props.title}</h1>
                </div>
            )}
            <ul className="menu">{items}</ul>
        </div>
    );
}
