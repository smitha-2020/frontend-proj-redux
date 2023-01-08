import { Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { text } from 'stream/consumers';
import CreateProduct from '../components/products_actions/CreateProduct';
import UpdateProduct from '../components/products_actions/UpdateProduct';
import { useAppSelector } from '../hooks/reduxHook'


const Profile = () => {
  const [display, setDisplay] = useState<string>("");
  const authentication = useAppSelector(state => state.auhtReducer)
  useEffect(() => {
    console.log("data refreshed");
  }, [authentication])
  if (authentication.avatar !== "") {
    console.log("authentication" + authentication.avatar)
    return (
      <>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '84vh', height: 'auto', minWidth: '100vw', color: 'lightgray', marginTop: '5px' }}>
          <Grid item alignItems="center" justifyContent="center" xs={2} style={{ backgroundColor: 'lightgray', minHeight: '80vh' }}>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" >
              <Grid item>
                <img src={authentication.avatar} alt={authentication.avatar} width="150" height="150" style={{ borderRadius: '50%' }} />
              </Grid>
              <br />
              <br />
              <Grid item xs={2}>
                {authentication.name}
              </Grid>
              <br />
              <Grid item xs={2}>
                {authentication.email}
              </Grid>
              <br />
              <Grid item xs={2}>
                {authentication.role}
              </Grid>
              <br />
              <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                  {authentication.role === "admin" ? <a href="#" onClick={(e) => { setDisplay('createProduct'); }}>Create Product</a> : ''}
                </Grid>
                <br />
                <Grid item xs={2}>
                  {authentication.role === "admin" ? <a href="#" onClick={(e) => { setDisplay('updateProduct'); }}>Update Product</a> : ''}
                </Grid>

                {/* <Grid item xs={2}>
                  <a href="#" onClick={(e) => { setUpdateProduct(!updateProduct); }}>Update Product</a>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item alignItems="center" justifyContent="center" xs={10} style={{ minHeight: '80vh' }}>
            {(display === 'createProduct' && authentication.role === "admin") ? <CreateProduct /> : ''}
            {(display === 'updateProduct' && authentication.role === "admin") ? <UpdateProduct /> : ''}
          </Grid>
        </Grid>
      </>
    )
  } else {
    return (<>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '80vh', minWidth: '100vw', color: 'lightgray' }} >
        <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '200px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
          <Grid item style={{ width: '900px', textAlign: 'center' }} >
            Not Logged in
          </Grid>
        </Grid>
      </Grid>
    </>)
  }

}

export default Profile