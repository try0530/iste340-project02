import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import getData from "../../utils/getData";

import DegreeStatistics from "./DegreeStatistics";
import Introduction from "./Introduction";
import Careers from "./Careers";
import EmploymentTable from "./EmploymentTable";
import CoopTable from "./CoopTable";

import "./employment.css";
import Employers from "./Employers";

const Employment = () => {
  const [employmentData, setEmploymentData] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData("employment/").then((json) => {
      setEmploymentData(json);
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return (
      <div className="employment-div section-div" id="employment-id">
        <Loading type="Employment" />
      </div>
    );
  }

  return (
    <div className="employment-div section-div" id="employment-id">
      <h2>Employment</h2>
      <Introduction data={employmentData.introduction} />
      <DegreeStatistics statistics={employmentData.degreeStatistics} />
      <div className="employers-careers-list">
        <Employers employers={employmentData.employers} />
        <Careers careers={employmentData.careers} />
      </div>
      <div className="googlemap-div">
        <EmploymentTable data={employmentData.employmentTable} />
        <CoopTable data={employmentData.coopTable} />
      </div>
    </div>
  );
};

export default Employment;
