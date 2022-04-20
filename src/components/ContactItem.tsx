import { Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate, useParams } from "react-router-dom";
import Contact from "types/contact";

interface ContactItemProps extends Contact {
  index: number;
}

export default function ContactItem({ index, id, firstName }: ContactItemProps) {
  const { contactId } = useParams();

  const navigate = useNavigate();

  return (
    <ListItemButton
      selected={contactId === id}
      onClick={() => {
        navigate(`/contact/${id}`);
      }}
    >
      <Typography variant="body2">
        {index + 1} {firstName}
      </Typography>
    </ListItemButton>
  );
}
