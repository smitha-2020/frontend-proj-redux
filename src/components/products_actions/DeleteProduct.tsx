import { Box, Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductOpt } from '../../common/common';
import { deletingProduct } from '../../redux/reducers/ProductReducers';
import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<ProductOpt>({});
  const navigate = useNavigate();
  const product = useAppSelector(state => state.productReducer)
  const isDone = product.isDone;
  useEffect(() => {
  }, [isDone])
  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<ProductOpt> = async (data) => {
    dispatch(deletingProduct(data.id))
    if (product.isDone) {
      navigate('/fulfilled')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center" margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px lightgray'} sx={{ ":hover": { boxShadow: "10px 10px 10px lightgray", }, }}>
        <Typography variant="h6" textAlign="center" padding={3}> Delete Product</Typography>
        <p><span>Delete Product</span>
          <select {...register("id")} >
            <option>---select product----</option>
            {
              product.product.map((productData) => <option key={productData.id} value={productData.id}>{productData.title}</option>)
            }
          </select>
        </p>
        <Button sx={{ marginTop: 3, borderRadius: 3, fill: 'white' }} variant="contained" color="warning" type="submit"> Delete</Button>
      </Box>

    </form>
  )
}

export default DeleteProduct