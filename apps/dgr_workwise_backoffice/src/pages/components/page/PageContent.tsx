import { Container, Grid } from "@mui/material";
import { parseContents } from "../cms/parse-cms";
import { CmsDto } from "@/core/types/cms";
import { cloneElement, useEffect, useState } from "react";
import { useApplicationContext } from "@/core/context/ApplicationContext";
import { useRouter } from "@/core/router";

interface Props {
  preloadedCms: CmsDto[];
}

export const PageContent: React.FC<Props> = ({ preloadedCms = [] }) => {
  const { cms } = useApplicationContext();
  const { currAsPath } = useRouter();
  const currentAsPath = currAsPath;
  const contentBlocks = parseContents(cms, currentAsPath);
  return <Grid spacing={2}>{contentBlocks}</Grid>;
};
