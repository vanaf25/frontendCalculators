import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});
export const getAllRowsByType= async (type)=>{
  try {
    const res= await axiosInstance.get(`tables/allRows/${type}`,);
    return res.data;
  }
  catch (e){
    return  {error:"Some error happened"}
  }
}
export const getAllTablesByType= async (type)=>{
  try {
    const res= await axiosInstance.get(`tables/${type}`,);
    return res.data;
  }
  catch (e){
    return  {error:"Some error happened"}
  }
}
export const createTable=async (data)=>{
  try {
    const res= await axiosInstance.post(`tables/createTable`,data);
    return res.data;
  }
  catch (e){
    return  {error:"Some error happened"}
  }
}
 export  const updateRowChanged=async (rowId,data)=>{
  try {
    console.log('response started!!')
  const res= await axiosInstance.put(`tables/${rowId}`,data);
  return res;
  }
  catch (e){
    return  {error:"Some error happened"}
  }
}
