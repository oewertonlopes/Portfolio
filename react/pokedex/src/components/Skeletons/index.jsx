import { Skeleton } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

export const Skeletons = () => {
  return (
    <>
      <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}} />
    </>
  )
};
