/* eslint-disable no-unused-vars */
// Basket.jsx

import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import "./styles/Basket.css";
import BurgerMenu from "../components/BurgerMenu";
import shopData from "../../Shop.json";
import { createBrowserHistory } from 'history';



const Basket = () => {
  const [basketData, setBasketData] = useState([]);
  const [quantity, setQuantity] = useState(0); // Ajout de cette ligne
  const [totalPrice, setTotalPrice] = useState(0);
  const history = createBrowserHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchArticles = () => {
      try {
        if (!shopData || !Array.isArray(shopData.articles)) {
          throw new Error("Le fichier JSON est incorrect ou vide.");
        }

        const filteredData = shopData.articles.filter((article) => article.id == id);
        if (filteredData.length > 0) {
          setBasketData(filteredData);
          console.info("Product:", filteredData);
        } else {
          console.error("Aucun article trouvé avec l'ID:", id);
        }
      } catch (error) {
        console.error("Erreur au chargement des articles:", error.message);
      }
    };

    fetchArticles();
  }, [id]);

  useEffect(() => {
    updateTotalPrice();
  }, [basketData]);

  const updateTotalPrice = () => {
    const existingBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const total = existingBasket.reduce(
      (acc, item) => acc + parseFloat(item.price),
      0
    );
    setTotalPrice(total);
  };

  const handleAddToBasket = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);

    const existingBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const updatedBasket = [...existingBasket, ...basketData];
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    updateTotalPrice();
  };

  const handleRemoveFromBasket = (name) => {
    const existingBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const updatedBasket = existingBasket.filter((item) => item.alt !== name);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    updateTotalPrice();

    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const getBasketItems = () => {
    const existingBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const groupedBasket = existingBasket.reduce((accumulator, item) => {
      const existingItem = accumulator.find(
        (accItem) => accItem.alt === item.alt
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        accumulator.push({ ...item, quantity: 1 });
      }
      return accumulator;
    }, []);

    return groupedBasket.map((item, index) => (
      <div key={index} className="boughtItem">
        <img src={item.img} alt={item.alt} />
        <div className="boughtItemDesc">
          <h2>
            {item.alt} x {item.quantity}
          </h2>
          <p>{item.price}</p>
        </div>
        <button onClick={() => handleRemoveFromBasket(item.alt, item.price)}>
          Supprimer
        </button>
      </div>
    ));
  };

  const handlePaymentClick = () => {
    alert(
      `Le montant total à payer est de ${totalPrice.toFixed(
        2
      )} DC.\nPayes ou tu n'iras pas au Valhalla !`
    );
    localStorage.clear();
    history.push('/');
    window.location.reload();
  };

  return (
    <div className="Basket">
      <BurgerMenu />

      {basketData.map((article) => (
        <div key={article.id} className="Product">
          <div className="ProductMask">
            <img src={article.img} alt={article.alt} className="ProductPic" />
          </div>
          <div className="ProductDesc">
            <h2 className="ProductName">{article.alt}</h2>
            <p className="ProductPrice">{article.price}</p>
          </div>
          <button onClick={handleAddToBasket}>Ajouter au panier</button>
        </div>
      ))}
      <div className="BasketItems">
        <h1>Votre panier</h1>
        {getBasketItems()}
        <p>Total: {totalPrice.toFixed(2)} DC</p>
        <div className="basketNav">
          <Link to="/Mallhalla" style={{ textDecoration: "none" }} className="backToMallHalla">
            <p>Retour</p>
          </Link>
          <button onClick={handlePaymentClick}>Payer</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
