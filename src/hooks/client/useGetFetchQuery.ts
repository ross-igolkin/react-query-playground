import { useQueryClient } from "react-query";
import { ClientUrl } from "types";

export const useGetFetchQuery = (key:ClientUrl) => {
    const queryClient = useQueryClient();

    return queryClient.getQueryData(key);
};