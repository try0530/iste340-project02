import { useEffect, useState } from "react";

import Chip from "@mui/material/Chip";

import getData from "../../utils/getData";
import Loading from "../Loading/Loading";
import DialogInterestArea from "../Dialog/DialogInterestArea";
import DialogFaculty from "../Dialog/DialogFaculty";

import "./researches.css";

const Researches = () => {
  const [loaded, setLoaded] = useState(false);
  const [researchesData, setResearchesData] = useState();

  const [interest, setInterest] = useState("");
  const [openInterestArea, setOpenInterestArea] = useState(false);

  const [facultyResearch, setFacultyResearch] = useState("");
  const [openFaculty, setOpenFaculty] = useState(false);

  // get the research data
  useEffect(() => {
    getData("research/").then((json) => {
      setLoaded(true);
      setResearchesData(json);
    });
  }, []);

  // handle when user click a interest area
  function handleInterestAreaClick(areaName) {
    setInterest(areaName);
    setOpenInterestArea(true);
    setFacultyResearch("");
    setOpenFaculty(false);
  }

  // handle when user click a faculty
  function handleFacultyClick(username) {
    setFacultyResearch(username);
    setOpenFaculty(true);
    setInterest("");
    setOpenInterestArea(false);
  }

  // if the data is loading
  if (!loaded) {
    return (
      <div className="researches-div section-div">
        <Loading type="Research" />
      </div>
    );
  }

  return (
    <div className="researches-div section-div">
      <h2>Researches</h2>
      <div className="research-area-div">
        <h3>Interest Area</h3>
        {researchesData.byInterestArea.map((interestArea) => (
          <>
            <Chip
              label={interestArea.areaName}
              onClick={() => handleInterestAreaClick(interestArea.areaName)}
            />
            {interest === interestArea.areaName && (
              <div className="interest-area-research-list">
                <DialogInterestArea
                  researches={interestArea}
                  openInterestArea={openInterestArea}
                  setOpenInterestArea={setOpenInterestArea}
                  setInterest={setInterest}
                />
              </div>
            )}
          </>
        ))}
      </div>
      <div className="faculty-research-div">
        <h3>Faculty</h3>
        {researchesData.byFaculty.map((faculty) => (
          <>
            <Chip
              label={faculty.facultyName}
              onClick={() => handleFacultyClick(faculty.username)}
            />
            {facultyResearch === faculty.username && (
              <div className="faculty-research-list">
                <DialogFaculty
                  facultyResearch={faculty}
                  openFaculty={openFaculty}
                  setOpenFaculty={setOpenFaculty}
                  setFacultyResearch={setFacultyResearch}
                />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Researches;
