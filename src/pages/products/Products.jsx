import  {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import ProductCard from '../../components/products/ProductCard/ProductCard';

const Products = () => {
  const [products,setProducts]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  console.log('pr');
  useEffect(()=>{
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_BASE_URL}products`).then(res=>res.json()).then(res=>{
      setProducts(res)
      setIsLoading(false)
    })
  },[]);
  const deleteProductHandle=(id)=>{
    fetch(`${process.env.REACT_APP_BASE_URL}products/${id}`,{method:"DELETE"}).then(()=>{
      setProducts(products=>products.filter(product=>product._id!==id))
    })
  }
  return (
    <Box sx={{p:2}}>
      <Link to={`/products/create`}>
        <Button sx={{mb:2}} variant="contained">Add new Product</Button>
      </Link>
      {isLoading  ? <h2>Loading...</h2>:  products.map(product=><ProductCard key={product._id}
        deleteProduct={deleteProductHandle} {...product}/>)}
    </Box>
  );
};

export default Products;
