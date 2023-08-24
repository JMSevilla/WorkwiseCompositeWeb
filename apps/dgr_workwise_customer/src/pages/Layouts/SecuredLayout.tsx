
const SecuredLayout: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => { 
    return (
        <>
            {/* app bar dashboard & sidebar */}
            {children}
            {/* footer if any */}
        </>
    )
}

export default SecuredLayout