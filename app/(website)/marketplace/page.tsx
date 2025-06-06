"use client";
import React from "react";
import { useEffect,useState } from "react";
import Link from "next/link";
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
import Image from "next/image";
import MenuIcon from "@/assets/img/menu.svg";
import Article1 from "@/assets/img/portfolio/4.jpg";
import Loading from "@/components/Loader";
import StarT from "@/assets/img/start.svg";
import ModalForm from "@/components/ModalForm";
import { products } from "@/data/products";
import "./market.css";
const MarketPlace = () => {
  const [price, setPrice] = useState(10000);
  const [isOpen, setIsOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="hero_section"
        style={{ backgroundImage: `url(${Carousel2.src})` }}
      >
        <div className="overlay"></div>

        <div className="hero_content">
          <h1 className="hero_title">MarketPlace</h1>
        </div>
      </div>
      <section className=" section-padding creation">
        <div className="container">
          <div className="creation_content">
            <div className="creation_sidebar" onClick={() => setSideOpen(true)}>
              <Image src={MenuIcon} alt="" />
              <p>Voir les catégories</p>
            </div>
            <div className="left_section">
              <div className="left_item">
                <div className="left_content">
                  <h2>Trier par prix</h2>
                  <div className="custom-border-terra"></div>
                  <input
                    id="priceRange"
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                  <p className="price">
                    Prix: FCFA 13000 - <span>FCFA {price}</span>
                  </p>
                </div>
              </div>
              <div className="left_item">
                <div className="left_content">
                  <h2>Articles</h2>
                  <div className="custom-border-terra"></div>
                  <div className="artile_listp">
                    <div className="article_itemp">
                      <div className="img">
                        <Image src={Article1} alt="" />
                      </div>
                      <div className="article_info">
                        <h4>Jarre d&eau</h4>
                        <span>CFA 3000</span>
                      </div>
                    </div>
                    <div className="article_itemp">
                      <div className="img">
                        <Image src={Article1} alt="" />
                      </div>
                      <div className="article_info">
                        <h4>Foyez</h4>
                        <span>CFA 2500</span>
                      </div>
                    </div>
                    <div className="article_itemp">
                      <div className="img">
                        <Image src={Article1} alt="" />
                      </div>
                      <div className="article_info">
                        <h4>Marmite</h4>
                        <span>CFA 2000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_section">
              <div className="right_content">
                <div className="boutique">
                  <button onClick={openModal} className="bout">
                    Créer une boutique
                  </button>
                </div>
                <ModalForm isOpen={isModalOpen} onClose={closeModal} />
                <div className="right_head">
                  <ul className="menu">
                    <li>
                      <Link href="">Accueil</Link>
                    </li>
                  </ul>
                  <div className="dropdown">
                    <div className="select" onClick={() => setIsOpen(!isOpen)}>
                      <span>Trier par catégorie</span>
                      <div
                        className={`caret ${isOpen ? "caret_rotate" : ""}`}
                      ></div>
                    </div>
                    {isOpen && (
                      <ul className={`select_ul ${isOpen ? "display" : ""}`}>
                        <li>poterie</li>
                        <li>Vanenie</li>
                        <li>Sculpture de bois</li>
                        <li>Tissage</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="aticle_section">
                  <div className="article_list">
                    {products.map((product) => (
                      <div className="art_item" key={product.id}>
                        <Image
                          src={product.image}
                          alt={product.objet}
                          className="image"
                          width={200}
                          height={200}
                          unoptimized={true}
                        />
                        <span>{product.title}</span>
                        <h4>{product.objet}</h4>
                        <div className="star">
                          <Image
                            src={StarT}
                            alt="étoile"
                            width={15}
                            height={15}
                          />
                          <Image
                            src={StarT}
                            alt="étoile"
                            width={15}
                            height={15}
                          />
                          <Image
                            src={StarT}
                            alt="étoile"
                            width={15}
                            height={15}
                          />
                          <Image
                            src={StarT}
                            alt="étoile"
                            width={15}
                            height={15}
                          />
                        </div>
                        <h4>CFA {product.price.toLocaleString()}</h4>
                        <Link href="">
                          <button className="addBtn">Ajouter au panier</button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`sidB ${sideOpen ? "openSideb" : ""}`}>
        <div className="sidB_content ">
          <div className="close_sidB">
            <button className="close_side" onClick={() => setSideOpen(false)}>
              X Fermer
            </button>
          </div>
          <div className="left_item">
            <div className="left_content">
              <h2>Trier par prix</h2>
              <div className="custom-border-terra"></div>
              <input
                id="priceRange"
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <p className="price">
                Prix: FCFA 13000 - <span>FCFA {price}</span>
              </p>
            </div>
          </div>
          <div className="left_item">
            <div className="left_content">
              <h2>Articles</h2>
              <div className="custom-border-terra"></div>
              <div className="artile_listp">
                <div className="article_itemp">
                  <div className="img">
                    <Image src={Article1} alt="" />
                  </div>
                  <div className="article_info">
                    <h4>Jarre d&eau</h4>
                    <span>CFA 3000</span>
                  </div>
                </div>
                <div className="article_itemp">
                  <div className="img">
                    <Image src={Article1} alt="" />
                  </div>
                  <div className="article_info">
                    <h4>Foyez</h4>
                    <span>CFA 2500</span>
                  </div>
                </div>
                <div className="article_itemp">
                  <div className="img">
                    <Image src={Article1} alt="" />
                  </div>
                  <div className="article_info">
                    <h4>Marmite</h4>
                    <span>CFA 2000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;