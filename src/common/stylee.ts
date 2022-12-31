import { makeStyles } from '@mui/material'
import styled from "@emotion/styled";
import { Box, Link } from "@mui/material";

export const useStyles = makeStyles({
    root:{
     border:0,
     color:'lightgray',
     
    }
   })

   export const ProductListing = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flexWrap: "wrap",
    width: "1200px",
    margin: "0 0 0 200px",
  });
  export const CategorySBox = styled(Box)({
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
  export const Card = styled(Box)({
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
  export const NameBox = styled(Box)({
    fontSize: "12px",
  });
  export const DescriptionBox = styled(Box)({
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    gap: "20px"
  });
  export const ImgBox = styled(Box)({
    width: "90%",
    height: "80%",
  });