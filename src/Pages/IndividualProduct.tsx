import { useParams } from "react-router-dom";

import { Product } from "../common/Common";
import { RootState } from "../redux/store";
import { Grid } from "@mui/material";
import ProductImg from "../components/ProductImg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SecurityIcon from "@mui/icons-material/Security";
import AddToCart from "../components/AddToCart";
import Star from "../components/Star";


const IndividualProduct = ({ products }: { products: Product[] }) => {
  let { id } = useParams();

  let image: string;
  let img: string = "";
  let rating: number = 0;
  let reviews: number = 0;
  //let image: Category = { id: 0, name: "", image: "" };
  let price,
    description,
    title: string = "";
  const displayoneProduct = (state: RootState) => {
    let filteredData: Product[] = [];
    //console.log(filteredData)
    // [...data] = state.productReducer.filter((product) => {
    //   return product.id === Number(id);
    // });
    // filteredData.push(...data);
    return filteredData;
  };
  // const products: Product[] = useAppSelector((state) => {
  //   return displayoneProduct(state);
  // });

  const product = products.filter((product) => { return product.id === Number(id) })
  console.log("products" + product)
  if (product) {
    product.map((data) => {
      img = data.image;
      image = data.image;
      price = data.price;
      description = data.description;
      title = data.title;
      rating = data.rating.rate;
      reviews = data.rating.count;

    });
  }
  if (price && description && title && img) {
    let idPass: string = (id) ? id : "";
    return (
      <>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '100vh', minWidth: '100vw' }}>
          <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '800px', height: '500px',marginLeft:"20px" }}>
            <Grid item xs={5}> <img src={img} alt={img} width="250" height="250" /></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
              <Grid container spacing={0} direction="column" >
                <Grid item style={{ marginTop: '10px',fontSize:'25px',fontWeight:'400' }}>{title}</Grid>
                <Grid item style={{ marginTop: '20px',fontSize:'12px',fontWeight:'400' }}> <Star stars={rating} /></Grid>
                <Grid item style={{ marginTop: '10px',fontSize:'12px',fontWeight:'400' }}> ({reviews} reviews so far)</Grid>
                <Grid item style={{ marginTop: '10px',fontSize:'18px',fontWeight:'400' }}>Price : ${price}</Grid>
                <Grid item style={{ marginTop: '10px',fontSize:'12px',fontWeight:'400',width:"500px" }}>{description}</Grid>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ marginTop: '30px'}}>
                  <Grid item xs={3}>
                    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ fontSize:'10px',fontWeight:'400' }}>
                      <Grid item><LocalShippingIcon /></Grid>
                      <Grid item> Fast Delivery</Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                  <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ fontSize:'10px',fontWeight:'400' }}>
                      <Grid item></Grid> <AutorenewIcon />
                      <Grid item>30day replacement</Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                  <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ fontSize:'10px',fontWeight:'400' }}>
                      <Grid item><LocalShippingIcon /></Grid>
                      <Grid item> Fast Delivery</Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                  <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ fontSize:'10px',fontWeight:'400' }}>
                      <Grid item>  <SecurityIcon /></Grid>
                      <Grid item>2 year warrenty</Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ marginTop: '20px',fontSize:'12px',fontWeight:'400' }}>Available : In stock</Grid>
                <Grid item style={{ marginTop: '20px',fontSize:'12px',fontWeight:'400' }}>ID : {id}</Grid>
                <Grid item style={{ marginTop: '20px',fontSize:'12px',fontWeight:'400' }}>Brand: {title}</Grid>
                <Grid item style={{ border:"1px solid gray",marginTop:'20px'}}></Grid>
                <Grid item>
                <AddToCart products={products} id={idPass}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '100vh', minWidth: '100vw' }}>
          No products by this Id
        </Grid>
      </>
    );
  }
};

export default IndividualProduct;
