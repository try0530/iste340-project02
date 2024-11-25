import { DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const DialogInterestArea = ({
  researches,
  openInterestArea,
  setOpenInterestArea,
  setInterest,
}) => {
  function handleInterestAreaClose() {
    setOpenInterestArea(false);
    setInterest("");
  }

  return (
    <div className="dialog-interest-area-div">
      <Dialog
        open={openInterestArea}
        onClose={handleInterestAreaClose}
        scroll="paper"
        aria-labelledby="interest-area-title"
        aria-describedby="interest-area-description"
      >
        <DialogTitle className="dialog-title">
          {researches.areaName}
        </DialogTitle>
        <DialogContent className="dialog-interest-area">
          <ul>
            {Object.entries(researches.citations).map((research, i) => (
              <li key={i}>{research}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogInterestArea;
