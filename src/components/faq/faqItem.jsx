import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FaqItem = ({ head, body }) => {
  return (
    <Accordion
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        borderBottom: "1px solid  rgba(255, 255, 255, 0.3)",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{head}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
