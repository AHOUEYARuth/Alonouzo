"use client";
import React, { useState } from "react";
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
import Article3 from "@/assets/img/portfolio/scul5.jpg";
import Image from "next/image";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 5000;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleDelete = () => {
    setQuantity(0); // ou tu peux supprimer l'objet du panier s’il y en a plusieurs
  };

  const totalPrice = quantity * price;

  return (
    <>
      <div
        className="hero_section"
        style={{ backgroundImage: `url(${Carousel2.src})` }}
      >
        <div className="overlay"></div>

        <div className="hero_content">
          <h1 className="hero_title">Mon panier</h1>
        </div>
      </div>

      <section className="catalogue py-5">
        <div className="container">
          <div className="panier-content">
            <div className="products" id="cart-items">
              {quantity > 0 && (
                <div className="product-card">
                  <div className="product-image">
                    <Image src={Article3} alt="Nom du produit" />
                  </div>
                  <div className="product-details">
                    <p className="product-name">Nom : Masque</p>
                    <p className="product-description">
                      Description : Masque en bois
                    </p>
                    <p className="product-price">Prix : {price} f</p>

                    <div className="quantity-container">
                      <button onClick={handleDecrement}>-</button>
                      <div className="data-qty">{quantity}</div>
                      <button onClick={handleIncrement}>+</button>
                    </div>

                    <div className="total-price">Total : {totalPrice} f</div>
                    <button className="delete-button" onClick={handleDelete}>
                      Supprimer
                    </button>
                  </div>
                </div>
              )}
              {quantity === 0 && (
                <p className="empty-cart">Votre panier est vide.</p>
              )}
            </div>

            <div className="panier-paiement">
              <p style={{ textAlign: "center" }}>
                Passez votre commande et faite vous <br />
                livrez en un clique
              </p>
              <hr />
              <div className="prix"></div>
              <div className="produit-total">
                <div>Prix total : </div>
                <div id="montant">
                  <span>{totalPrice}</span> fcfa
                </div>
              </div>
              <button
                type="submit"
                id="bouton"
                style={{ backgroundColor: "#6A4E23" }}
                disabled={quantity === 0}
              >
                Passez à la caisse
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
