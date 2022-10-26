/** @jsxImportSource theme-ui */

const Moweb = props => {

    return (
        <div sx={{
            '@media screen and (min-width: 699px)': {
                display: 'none',
            },
            position: 'relative', height: 1000
        }} >
            {props.children}
        </div>
    )
}

export default Moweb
