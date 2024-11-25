import CoopMap from "./CoopMap";

const CoopTable = ({ data }) => {
  return (
    <div className="coop-table-div">
      <h4>{data.title}</h4>
      <div className="coop-table-map map-div">
        <CoopMap data={data.coopInformation} />
      </div>
    </div>
  );
};

export default CoopTable;
