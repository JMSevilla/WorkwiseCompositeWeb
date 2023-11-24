/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import ProductCatalogHeader from '../components/ProductCatalog/ProductCatalogHeader';
import ProductCatalogAppBar from '../components/ProductCatalog/ProductCatalogAppbar';

const CatalogLayout: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    return (
        <>
            <ProductCatalogAppBar />
            {/* content section */}
            {children}
            {/* footer */}
        </>
    )
}

export default CatalogLayout