import ContactItem from "components/ContactItem";
import { useFindAll } from "hooks";
import MuiList from "@mui/material/List";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import Contact from "types/contact";

export default function ContactPage() {
  const { data, isLoading } = useFindAll<Contact>({
    path: "contact",
    options: {
      staleTime: 10 * 1000,
    },
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MuiList>
          {isLoading &&
            Array(30)
              .fill("")
              .map((_, i) => (
                <ListItemButton key={i}>
                  <Skeleton width="100%" />
                </ListItemButton>
              ))}

          {data?.map((contact, index) => (
            <ContactItem key={contact.id} index={index} {...contact} />
          ))}
        </MuiList>
      </Grid>
    </Grid>
  );
}
