import "./employers.css";

const Employers = ({ employers }) => {
  return (
    <div className="employment-employers-div">
      <h4>{employers.title}</h4>
      <ul className="employers-name">
        {employers.employerNames.map((employer, index) => (
          <li key={index}>{employer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Employers;
