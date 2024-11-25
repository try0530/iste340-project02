import { useEffect, useState } from "react";
import getData from "../../utils/getData";
import Loading from "../Loading/Loading";

import "./about.css";

const About = () => {
  const [aboutData, setAboutData] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData("about/").then((json) => {
      setAboutData(json);
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return (
      <div className="about-div section-div" id="about-id">
        <Loading type="About" />
      </div>
    );
  }

  return (
    <div className="about-div section-div" id="about-id">
      <h2>About</h2>
      <h4>
        <em>{aboutData.title}</em>
      </h4>
      <p>{aboutData.description}</p>
      <div className="about-quote">
        <p>{aboutData.quote}</p>
        <h4>--{aboutData.quoteAuthor}</h4>
      </div>
    </div>
  );
};

export default About;
