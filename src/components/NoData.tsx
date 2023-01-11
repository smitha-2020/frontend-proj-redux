import { Grid } from '@mui/material'

const NoData = () => {
    return (
        <>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" sx={{ minHeight: '84vh', minWidth: '100vw', color: 'lightgray',backgroundColor:'primary.main' }}>
                <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '300px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
                    <Grid item style={{ width: '900px', textAlign: 'center' }} >
                        No items found
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default NoData