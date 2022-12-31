
import { Product } from "../common/Common";
import { Box, Link } from "@mui/material";
import styled from "@emotion/styled";

const ProductList = ({
  products,
  selCategory,
}: {
  products: Product[];
  selCategory: number[];
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
      <ProductListing>
        {products.map((element) => (
          <Card key={element.id}>
            <ImgBox>
              <Link href={`/product/${element.id}`} ><img width="220" height="180" src={element.category.image} /></Link>
            </ImgBox>
            <CategorySBox>{element.category.name}</CategorySBox>
            <DescriptionBox>
              <NameBox>{element.title}</NameBox>
              <NameBox>${element.price}</NameBox>
            </DescriptionBox>
          </Card>
        ))}
      </ProductListing>
    </>
  );
};

export default ProductList;
