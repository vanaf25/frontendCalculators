import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ProductCard = ({name,price,_id,deleteProduct}) => {
    return (
        <Card sx={{ maxWidth: 345,mb:1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/products/edit/${_id}`}>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </Link>

                <Button onClick={()=>deleteProduct(_id)} size="small" color="error">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
