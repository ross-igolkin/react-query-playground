import ContactItem from "components/ContactItem";
import { useFindAll } from "hooks";
import MuiList from "@mui/material/List";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import Contact from "types/contact";

export default function ContactPage() {
  const { data, isLoading } = useFindAll<Contact>({ path: "contact" });
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <MuiList>
          {isLoading &&
            Array(10)
              .fill("")
              .map((_, i) => (
                <ListItemButton key={i}>
                  <Skeleton width={100} />
                </ListItemButton>
              ))}

          {data?.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </MuiList>
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
