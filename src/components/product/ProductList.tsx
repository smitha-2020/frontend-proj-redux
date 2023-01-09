
import { Product } from "../../common/Common";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

const ProductList = ({
  products,
}: {
  products: Product[];
}) => {
  const ProductListing = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flexWrap: "wrap",
    width: "1200px",
    margin: "0 0 0 200px",
  });
  const CategorySBox = styled(Box)({
    minWidth: "100px",
    width: "auto",
    color: "lightgray",
    backgroundColor: "white",
    padding: "5px",
    fontSize: "10px",
    borderRadius: "1em",
    position: "absolute",
    top: "25px",
    right: "25px"
  });
  const Card = styled(Box)({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "20px",
    minWidth: "250px",
    minHeight: "250px",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25px",
    position: "relative"
  });
  const NameBox = styled(Box)({
    fontSize: "12px",
  });
  const DescriptionBox = styled(Box)({
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    gap: "20px"
  });
  const ImgBox = styled(Box)({
    width: "90%",
    height: "80%",
  });
  return (
    <>
      {
        products.length > 0 ? <ProductListing>
          {products.map((element) => (
            <Card key={element.id} sx={{color:'text.primary'}}>
              <ImgBox>
                <NavLink to={`/product/${element.id}`} ><img width="220" height="180" src={element.category.image} alt={element.category.image} /></NavLink>
                {/* <Link href={`/product/${element.id}`} ><img width="220" height="180" src={element.image} alt={element.image}/></Link> */}
              </ImgBox>
              <CategorySBox>{element.category.name}</CategorySBox>
              <DescriptionBox>
                <NameBox>{element.title}</NameBox>
                <NameBox>${element.price}</NameBox>
              </DescriptionBox>
            </Card>
          ))}
        </ProductListing> : <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '84vh', height: 'auto', minWidth: '70vw', color: 'lightgray', marginTop: '5px' }}>No Records Found!!</Grid>}
    </>
  );
};

export default ProductList;
