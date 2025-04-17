"use client";
import React/* , {useEffect, useState}  */from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel1 from "@/assets/img/portfolio/bis.jpg";
import Carousel3 from "@/assets/img/portfolio/vannerie2.jpg";
import Link from "next/link";
import Gallery1 from "@/assets/img/portfolio/1.jpg";
import Gallery2 from "@/assets/img/portfolio/scul11.jpg";
import Gallery3 from "@/assets/img/portfolio/vannerie9.jpg";
import Gallery4 from "@/assets/img/portfolio/4.jpg";
import Gallery5 from "@/assets/img/portfolio/scul4.jpg";
import Gallery6 from "@/assets/img/portfolio/scul7.jpg";
import Gallery7 from "@/assets/img/portfolio/scul5.jpg";
import Gallery8 from "@/assets/img/portfolio/8.jpg";
import Gallery9 from "@/assets/img/portfolio/vannerie7.jpg";
import Gallery10 from "@/assets/img/portfolio/vannerie5.jpg";
import Gallery11 from "@/assets/img/portfolio/scul6.jpg";
import Gallery12 from "@/assets/img/portfolio/vannerie8.jpg";
import Banner1 from "@/assets/img/Banner/Banneeeeer.png"
import Banner2 from "@/assets/img/Banner/Banneeeeeer 3.jpg";
import Banner3 from "@/assets/img/Banner/Banneeeeeer21.png";
import Banner4 from "@/assets/img/Banner/Banneeeeeer 4.jpg";
import About from "@/assets/img/Banner/Banneeeeeer 3.jpg";
import Poterie1 from "@/assets/img/portfolio/poterie1.jpg"
import Sculputre from "@/assets/img/portfolio/tron.jpg"
/* import Loading from "@/components/Loader"
 */export default function Home() {
  /* const [loading, setLoading] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); 

  return () => clearTimeout(timer);
}, []); 

  if (loading) {
  return <Loading />;
} */
  return (
    <>
      <Header />
      <main>
        <div className="slider">
          <div className="list">
            <div className="item">
              <Image src={Banner1} alt="" />

              <div className="slider_content">
                <div className="title">
                  L’Artisanat au cœur de la culture béninoise
                </div>
                {/*  <div className="type">Artisanat ancestral</div> */}
                <div className="description">
                  L’artisanat incarne l’âme de nos traditions et reflète
                  l’identité de tout un peuple. Entre savoir-faire ancestral et
                  créativité contemporaine, il transmet des valeurs, des gestes
                  et une histoire que chaque génération se doit de préserver et
                  de faire rayonner.
                </div>
              </div>
            </div>

            <div className="item">
              <Image src={Banner2} alt="" />

              <div className="slider_content">
                <div className="title">À la découverte des savoir-faire</div>
                {/* <div className="type">Artisanaux ancestraux</div> */}
                <div className="description">
                  Explorez la richesse artisanale de nos régions à travers des
                  créations uniques. Chaque objet dévoile une histoire, un
                  geste, une tradition qui se transmet de génération en
                  génération.
                </div>
              </div>
            </div>

            <div className="item">
              <Image src={Banner3} alt="" />

              <div className="slider_content">
                <div className="title">
                  Apprendre auprès des maîtres artisans
                </div>
                {/* <div className="type">Experts Atisanaux</div> */}
                <div className="description">
                  Plongez au cœur de l’artisanat grâce à des formations
                  pratiques dispensées par des experts. Préservez le patrimoine
                  tout en développant des compétences concrètes et valorisantes
                </div>
              </div>
            </div>

            <div className="item">
              <Image src={Banner4} alt="" />

              <div className="slider_content">
                <div className="title">Une vitrine pour les talents locaux</div>
                {/* <div className="type">Talents artitisques </div> */}
                <div className="description">
                  Découvrez des pièces artisanales authentiques à portée de
                  clic. En achetant local, vous soutenez directement les
                  artisans et participez à la valorisation de leur savoir-faire.
                </div>
              </div>
            </div>
          </div>

          <div className="images">
            <div className="item">
              <Image src={Banner1} alt="" />
            </div>
            <div className="item">
              <Image src={Banner2} alt="" />
            </div>
            <div className="item">
              <Image src={Banner3} alt="" />
            </div>
            <div className="item">
              <Image src={Banner4} alt="" />
            </div>
          </div>

          <div className="nextPrevArrows">
            <button className="prev">&lt;</button>
            <button className="next"> &gt; </button>
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
                    src={About}
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
                  <h1 className="mb-4">L&apos;artisanat au Bénin</h1>
                  <p style={{ textAlign: "justify", paddingRight: "20px" }} className="par">
                    L’artisanat traditionnel du Bénin constitue un pilier
                    essentiel de notre patrimoine culturel immatériel. Il
                    regroupe un ensemble de savoir-faire transmis de génération
                    en génération, dont la vannerie, la poterie, la sculpture
                    sur bois, le tissage du tissu kanvô et bien d’autres formes
                    d&apos;expression artisanale. Chaque région du pays se
                    distingue par des techniques et des créations uniques,
                    empreintes d’histoire, de symbolisme et de créativité. Par
                    exemple, à Sè, la poterie est un art transmis par les
                    femmes, donnant naissance à des pièces en argile d’une
                    grande finesse. À Abomey, les motifs des tissages racontent
                    l’histoire des rois et des coutumes
                  </p>
                  <Link href="/about" style={{ color: "#693F18" }}>
                    Lire plus &gt;&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="decouverte py-5">
          <div className="container ">
            <div className="deco_content flex items-center flex-col justify-center">
              <div className="deco_title section-title">
                <h2>Découverte</h2>
                <div>
                  <span>Découverte des</span>{" "}
                  <span className="description-title">
                    Savoir-faire artisanaux ancestraux
                  </span>
                </div>
              </div>
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

        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Galerie</h2>
            <div>
              <span className="description-title">Galerie</span>{" "}
              <span> de Conception</span>
            </div>
          </div>

          <div className="container-fluid py-5">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <div
                className="row g-0 isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery1} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="@/assets/img/portfolio/app-1.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery2} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/product-1.jpg"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery6} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/branding-1.jpg"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery4} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/books-1.jpg"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery5} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/app-2.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery3} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/product-2.jpg"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery7} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/branding-2.jpg"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery9} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/books-2.jpg"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery12} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/app-3.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery8} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/product-3.jpg"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery10} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/branding-3.jpg"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <Image
                      src={Gallery11}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <Link
                        href="assets/img/portfolio/books-3.jpg"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact section py-30">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <div>
              <span>Besoin d&apos;aide?</span>{" "}
              <span className="description-title">Contactez nous</span>
            </div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="200"
                    >
                      <i className="bi bi-geo-alt"></i>
                      <h3>Adresse</h3>
                      <p>Atlantique</p>
                      <p>Cotonou, NY 535022</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <i className="bi bi-telephone"></i>
                      <h3>Téléphone</h3>
                      <p>+229 01578845</p>
                      <p>+229 01948845</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="400"
                    >
                      <i className="bi bi-envelope"></i>
                      <h3>Email</h3>
                      <p>inovision@gmail.com</p>
                      <p>contact@ino.com</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="500"
                    >
                      <i className="bi bi-clock"></i>
                      <h3>Ouvert</h3>
                      <p>Lundi - Samedi</p>
                      <p>08h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Nom"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Objet"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      {/* <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div> */}

                      <button type="submit">Envoyez</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
