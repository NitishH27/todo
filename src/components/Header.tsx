import React from "react";
import "../Styles/HeaderFooter.css";
interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
        </div>
    );
};
export default Header;
export { };
