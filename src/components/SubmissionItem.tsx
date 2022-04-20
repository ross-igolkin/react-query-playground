import { Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate, useParams } from "react-router-dom";
import { Submission } from "types/submission";

export default function SubmissionItem({ id, insuredName }: Submission) {
  const { submissionId } = useParams();

  const navigate = useNavigate();

  return (
    <ListItemButton
      selected={submissionId === id}
      onClick={() => {
        navigate(`/submission/${id}`);
      }}
    >
      <Typography variant="body2">{insuredName}</Typography>
    </ListItemButton>
  );
}
