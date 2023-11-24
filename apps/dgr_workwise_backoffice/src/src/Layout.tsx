/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
import Header from "@/pages/components/ProductCatalog/ProductCatalogAppbar";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PageContainer } from "@/pages/components/page/PageContainer";
import { PageContent } from "@/pages/components/page/PageContent";
import { CmsDto } from "@/core/types/cms";
import { LoadablePageContent } from "@/pages/components/page/LoadableContent";

type LayoutProps = {
  preloadedGlobals: any;
  preloadedCms: CmsDto[];
  loading?: boolean;
};

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export const Layout: React.FC<LayoutProps> = ({
  preloadedGlobals,
  preloadedCms = [],
  loading,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {preloadedGlobals && <Header />}
        <PageContainer>
          <LoadablePageContent loading={loading}>
            <PageContent preloadedCms={preloadedCms} />
          </LoadablePageContent>
        </PageContainer>
      </ThemeProvider>
    </>
  );
};
