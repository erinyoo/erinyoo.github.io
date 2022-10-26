/** @jsxImportSource theme-ui */

const Narrow = props => {

    return (
        <div sx={{
            '@media screen and (min-width: 1299px), (max-width: 700px)': {
                display: 'none',
            },
            position: 'relative', height: 1700
        }} >
            {props.children}
        </div>
    )
}

export default Narrow
