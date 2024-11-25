const Introduction = ({ data }) => {
  return (
    <div className="employment-introduction-div">
      <h3>{data.title}</h3>
      {data.content.map((content, index) => (
        <div key={index} className="introduction-content">
          <h4>{content.title}</h4>
          <p>{content.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Introduction;
