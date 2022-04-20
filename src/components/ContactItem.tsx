import { Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate, useParams } from "react-router-dom";
import Contact from "types/contact";

export default function ContactItem({ id, firstName }: Contact) {
  const { contactId } = useParams();

  const navigate = useNavigate();

  return (
    <ListItemButton
      selected={contactId === id}
      onClick={() => {
        navigate(`/contact/${id}`);
      }}
    >
      <Typography variant="body2">{firstName}</Typography>
    </ListItemButton>
  );
}
