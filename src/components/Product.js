import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import  {fetchProducts}  from "../store/store";

function Product() {
  //   const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  //   const fetchProducts = async () => {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(response.data);
  //   };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { isLoading,data: products,error } = useSelector((state) => {
    return state.products;
  });

  const handleAddToCart = (product) => {
    const productAdded={
        ...product, quantity:1
    };

    dispatch(addToCart(productAdded));
  };

  const renderedProducts = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button onClick={() => handleAddToCart(product)} variant="primary">
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  if(isLoading){
    return<div>Loading...</div>
  }
  if(error){
    return <div>Errorn in fetching product details</div>
  }

  return <div className="row">{renderedProducts}</div>;
}

export default Product;
