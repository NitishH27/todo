import React from "react";
import "../Styles/HeaderFooter.css";
interface Footerprops {
    title:string
}
const Footer: React.FC<Footerprops> = ({ title }) => {
    return (
        <div className="Footer">
            <h1>{title}</h1>
        </div>
    );
};
export default Footer;
export { };
