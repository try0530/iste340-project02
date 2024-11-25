import { useState, useEffect } from "react";
import "./degrees.css";
import getData from "../../utils/getData";

import Loading from "../Loading/Loading";
import AccordionDegrees from "../Accordion/AccordionDegrees";

const Degrees = () => {
  const [degreesData, setDegreesData] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData("degrees/").then((json) => {
      setDegreesData(json);
      setLoaded(true);
    });
  }, []);

  // function to change the first letter to uppercase
  function upperFirstLetter(verb) {
    const [first, ...rest] = verb;
    return first.toUpperCase() + rest.join("");
  }

  // control the title open or close
  const [clickProgram, setClickProgram] = useState("");

  // change the clickProgram when user click the program title
  const handleClickProgram = (degreeName) => {
    setClickProgram((prev) => (prev === degreeName ? "" : degreeName));
  };

  // if still loading, show the loading page
  if (!loaded) {
    return (
      <div className="degrees-div section-div" id="degrees-id">
        <Loading type="Degrees" />
      </div>
    );
  }

  return (
    <div className="degrees-div section-div" id="degrees-id">
      <h2>Degrees</h2>

      {/* run all data to print out each detail */}
      {Object.entries(degreesData).map(([key, items]) => (
        // seperate graduate and undergraduate
        <div key={`${key}-div`} className={`${key}-div degree-div`}>
          <h3 key={key} className="program-h3">
            {upperFirstLetter(key)} Programs
          </h3>

          <div className={`${key}-programs programs`}>
            {items.map((item) => (
              <div key={`${item.degreeName}-div`} className="program-div">
                {/* print out each program under graduate/undergraduate */}
                <AccordionDegrees
                  inputIndex={item.degreeName}
                  title={item.title ? item.title : item.degreeName}
                  description={item.description}
                  concentrations={item.concentrations}
                  availableCertificates={item.availableCertificates}
                  activeIndex={clickProgram}
                  handleClick={handleClickProgram}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Degrees;
