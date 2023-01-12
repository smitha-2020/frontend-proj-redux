
import { Product } from "../../common/common";
import { Grid } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { Card, CategorySBox, DescriptionBox, ImgBox, NameBox, NotFound, ProductListing } from "../../styledComponent/productstyle";

const ProductList = ({
  products,
}: {
  products: Product[];
}) => {
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
                <NameBox>{element.title.substring(0,30)}</NameBox>
                <NameBox>${element.price}</NameBox>
              </DescriptionBox>
            </Card>
          ))}
        </ProductListing> :<NotFound>No Records Found!!</NotFound> }
    </>
  );
};

export default ProductList;
