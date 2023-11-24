import { useRouter } from "@/core/router";
import { Box } from "@mui/material";
import { usePageLoaderContext } from "utils/context";
import { ComponentLoader } from "ui";
import { useEffect } from "react";

interface Props {
  loading?: boolean;
}

export const LoadablePageContent: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  loading,
}) => {
  const { isLoading, setIsLoading } = usePageLoaderContext();
  // authentication context if any...
  const router = useRouter();
  const isPageLoading = loading || isLoading;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isPageLoading && (
        <Box
          flex={1}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ComponentLoader disableMarginBottom />
        </Box>
      )}
      <Box
        display={isPageLoading ? "none" : "flex"}
        flexDirection="column"
        height="100%"
      >
        {children}
      </Box>
    </>
  );
};
