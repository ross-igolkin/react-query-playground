import { Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";
import Contact from "types/contact";

interface ContactItemProps extends Contact {
  index: number;
}

export default function ContactItem({ index, id, firstName }: ContactItemProps) {
  const navigate = useNavigate();

  return (
    <ListItemButton
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
