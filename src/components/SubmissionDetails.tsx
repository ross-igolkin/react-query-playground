import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import { useFindById } from "hooks";
import { useParams } from "react-router-dom";
import { Submission } from "types";

export default function Details() {
  const { submissionId } = useParams();

  const { data, isLoading } = useFindById<Submission>({
    path: "submission",
    id: submissionId!,
  });

  return isLoading ? (
    <Skeleton width={100} />
  ) : (
    <Box>
      {data?.industry} {data?.insuredName}
    </Box>
  );
}
