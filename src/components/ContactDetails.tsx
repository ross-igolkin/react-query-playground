import { Box, Skeleton } from "@mui/material";
import { useFindById, useGetQueryData } from "hooks";
import { useParams } from "react-router-dom";
import Contact from "types/contact";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ContactDetails() {
  const { contactId } = useParams();

  const initData = useGetQueryData<Contact[]>("contact")?.find((contact) => contact.id === contactId);

  const { data, isLoading } = useFindById<Contact>({
    path: "contact",
    id: contactId!,
    options: {
      initialData: () => {
        if (initData) {
          return { ...initData };
        } else {
          return undefined;
        }
      },
    },
  });
  return isLoading ? (
    <Skeleton width={100} />
  ) : (
    <Box>
      {data?.firstName} {data?.lastName}
      <Button
        color="inherit"
        component={RouterLink}
        to={`/contact/${contactId}/edit`}
        state={{ backgroundLocation: true }}
      >
        Edit Contact
      </Button>
    </Box>
  );
}
