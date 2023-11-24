import { Box, Container } from "@mui/material";
import React from "react";

interface Props {
  loading?: boolean;
}

export const PageContainer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  loading,
}) => {
  return (
    <Box
      component="main"
      id="mainContent"
      role="main"
      flex={1}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        flex={1}
        width="100%"
        height="100%"
        display="flex"
        my={{ xs: 0, sm: 0 }}
        boxShadow={{
          xs: 0,
          sm: 0,
        }}
        sx={{
          width: (theme) => ({ xs: "100%", sm: "100%" }),
        }}
      >
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </Box>
  );
};
