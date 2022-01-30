import React, {createContext, useEffect, useState} from 'react';

const Context = createContext();

const BonsaiContext = props => {
  const [cartList, setCartList] = useState({});

  useEffect(async () => {}, []);

  function getItemFromCart(item) {
    return cartList[item] || 0;
  }

  function setCartItem(item, amount) {
    let obj = {...cartList};
    obj[item] = amount;
    // setCartList(obj, item, amount);
    console.log(obj);
  }

  const storage = {
    cartList,
    getItemFromCart: e => getItemFromCart(e),
    setCartItem: (item, amount) => setCartItem(item, amount),
  };

  return <Context.Provider value={storage}>{props.children}</Context.Provider>;
};

export {BonsaiContext, Context};
