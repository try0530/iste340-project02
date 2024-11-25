import StatisticData from "../Statistics/StatisticData";

import "./degreeStatistics.css";

const DegreeStatistics = ({ statistics }) => {
  // get the value verbal part
  function getData(value, type) {
    // ^(.*?): get the text before the number
    // (\d[\d,\.]*): get the number part
    // (.*)$: get anything after the number
    const match = value.match(/^(.*?)(\d[\d,\.]*)(.*)$/);

    if (match) {
      const prefix = match[1].trim(); // Text before the number
      const number = match[2].replace(/,/g, ""); // The number itself, without commas
      const suffix = match[3].trim(); // Text after the number

      return type === "pre" ? prefix : type === "suf" ? suffix : number;
    }
  }

  return (
    <div className="degree-statistics-div">
      <h4>{statistics.title}</h4>
      <div className="statistics">
        {statistics.statistics.map((statistic, index) => (
          <div key={index} className="statistic">
            <StatisticData
              key={index}
              label={statistic.description}
              // valueText={statistic.value}
              prefix={getData(statistic.value, "pre")}
              valueNumber={getData(statistic.value)}
              suffix={getData(statistic.value, "suf")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DegreeStatistics;
