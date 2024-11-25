import "./careers.css";

const Careers = ({ careers }) => {
  return (
    <div className="employment-careers-div">
      <h4>{careers.title}</h4>
      <ul className="careers-name">
        {careers.careerNames.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
    </div>
  );
};

export default Careers;
