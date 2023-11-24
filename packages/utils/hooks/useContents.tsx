/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import {
    Container
} from '@mui/material'

export const useContents = () => {
    function AccountSetupContents() {
        return (
            <Container>
                <h3>Account setup</h3>
            </Container>
        )
    }
    return {
        AccountSetupContents
    }
}