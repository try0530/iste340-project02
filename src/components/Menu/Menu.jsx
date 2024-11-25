import { useState, useEffect } from "react";
import "./menu.css";
import MenuTop from "./MenuTop";
import MenuLeft from "./MenuLeft";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="menu-div">
      {isMobile ? <MenuTop key="mobile" /> : <MenuLeft key="desktop" />}
    </div>
  );
};

export default Menu;
