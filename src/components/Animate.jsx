import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const animate = ({ data }) => {
  return (
    <>
      {data.map((ele, k) => {
        return (
          <>
            <Stack spacing={1} style={{ width: "22rem" }} className="mb-4">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"21rem"}
                height={200}
                className="rounded"
              />
            </Stack>
          </>
        );
      })}
    </>
  );
};

export default animate;
