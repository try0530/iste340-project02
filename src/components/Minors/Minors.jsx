import { useEffect, useState } from "react";
import "./minors.css";

import Loading from "../Loading/Loading";
import getData from "../../utils/getData";

import AccordionMinors from "../Accordion/AccordionMinors";

const Minors = () => {
  const [clickMinor, setClickMinor] = useState("");

  const [minorsData, setMinorsData] = useState();
  const [loaded, setLoaded] = useState(false);

  // load minors data
  useEffect(() => {
    getData("minors/").then((json) => {
      setMinorsData(json);
      setLoaded(true);
    });
  }, []);

  // handle when click specific minor
  function handleClickMinor(type) {
    setClickMinor((prev) => (prev === type ? "" : type));
  }

  if (!loaded) {
    return (
      <div className="minors-div section-div" id="minors-id">
        <Loading type="Minors" />
      </div>
    );
  }

  return (
    <div className="minors-div section-div" id="minors-id">
      <h2>Minors</h2>
      {minorsData.UgMinors.map((minors) => (
        <div key={`${minors.name}-div`} className="minor-div">
          <AccordionMinors
            inputIndex={minors.name}
            title={minors.title}
            description={minors.description}
            note={minors.note}
            courses={minors.courses}
            activeIndex={clickMinor}
            handleClick={handleClickMinor}
            name={minors.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Minors;
