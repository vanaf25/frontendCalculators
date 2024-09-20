import {useEffect, useState} from 'react';
import Card from "./Card/Card"
import {Typography} from "@mui/material";
const SavedCaclulations = () => {
    const [cards,setCards]=useState([]);
    const [isLoading,setIsLoading]=useState(false)
    useEffect(() => {
        setIsLoading(true);
        fetch(process.env.REACT_APP_BASE_URL).then(res=>res.json()).then(res=>{
            console.log('res:',res);
            setCards(res);
            setIsLoading(false)
        }).catch(()=>console.log('err:Error'));
    }, []);
    return (
        <div>
            {isLoading ?
              <Typography variant={"h4"} sx={{color:"#fff"}}>Loading...</Typography>:
              cards.map(card=><Card key={card._id} {...card}/>)}
        </div>
    );
};
export default SavedCaclulations;
