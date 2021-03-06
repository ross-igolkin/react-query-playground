import MuiList from "@mui/material/List";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import { useSearch } from "hooks";
import { Submission } from "types/submission";
import SubmissionItem from "components/SubmissionItem";
import Pagination from "@mui/material/Pagination";
import { useEffect } from "react";

const pageLimit = 6;

export default function SubmissionPage() {
  const { paginationNumber } = useParams();

  const submissionPage = parseInt(paginationNumber || "1");

  const navigate = useNavigate();

  const { data, isError, isLoading, error } = useSearch<Submission>({
    path: "submission",
    offset: (submissionPage - 1) * pageLimit,
    limit: pageLimit,
    queryOptions: {
      keepPreviousData: true,
    },
  });

  useEffect(() => {
    if (data?.items && data.items.length === 0) {
      navigate(`/submission/1`);
    }
  }, [data]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/submission/${value}`);
  };

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <MuiList>
          {isLoading &&
            Array(pageLimit)
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
        <Pagination count={(data?.count ?? pageLimit) / pageLimit} page={submissionPage} onChange={handleChange} />
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
