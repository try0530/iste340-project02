import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import Facebook from "@mui/icons-material/Facebook";

import "./dialogPerson.css";

const DialogPerson = ({ person, openPerson, handlePersonClose }) => {
  function formatTwitterUrl(twitter) {
    // check whether the url start with https:// or http://
    if (twitter.startsWith("https://") || twitter.startsWith("http://")) {
      return twitter;
    } else {
      return `https://x.com/${twitter}`;
    }
  }

  function formatFacebookUrl(facebook) {
    if (facebook.startsWith("https://") || facebook.startsWith("http://")) {
      return facebook;
    } else {
      return `https://facebook.com/${facebook}`;
    }
  }

  return (
    <div className="dialog-person-main-div">
      <Dialog
        open={openPerson}
        onClose={handlePersonClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogContent className="dialog-person">
          {/* personnal basic info */}
          <div className="dialog-person-basic">
            <img src={person.imagePath} alt={person.name} />
            <Typography
              gutterBottom
              sx={{ fontWeight: 700 }}
            >{`Name: ${person.name}`}</Typography>
            <Typography gutterBottom>{`Title: ${person.title}`}</Typography>
            {person.office ? (
              <Typography gutterBottom>{`Office: ${person.office}`}</Typography>
            ) : null}
            {person.interestArea ? (
              <div>
                <Typography gutterBottom className="dialog-interest-area">
                  Interest Area:
                </Typography>
                <ul className="interest-area-list">
                  {person.interestArea.split(" ").map((interest, i) => (
                    <li key={i}>{interest.replace(",", "")}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          {/* personnal contacts and info */}
          <div className="dialog-person-details">
            {person.website ? (
              <Typography gutterBottom className="dialog-person-info">
                <a href={person.website} target="_blank">
                  <HomeIcon />
                  {person.website}
                </a>
              </Typography>
            ) : null}
            {person.phone ? (
              <Typography gutterBottom className="dialog-person-info">
                <a href={`tel:+1${person.phone}`}>
                  <PhoneIcon />
                  {person.phone}
                </a>
              </Typography>
            ) : null}
            {person.email ? (
              <Typography gutterBottom className="dialog-person-info">
                <a href={`mailto:${person.email.replace(" (AT) ", "@")}`}>
                  <EmailIcon />
                  {person.email.replace(" (AT) ", "@")}
                </a>
              </Typography>
            ) : null}
            {person.twitter ? (
              <Typography gutterBottom className="dialog-person-info">
                <a href={formatTwitterUrl(person.twitter)} target="_blank">
                  <XIcon />
                  {person.twitter}
                </a>
              </Typography>
            ) : null}
            {person.facebook ? (
              <Typography gutterBottom className="dialog-person-info">
                <a href={formatFacebookUrl(person.facebook)} target="_blank">
                  <Facebook />
                  {person.facebook}
                </a>
              </Typography>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogPerson;
