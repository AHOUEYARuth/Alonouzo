import React from "react";
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
import Link from "next/link";
import Carousel4 from "@/assets/img/Banner/Banneeeeeer 2.png";
import Carousel3 from "@/assets/img/Banner/Banneeeeeer 3.jpg";
import Image from "next/image";
import Gallery1 from "@/assets/img/portfolio/1.jpg";
import Gallery2 from "@/assets/img/portfolio/2.jpg";
import Gallery3 from "@/assets/img/portfolio/3.jpg";
import Gallery4 from "@/assets/img/portfolio/4.jpg";
import Gallery5 from "@/assets/img/portfolio/5.jpg";
import Gallery6 from "@/assets/img/portfolio/6.jpg";
import Gallery7 from "@/assets/img/portfolio/7.jpg";
import Gallery8 from "@/assets/img/portfolio/8.jpg";
import Gallery9 from "@/assets/img/portfolio/1.jpg";
import Gallery10 from "@/assets/img/portfolio/11.jpg";
import Gallery11 from "@/assets/img/portfolio/12.jpg";
const About = () => {
  return (
    <>
      <div
        className="hero_section"
        style={{ backgroundImage: `url(${Carousel2.src})` }}
      >
        <div className="overlay"></div>

        <div className="hero_content">
          <h1 className="hero_title">L&apos;artisanat ancestral béninois</h1>
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
                <h1 className="mb-4">L&apos;artisanat</h1>
                <p style={{ textAlign: "justify", paddingRight: "20px" }}>
                  L’artisanat traditionnel du Bénin constitue un pilier
                  essentiel de notre patrimoine culturel immatériel. Il regroupe
                  un ensemble de savoir-faire transmis de génération en
                  génération, dont la vannerie, la poterie, la sculpture sur
                  bois, le tissage du tissu kanvô et bien d’autres formes
                  d&apos;expression artisanale. Chaque région du pays se
                  distingue par des techniques et des créations uniques,
                  empreintes d’histoire, de symbolisme et de créativité. Par
                  exemple, à Sè, la poterie est un art transmis par les femmes,
                  donnant naissance à des pièces en argile d’une grande finesse.
                  À Abomey, les motifs des tissages racontent l’histoire des
                  rois et des coutumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light overflow-hidden my-30 px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <h1 className="mb-4">Importance, Utilités et Valeurs</h1>
                <p style={{ textAlign: "justify", paddingRight: "20px" }}>
                  L’artisanat béninois joue un rôle clé dans le développement
                  économique, social et culturel du pays. Il fournit des objets
                  du quotidien (ustensiles, mobiliers, vêtements), des pièces
                  artistiques (sculptures, tableaux, masques), des articles
                  décoratifs et des objets cultuels utilisés dans les cérémonies
                  traditionnelles. Il contribue activement à l’économie locale
                  en générant des revenus pour de nombreuses familles, en
                  particulier dans les zones rurales, et en favorisant
                  l&apos;autonomisation des femmes et des jeunes. En plus d’être
                  une source d’emploi importante, l’artisanat est un véritable
                  levier de valorisation de notre identité culturelle. Il
                  transmet des valeurs fortes : la préservation du savoir, le
                  respect des traditions, l’innovation à partir de l’héritage,
                  et la durabilité. Il attire aussi les touristes, renforce
                  l’image du Bénin à l’international et s’inscrit comme un
                  pilier du développement durable, inclusif et communautaire.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <Image
                  className="position-absolute img-fluid w-100 h-100"
                  src={Carousel3}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
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
                  <Image src={Gallery3} className="img-fluid" alt="" />
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
                  <Image src={Gallery6} className="img-fluid" alt="" />
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
                  <Image src={Gallery8} className="img-fluid" alt="" />
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
                  <Image src={Gallery9} className="img-fluid" alt="" />
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
                  <Image src={Gallery9} className="img-fluid" alt="" />
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
                  <Image src={Gallery11} className="img-fluid" alt="" />
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
    </>
  );
};

export default About;
