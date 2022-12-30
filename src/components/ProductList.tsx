
import { Product } from "../common/Common";
import { Box } from "@mui/material";
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

  const Card = styled(Box)({
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray",
    textAlign: "center",
    gap: "20px",
    minWidth: "250px",
    minHeight: "250px",
    padding: "10px 0 0 10px",
    borderRadius: "1em",
    backgroundColor: "lightblue",
  });
  return (
    <>
      {/* <div>ProductList</div> */}
      {products.length}

 
      <ProductListing>
        {products.map((element) => (
          <Card key={element.id}>{element.title}</Card>
        ))}
      </ProductListing>
    </>
  );
};

export default ProductList;
