import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "./dialogCourse.css";

const DialogCourse = ({ course, title, description, setClickCourse }) => {
  // when user click other place, close the dialog
  function handleClose() {
    setClickCourse("");
  }

  // replace &amp; to & to show on the dialog
  if (title) {
    title = title.replace(/&amp;/g, "&");
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-course-id">{`${course} - ${title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description-id">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogCourse;
