import MuiList from "@mui/material/List";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import { useFindAll } from "hooks";
import { Submission } from "types/submission";
import SubmissionItem from "components/SubmissionItem";

export default function SubmissionPage() {
  const { data, isError, isLoading, isFetching, error } =
    useFindAll<Submission>({
      path: "submission",
    });

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log(isLoading, isFetching);
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

          {data?.items?.map((submission: Submission) => (
            <SubmissionItem key={submission.id} {...submission} />
          ))}
        </MuiList>
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}