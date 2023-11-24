import { createContext, useContext, useEffect, useState } from "react";

const context = createContext<{
  isLoading: boolean;
  setIsLoading(status: boolean): void;
}>(undefined as any);

interface Props {
  loading: boolean;
}

export const usePageLoaderContext = () => {
  if (!context) {
    throw new Error("PageLoaderContextProvider should be used.");
  }
  return useContext(context);
};

export const PageLoaderContextProvider: React.FC<
  React.PropsWithChildren<Props>
> = ({ children, loading }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(loading);
  }, []);
  return (
    <context.Provider
      value={{
        isLoading: isLoading || !!loading,
        setIsLoading,
      }}
    >
      {children}
    </context.Provider>
  );
};
