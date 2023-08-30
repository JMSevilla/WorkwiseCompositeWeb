import { ReactElement } from "react"
import CatalogLayout from "./Layouts/CatalogLayout"

const Home = () => {
  return (
    <>
      <h3>Home page</h3>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <CatalogLayout>{page}</CatalogLayout>
}

export default Home