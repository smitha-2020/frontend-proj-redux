import { useParams } from "react-router-dom";

import { Category, Product } from "../common/Common";
import { useAppSelector } from "../hooks/reduxHook";
import { RootState } from "../redux/store";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import ProductImg from "../components/ProductImg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SecurityIcon from "@mui/icons-material/Security";
import AddToCart from "../components/AddToCart";

const IndividualProduct = () => {
  const AnatherBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    width: "1000px",
    height: "500px",
    justifyContent: "center",
  });
  const OuterBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "200px",
  });
  const Boxthird = styled(Box)({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "470px",
    alignItems: "start",
    marginLeft: "50px",
  });
  const DisplayBox = styled(Box)({
    display: "inline",
    marginTop: "10px",
  });
  const DisplayBoxicons = styled(Box)({
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    gap: "30px",
  });
  const DisplayBoxTypography = styled(Typography)({
    display: "inline",
  });
  const DisplayBoxTypographyTitle = styled(Typography)({
    display: "inline",
    fontSize: "25px",
  });
  const DisplayBoxdescription = styled(Typography)({
    display: "inline",
    fontSize: "12px",
  });
  const DisplayBoxdelivery = styled(Typography)({
    display: "inline",
    fontSize: "10px",
  });
  const DisplayBoxMsg = styled(Box)({
    width: "95px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration:"underline"
  });
  const Boxhorizontal = styled(Box)({
  width:"100%",
  border:"1px solid darkgray",
  marginTop:"30px",
  borderColor:"darkgray"
  });
  let { id } = useParams();
  let data;
  let images: string[] = [];
  let image: Category = { id: 0, name: "", image: "" };
  let price,
    description,
    title: string = "";
  const displayoneProduct = (state: RootState) => {
    let filteredData: Product[] = [];
    [...data] = state.productReducer.filter((product) => {
      return product.id === Number(id);
    });
    filteredData.push(...data);
    return filteredData;
  };
  const products: Product[] = useAppSelector((state) => {
    return displayoneProduct(state);
  });
  if (products) {
    products.map((data) => {
      images = data.images;
      price = data.price;
      description = data.description;
      title = data.title;
      image = data.category;
    });
  }
  if (images && price && description && title && image) {
    return (
      <>
        <OuterBox>
          <AnatherBox>
            <ProductImg images={images} image={image} />
            <Boxthird>
              <DisplayBox>
                <DisplayBoxTypographyTitle>{title}</DisplayBoxTypographyTitle>
              </DisplayBox>
              <DisplayBox>
                <DisplayBoxTypography>Price : ${price}</DisplayBoxTypography>
              </DisplayBox>
              <DisplayBox>
                <DisplayBoxdescription>{description}</DisplayBoxdescription>
              </DisplayBox>
              <DisplayBoxicons>
                <DisplayBoxMsg>
                  <LocalShippingIcon />
                  <DisplayBoxdelivery>Fast Delivery</DisplayBoxdelivery>
                </DisplayBoxMsg>
                <DisplayBoxMsg>
                  <AutorenewIcon />
                  <DisplayBoxdelivery>30day replacement</DisplayBoxdelivery>
                </DisplayBoxMsg>
                <DisplayBoxMsg>
                  <LocalShippingIcon />
                  <DisplayBoxdelivery>fast Delivery</DisplayBoxdelivery>
                </DisplayBoxMsg>
                <DisplayBoxMsg>
                  <SecurityIcon />
                  <DisplayBoxdelivery>2 year warrenty</DisplayBoxdelivery>
                </DisplayBoxMsg>
              </DisplayBoxicons>
              <DisplayBox>
                <DisplayBoxdescription>Available : In stock</DisplayBoxdescription>
              </DisplayBox>
              <DisplayBox>
                <DisplayBoxdescription>ID : {id}</DisplayBoxdescription>
              </DisplayBox>
              <DisplayBox>
                <DisplayBoxdescription>Brand: {title}</DisplayBoxdescription>
              </DisplayBox>
             <Boxhorizontal></Boxhorizontal>
             <AddToCart products={products}/>

            
            </Boxthird>
          </AnatherBox>
        </OuterBox>
      </>
    );
  } else {
    return (
      <>
        <OuterBox>
          <AnatherBox>
            <Typography>Waiting...</Typography>
          </AnatherBox>
        </OuterBox>
      </>
    );
  }
};

export default IndividualProduct;
