import "./loading.css";

const Loading = ({ type }) => {
  return (
    <div className="loading">
      {type} is Loading
      <span className="loading-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </div>
  );
};

export default Loading;
