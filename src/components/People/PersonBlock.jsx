import "./personBlock.css";
import DialogPerson from "../Dialog/DialogPerson";

const PersonBlock = ({
  person,
  personClick,
  onPersonClick,
  openPerson,
  handlePersonClose,
}) => {
  return (
    <div className="person-block">
      <div
        className="person-block-container"
        onClick={() => {
          onPersonClick(person.username);
        }}
      >
        <img src={person.imagePath} alt={person.name} />

        <div className="overlay"></div>
        <div className="person-basic-info">
          <span>{person.title}</span>
          <h4>{person.name}</h4>
        </div>
      </div>
      {personClick === person.username && (
        <DialogPerson
          person={person}
          openPerson={openPerson}
          handlePersonClose={handlePersonClose}
        />
      )}
    </div>
  );
};

export default PersonBlock;
