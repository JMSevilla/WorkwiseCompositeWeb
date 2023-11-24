/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Layout as LayoutComponent } from "./Layout";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import {
  initializedAccountSetup,
  initializedCms,
  feedCms,
} from "utils/server-side-api";
import { ApplicationProvider } from "@/core/context/ApplicationContext";
import { ErrorBox } from "@/pages/components/ErrorBox/ErrorBox";
import { CmsDto } from "@/core/types/cms";

import { context } from "utils";

interface Props {
  data?: any;
  error?: Error;
}

export const Page: NextPage<Props> = ({ data, error }) => {
  const Layout = dynamic<React.ComponentProps<typeof LayoutComponent>>(
    () => import("./Layout").then((c) => c.Layout),
    {
      ssr: false,
    }
  );
  if (error) {
    return <ErrorBox label={error.message} />;
  }
  const cmsloader =
    data?.preloadedCms?.length > 0 &&
    data?.preloadedCms.some((item: any) => item.hasLoading === 1);
  return (
    <>
      <ApplicationProvider
        expectBeAccountSetup={data?.preloadedGlobals?.data}
        preloadedCms={data?.preloadedCms}
      >
        <context.PageLoaderContextProvider loading={cmsloader}>
          <Layout
            preloadedGlobals={data?.preloadedGlobals?.data}
            preloadedCms={data?.preloadedCms}
            loading={cmsloader}
          />
        </context.PageLoaderContextProvider>
      </ApplicationProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    /* Change obj accordingly */
    const obj = {
      path: "/account-setup",
      contentKey: "account_setup",
      access: 0,
      hasLoading: 1,
      isAccountSetup: 1,
    };
    const initFeedCms = await feedCms(obj);
    const preloadedGlobals = await initializedAccountSetup();
    const preloadedCms = await initializedCms();
    return {
      props: {
        data: {
          preloadedGlobals,
          preloadedCms,
          initFeedCms,
        },
      },
    };
  } catch (error) {
    return { props: { error } };
  }
};
