import { useEffect, useState } from "react";
import parse from "html-react-parser"; // transfer HTML string to HTML

import getData from "../../utils/getData";
import Loading from "../Loading/Loading";

// import icons
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./footer.css";

const Footer = () => {
  const [loaded, setLoaded] = useState(false);
  const [footerData, setFooterData] = useState();

  useEffect(() => {
    getData("footer/").then((json) => {
      setFooterData(json);
      setLoaded(true);
    });
  }, []);

  // if still loading
  if (!loaded) {
    return (
      <footer className="footer" id="footer-id">
        <Loading type="Footer" />
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-social">
          <h4>{footerData.social.title}</h4>
          <p>
            {footerData.social.tweet}
            <br /> {footerData.social.by}
          </p>
          <div className="footer-social-list">
            <a href={footerData.social.twitter} target="_blank">
              <XIcon />
              Twitter
            </a>
            <a href={footerData.social.facebook} target="_blank">
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-quicklinks">
          {footerData.quickLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank">
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-copyright">{parse(footerData.copyright.html)}</div>
    </footer>
  );
};

export default Footer;
