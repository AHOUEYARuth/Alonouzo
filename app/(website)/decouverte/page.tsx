"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
import Poterie1 from "@/assets/img/portfolio/poterie2.jpg";
import Sculputre from "@/assets/img/portfolio/12.jpg";
import Carousel1 from "@/assets/img/portfolio/kanvo1.jpg";
import Carousel3 from "@/assets/img/portfolio/vannerie1.jpg";
import Loading from "@/components/Loader";
const Decourverte = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
    return (
      <>
        <div
          className="hero_section"
          style={{ backgroundImage: `url(${Carousel2.src})` }}
        >
          <div className="overlay"></div>

          <div className="hero_content">
            <h1 className="hero_title" style={{ textAlign: "center" }}>
              Découverte des savoirs faire <br />
              artisanaux ancestraux du Bénin
            </h1>
          </div>
        </div>
        <div className="search mt-5">
          <div className="container">
            <div className="sea_cont">
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  width: "30%",
                }}
              >
                <div className="newsletter-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="Tapez votre recherche"
                    style={{ padding: "10px", width: "70%", outline: "none" }}
                  />
                  <input type="submit" value="Rechercher" style={{backgroundColor: "#693F18", height: "44px", margin: "0", width: "30%", color:"#fff"}} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="decouverte py-5">
          <div className="container ">
            <div className="deco_content flex items-center flex-col justify-center">
              {/* <div className="deco_title section-title">
                <h2>Découverte</h2>
                <div>
                  <span>Découverte des</span>{" "}
                  <span className="description-title">
                    Savoir-faire artisanaux ancestraux
                  </span>
                </div>
              </div> */}
              <div className="deco_description">
                <div className="articles w-full">
                  <div className="article_list w-full">
                    <div className="article_item">
                      <div className="article_img">
                        <Image src={Poterie1} alt="" />
                      </div>
                      <div className="article_text">
                        <h4>La Poterie</h4>
                        <p>
                          La poterie est façonnée depuis des siècles au sud du
                          Bénin. Les potières actuelles portent l&apos;héritage
                          d&apos;un long passé transmis de mère en fille, cette
                          transmission se fait mécaniquement de nos jours. Les
                          poteries sont surtout à usage quotidien comme les
                          fourneaux, les jarres à eau, les récipients divers
                          employés pour la préparation des aliments. Quelques
                          centres sont spécialisés dans la préparation de
                          poteries cultuelies entrant dans les nombreux rites
                          animistes.
                        </p>
                        <div className="article_link">
                          <Link href="/articleDetail">Lire plus &gt;&gt;</Link>
                        </div>
                      </div>
                    </div>
                    <div className="article_item small">
                      <div className="article_img">
                        <Image src={Carousel3} alt="" />
                      </div>
                      <div className="article_text">
                        <h4>La Vannerie</h4>
                        <p>
                          La vannerie est l’art de tisser des fibres végétales
                          pour créer des objets décoratifs ou utilitaires. C’est
                          une pratique ancestrale qui existe depuis des siècles
                          dans de nombreuses cultures à travers le monde, en
                          particulier au Bénin, et est pratiquée par des hommes
                          et des femmes dans la commune des Aguégués, dans
                          certaines zones reculées de la ville de Calavi et
                          Cotonou, dans le zou, dans le nord. En effet, la
                          vannerie est un savoir-faire traditionnel aux
                          multiples applications. Des mains habiles des artisans
                          vanniers naissent des créations d’une beauté
                          époustouflante et d’une utilité indéniable.Sacs,
                          couchettes, récipients de marcher ou étalage, paniers,
                          chapeaux, couchettes, meubles, transat, objets de
                          décoration, etc...
                        </p>
                        <div className="article_link">
                          <Link href="">Lire plus &gt;&gt;</Link>
                        </div>
                      </div>
                    </div>
                    <div className="article_item small">
                      <div className="article_img">
                        <Image src={Sculputre} alt="" />
                      </div>
                      <div className="article_text">
                        <h4>SCULPTURE DE BOIS</h4>
                        <p>
                          La sculpture sur bois est une pratique artistique
                          ancestrale profondément ancrée dans les croyances
                          spirituelles, sociales et politiques des communautés
                          béninoises. Elle est surtout présente dans les régions
                          de l’Atakora, le Zou, l’Alibori et à Abomey, le cœur
                          historique du royaume du Danxomè. La sculpture sur
                          bois était utilisée pour fabriquer des objets
                          religieux (masques, fétiches, statues de divinités),
                          des symboles de pouvoir royal (bâtons de commandement,
                          trônes) et des objets de la vie quotidienne (couteaux,
                          instruments de musique). Elle a traversé les âges,
                          évoluant au fil des siècles, mais elle conserve une
                          forte dimension rituelle et symbolique. Aujourd’hui,
                          elle est aussi un moyen d’expression artistique
                          contemporain.Chaque sculpture a une signification
                          profonde et une fonction précise, .
                        </p>
                        <div className="article_link">
                          <Link href="">Lire plus &gt;&gt;</Link>
                        </div>
                      </div>
                    </div>
                    <div className="article_item">
                      <div className="article_img">
                        <Image src={Carousel1} alt="" />
                      </div>
                      <div className="article_text">
                        <h4>TISSAGE TRADITIONNEL DU TISSU KANVÔ</h4>
                        <p>
                          Le kanvô est un tissu ancestral originaire du royaume
                          du Danxomè, aujourd’hui le Bénin. Traditionnellement
                          réservé aux rois, reines, et personnalités
                          importantes, il représente non seulement une forme de
                          richesse mais aussi un symbole de pouvoir et
                          d’identité culturelle. Ce tissu a longtemps servi lors
                          des cérémonies royales, des événements sacrés, des
                          rituels religieux, et des célébrations importantes. La
                          production de kanvô est une activité de groupe dans
                          laquelle les femmes filent, teignent et tissent le
                          coton, tandis que les hommes sont généralement
                          responsables de la gestion des métiers à tisser. Le
                          tissu kanvô est aujourd’hui toujours un atout culturel
                          majeur, bien qu’il ait évolué et soit maintenan
                        </p>
                        <div className="article_link">
                          <Link href="">Lire plus &gt;&gt;</Link>
                        </div>
                      </div>
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

export default Decourverte;