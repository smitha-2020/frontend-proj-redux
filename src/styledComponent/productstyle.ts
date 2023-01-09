import React, { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grid, Pagination } from '@mui/material';
import styled from '@emotion/styled';

// styled utility from materialui
export const AnatherBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    padding: "50px 0 0 50px",
    minHeight:'81vh'
  })
  export const AnatherInputLabel = styled(InputLabel)({
    fontSize: "10px"
  })
  export const AnatherSelect = styled(Select)({
    width: "200px",
    float: "right",
    fontSize: "10px",
    height: "40px"
  })
  export const AnatherMenuItem = styled(MenuItem)({
    fontSize: "12px"
  })
  export const CategoryBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "200px",
    fontSize: "12px"
  })
  export const OuterBox = styled(Box)({
    marginBottom: "20px"
  })
  export const ProductBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
  })
