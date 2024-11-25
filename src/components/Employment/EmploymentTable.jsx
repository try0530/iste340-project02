import EmploymentMap from "./EmploymentMap";

const EmploymentTable = ({ data }) => {
  return (
    <div className="employment-table-div">
      <h4>{data.title}</h4>
      <div className="employment-table-map map-div">
        <EmploymentMap data={data.professionalEmploymentInformation} />
      </div>
    </div>
  );
};

export default EmploymentTable;
