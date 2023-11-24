/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
import ProductCatalogAppBar from "../components/ProductCatalog/ProductCatalogAppbar"
import { GetServerSideProps } from "next"
import { initializedAccountSetup } from "utils/server-side-api"
import { context, hooks } from 'utils'
import { useEffect } from "react"

type PageProps = {
    data?: any
}

const CatalogLayout = ({
    children, data
}: React.PropsWithChildren & PageProps) => {
    return (
        <>
            <ProductCatalogAppBar />
            {/* drop context api to pass down the value from server side if needed */}
            {/* <context.GlobalProvider 
                expectBeAccountSetup={data?.preloadedGlobals?.data}
            >
                 
            </context.GlobalProvider> */}
            {children}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
      const preloadedGlobals = await initializedAccountSetup()
      return {
        props : {
          data: {
            preloadedGlobals
          }
        }
      }
    } catch (error) {
      return { props: { error }}
    }
  }

export default CatalogLayout

