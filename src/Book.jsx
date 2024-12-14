import "./Book.css";

const Book = (props) => {
  const {img,book,author,price} = props;
  return (
    <div className="main">
      {console.log(props)}
      <img src = {img} className="image"/>
      <p className="book" style={{color:"red"}}><b>{book}</b></p>
      <p className="author"><b>{author}</b></p>
      <p className="price"><b>$ {price}</b></p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  )
}

export default Book
