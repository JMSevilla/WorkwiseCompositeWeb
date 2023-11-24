/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "../router";

type AppContextValue = {
  shouldBeAccountSetup: boolean;
  cms: PreloadedCmsType[];
};

type PreloadedCmsType = {
  access: number;
  contentKey: string;
  hasLoading: number;
  id: number;
  isAccountSetup: number;
  path: string;
  created_at: Date;
  updated_at: Date;
};

type AppPassDownValues = {
  expectBeAccountSetup: boolean;
  preloadedCms: PreloadedCmsType[];
};

const ApplicationContext = createContext<AppContextValue>(undefined as any);

export const ApplicationProvider: React.FC<
  React.PropsWithChildren & AppPassDownValues
> = ({ children, expectBeAccountSetup, preloadedCms }) => {
  const [shouldBeAccountSetup, setShouldBeAccountSetup] =
    useState(expectBeAccountSetup);
  const [cms, setCms] = useState<PreloadedCmsType[]>([]);

  const { push } = useRouter();
  const feedRoute = () => {
    preloadedCms.length > 0 &&
      preloadedCms.map((c: PreloadedCmsType) => {
        if (!expectBeAccountSetup) {
          if (c.contentKey.includes("account-setup")) {
            push(c.path);
          }
        } else {
          if (!c.contentKey.includes("account-setup")) {
            push(c.path);
          }
        }
      });
  };
  useEffect(() => {
    setCms(preloadedCms);
    feedRoute();
  }, []);
  return (
    <ApplicationContext.Provider
      value={{
        shouldBeAccountSetup,
        cms,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  if (!ApplicationContext) {
    throw new Error("Application context must used.");
  }
  return useContext(ApplicationContext);
};
