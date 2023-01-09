
import { ThemeContext } from '@emotion/react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from '../hooks/reduxHook';
import { createTheme, ThemeProvider } from '@mui/material'

const Home = () => {
//  const themes = createTheme(light);
//   const switchchange = useAppSelector(state => state.switchReducer)
//   const themechange = (switchchange.modeChange === "light") ? createTheme(light) : createTheme(dark);
  const theme = useTheme();
  return (
    <>
    {/* <ThemeProvider theme={themechange}> */}
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center"  sx={{bgcolor:'primary.main',minHeight:'84vh',height:'auto',minWidth:'100vw',color:'lightgray',marginTop:'5px'}}>
        <Grid item  sx={{width:'900px',textAlign:'center',fontSize:'30px',color:'text.primary'}}>
          under construction
        </Grid>
      </Grid>
      {/* </ThemeProvider> */}
    </>
  )
}

export default Home