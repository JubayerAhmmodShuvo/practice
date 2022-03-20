//use localStorage to manage cart data and

const addToDb = id => {
  let shoppingCart = {};
 //get the shoppingCart
  const storedCart = localStorage.getItem('shoppingCart');
  if (storedCart) { 
    shoppingCart = JSON.parse(storedCart);
  }
  else {
    shoppingCart = {};
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;

    //localStorage.setItem(id, parseInt(quantity) + 1);
  //  localStorage.setItem(id, parseInt(quantity) + 1)
  } else {
    shoppingCart[id] = 1;
   // localStorage.setItem(id, 1);
  } 
   localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

  
}

export { addToDb };