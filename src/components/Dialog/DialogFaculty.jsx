import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const DialogFaculty = ({
  facultyResearch,
  openFaculty,
  setOpenFaculty,
  setFacultyResearch,
}) => {
  function handleFacultyClose() {
    setOpenFaculty(false);
    setFacultyResearch("");
  }

  return (
    <div className="dialog-faculty-research-div">
      <Dialog
        open={openFaculty}
        onClose={handleFacultyClose}
        scroll="paper"
        aria-labelledby="faculty-area-title"
        aria-describedby="faculty-area-description"
      >
        <DialogTitle className="dialog-title">
          {facultyResearch.facultyName}
        </DialogTitle>
        <DialogContent className="dialog-faculty-research">
          <ul>
            {facultyResearch.citations.map((research, i) => (
              <li key={i}>{research}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogFaculty;
