import { SystemApplicationBar } from 'ui'
const OutsideLayout: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    return (
        <>
            {/* app bar */}
            <SystemApplicationBar title='Workwise' />
            {children}
            {/* footer */}
        </>
    )
}

export default OutsideLayout