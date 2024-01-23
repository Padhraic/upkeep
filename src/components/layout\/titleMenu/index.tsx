import React from 'react';
import './TitleBar.css';

interface TitleBarProps {
    title: string;
    menu: JSX.Element;
}

const TitleBar: React.FC<TitleBarProps> = ({ title, menu }) => {
    return (
        <div className="title-bar">
            <h1>{title}</h1>
            <div className="menu">{menu}</div>
        </div>
    );
};

export default TitleBar;
