"use client";
import React, { useEffect, useState } from "react";
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
import Carousel4 from "@/assets/img/portfolio/1.jpg";
import Loading from "@/components/Loader";
/* import Link from 'next/link';
 */ import Image from "next/image";
const Details = () => {
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
          <h1 className="hero_title">La Poterie béninoise</h1>
        </div>
      </div>

      <div className="container-fluid bg-light overflow-hidden my-30 px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <Image
                  className="position-absolute img-fluid w-100 h-100"
                  src={Carousel4}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <h1 className="mb-4">Historique de la Poterie</h1>
                <p style={{ textAlign: "justify", paddingRight: "20px" }}>
                  La poterie est façonnée depuis des siècles au sud du Bénin.
                  Les potières actuelles portent l&apos;héritage d&apos;un long
                  passé transmis de mère en fille, cette transmission se fait
                  mécaniquement de nos jours. Les poteries sont surtout à usage
                  quotidien comme les fourneaux, les jarres à eau, les
                  récipients divers employés pour la préparation des aliments.
                  Quelques centres sont spécialisés dans la préparation de
                  poteries cultuelies entrant dans les nombreux rites animistes.
                  La préparation de l&apos;argile, le façonnage des pots est
                  réservé aux femmes qui montent les poteries, les font sécher,
                  les ornent, les cuisent, usant d&apos;une grande adresse et
                  d&apos;instruments peu élaborés produits par le village. La
                  poterie est étroitement liée de nos jours à la vie rurale et
                  d&apos;autre part au passé car l&apos;observation des tessons
                  restés sur les sites anciens nous fait voir des différences de
                  qualité, de forme et nous révèle une évolution des populations
                  ayant vécu dans cette région. Au Bénin certaines régions en
                  façonnent plus que d&apos;autres car plus riches en argile et
                  en populations. L&apos;activité se concentre en quelques
                  centres principaux au Bénin: Sè (dans le département du Mono),
                  Ouassa-Péhunco (dans le département de l’Atacora, Nord-Ouest),
                  Cobly, Boukoumbé, Natitingou (Nord-Ouest), Dassa-Zoumè (Centre
                  du Bénin) et Région d’Abomey (Sud-Centre).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="my-5">
            <h1 className="mb-4">Importance et utilités</h1>
            <p style={{ textAlign: "justify", paddingRight: "20px" }}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li style={{ listStyle: "inside" }}>
                  <strong>Préservation du patrimoine culturel</strong> : La
                  poterie est un art ancestral transmis de génération en
                  génération. Elle raconte l’histoire, les traditions et
                  l’identité d’un peuple à travers ses formes, motifs et
                  techniques.
                </li>
                <li style={{ listStyle: "inside" }}>
                  <strong>Utilité domestique et décorative</strong> : Les objets
                  en poterie (vases, plats, jarres, etc.) sont utilisés dans la
                  vie quotidienne pour stocker, cuisiner ou décorer. Ils sont
                  durables, naturels et souvent esthétiques
                </li>
                <li style={{ listStyle: "inside" }}>
                  <strong>Création d’emplois et autonomie économique</strong>{" "}
                  :La poterie artisanale permet à de nombreux artisans de vivre
                  de leur savoir-faire, de créer des entreprises locales et de
                  participer au développement économique.
                </li>
                <li style={{ listStyle: "inside" }}>
                  <strong>Respect de l’environnement</strong> : Fabriquée à
                  partir de matériaux naturels comme l’argile, la poterie est
                  écologique et biodégradable, contrairement aux produits en
                  plastique.
                </li>
              </ul>
            </p>
          </div>
          <div className="my-4">
            <h1 className="mb-4">Techniques et étape de façonnage</h1>
            <p style={{ textAlign: "justify", paddingRight: "20px" }}>
              La technique ancestrale de la poterie au Bénin : le façonnage au
              colombin La poterie traditionnelle béninoise est un savoir-faire
              ancestral transmis de génération en génération, notamment par les
              femmes. Parmi les techniques les plus anciennes et les plus
              répandues, celle du façonnage au colombin occupe une place
              centrale dans plusieurs régions du pays, notamment à Sè,
              Ouassa-Péhunco, Cobly ou encore Dassa-Zoumè. Cette méthode
              consiste à construire la poterie sans l’usage de tour, uniquement
              à la main, à partir de boudins d’argile appelés
              &apos;colombins&apos;. La potière commence par former une base
              plate et solide, puis superpose les colombins en spirale pour
              monter les parois de l’objet. À chaque niveau, elle les soude
              soigneusement et lisse les surfaces à l’aide d’outils simples
              comme une pierre plate, un tesson de calebasse ou un coquillage.
              Une fois la forme voulue obtenue, la pièce est laissée à sécher à
              l’air libre, d’abord à l’ombre puis au soleil, afin d’éviter les
              fissures. Elle est ensuite cuite à feu ouvert, à l’aide de bois,
              de feuilles ou de crottin, dans un foyer traditionnel. Ce type de
              cuisson confère à la poterie sa solidité et, parfois, une teinte
              particulière selon le type de feu et les matériaux utilisés.
              Au-delà de sa fonction utilitaire (cuisson, conservation de l’eau,
              stockage), cette technique possède une dimension symbolique et
              culturelle forte. Dans certaines communautés, la fabrication de
              poterie est liée à des rituels, à des chants ou à des pratiques
              spirituelles, soulignant son ancrage profond dans les traditions
              béninoises. Cette technique du façonnage au colombin, toujours
              pratiquée aujourd’hui, est un patrimoine vivant qui témoigne de la
              richesse de l’artisanat et de l’identité culturelle du Bénin.
            </p>
          </div>

          <div className="mt-4 mb-5">
            <h1 className="mb-4">Les matériaux utilisés</h1>
            <p style={{ textAlign: "justify", paddingRight: "20px" }}>
              La poterie traditionnelle au Bénin repose sur l’utilisation de
              matériaux naturels et locaux, accessibles dans l’environnement
              immédiat des potières. Le principal matériau est l’argile,
              extraite dans les zones riches en terre glaise, souvent à
              proximité des rivières, des marécages ou des collines. Cette
              argile est soigneusement sélectionnée, puis nettoyée pour en
              retirer les impuretés comme les cailloux, racines ou débris
              végétaux. Pour améliorer la texture et la résistance de l’argile,
              les artisanes y ajoutent souvent des matériaux organiques broyés
              comme de la paille, des fibres végétales, ou encore des débris de
              poteries cassées (appelés &apos;grog&apos;). Ces mélanges
              permettent d’éviter les fissures lors du séchage et de la cuisson.
              En ce qui concerne la décoration et le lissage, les potières
              utilisent des outils simples comme des coquillages, pierres
              lisses, morceaux de calebasse ou bois sculptés, qui permettent de
              tracer des motifs ou de polir la surface. Enfin, pour la cuisson,
              les matériaux combustibles tels que le bois, les feuilles sèches,
              la paille, les coques de palmier ou le crottin de vache sont
              utilisés pour alimenter un feu ouvert. Ces éléments, choisis avec
              soin, influencent la couleur finale de la poterie et sa
              durabilité. L&apos;utilisation de ces matériaux naturels témoigne
              du lien étroit entre l&apos;artisanat potier et
              l&apos;environnement, ainsi que du savoir-faire ancestral des
              communautés béninoises.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
