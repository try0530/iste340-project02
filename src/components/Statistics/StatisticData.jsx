import { Statistic } from "semantic-ui-react";

import "./statisticData.css";

const StatisticData = ({ label, prefix, valueNumber, suffix }) => (
  // <Statistic label={label} value={value} color="orange" />
  <Statistic>
    <Statistic.Value style={{ color: "#F76902" }}>
      {prefix ? <span className="statistic-data-value">{prefix}</span> : null}
      <span>{valueNumber}</span>
      {suffix ? <span className="statistic-data-value">{suffix}</span> : null}
    </Statistic.Value>
    <Statistic.Label>{label}</Statistic.Label>
  </Statistic>
);

export default StatisticData;
