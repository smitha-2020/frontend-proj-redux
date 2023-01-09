import { Box, Button, TextField, Typography } from '@mui/material'
import { ProductBase, ProductOpt } from '../../common/Common';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { useForm, SubmitHandler } from 'react-hook-form';


import { json } from 'stream/consumers';
import { string } from 'yup';
import { modifyProduct } from '../../redux/reducers/ProductReducers';
import { data } from '../../common/data';

const UpdateProduct = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<ProductOpt>({});
  const product = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ProductOpt> = data => {
    if (data.id) {
      //const newData = {id:data.id,}
      //dispatch(modifyProduct(newData))
      //console.log(data)
    
    }

  };
  const categories = useAppSelector(state => state.categoryReducers)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center" margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px lightgray'} sx={{ ":hover": { boxShadow: "10px 10px 10px lightgray", }, }}>
          <Typography variant="h6" textAlign="center" padding={3}> Update Product</Typography>
          <p><span>Category Source</span>
            <select {...register("id")}>
              <option>---select product----</option>
              {
                product.product.map((productData) => <option key={productData.id} value={productData.id}>{productData.title}</option>)
              }
            </select>
          </p>
          <TextField type="text" variant="outlined" placeholder="title" margin="normal" {...register("title")} />
          <TextField type="text" variant="outlined" placeholder="price" margin="normal" {...register("price")} />
          <TextField type="text" variant="outlined" placeholder="description" margin="normal"  {...register("description")} />
          <p><span>Category Source</span>
            <select {...register("categoryId")}>
              <option>---select product----</option>
              {
                categories.map((source) => <option key={source.id} value={source.id}>{source.name}</option>)
              }
            </select>
          </p>
          <input type="file" id="myFile" style={{ marginTop: "10px" }} {...register("images")} />
          <Button sx={{ marginTop: 3, borderRadius: 3, fill: 'white' }} variant="contained" color="warning" type="submit"> Add</Button>
          <br />
          <p className="successMsg">{product.isDone ? 'Data Added successfully' : ''}</p>
          <p className="successMsg">Fill the fields you wish to update.Select the Product Id</p>
        </Box>
      </form>
    </>
  )
}

export default UpdateProduct