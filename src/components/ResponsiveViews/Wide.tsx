/** @jsxImportSource theme-ui */

const Wide = props => {

    return (
        <div sx={{
            '@media screen and (max-width: 1300px)': {
                display: 'none',
            },
            position: 'relative', height: 1000
        }} >
            {props.children}
        </div>
    )
}

export default Wide
