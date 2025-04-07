import React from 'react';
import Carousel2 from "@/assets/img/carousel-2.jpg";
import Link from 'next/link';
import Image from 'next/image';
import Course1 from "@/assets/img/carousel-1.jpg";
import Course2 from "@/assets/img/carousel-2.jpg";
import Course3 from "@/assets/img/carousel-3.jpg";
import Trainer1 from "@/assets/img//trainer-1.jpg";
import Trainer2 from "@/assets/img/trainer-1.jpg";
import Trainer3 from "@/assets/img/trainer-1.jpg";


const Training = () => {
    return (
      <>
        <div
          className="hero_section"
          style={{ backgroundImage: `url(${Carousel2.src})` }}
        >
          <div className="hero_content">
            <h1 className="hero_title">Training</h1>
            <p className="hero_subtitle">Learn more about our company</p>
          </div>
        </div>

        <section id="courses" className="courses section">
          <div className="container section-title" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="section-tittle text-center">
                  <h2>Nos Formations</h2>
                  <div>
                    <p>
                      Découvrez nos formations alliant savoir-faire traditionnel
                      et techniques modernes pour faire de vous un expert en
                      couture et broderie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" style={{rowGap: "40px"}}>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="course-item">
                  <Image src={Course1} className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Stylisme</p>
                      <p className="price">169 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">Le dessin de mode</Link>
                    </h3>
                    <p className="description">
                      Apprenez les techniques de coupe, d’assemblage et de
                      finition pour concevoir des vêtements d’exception.
                      Maîtrisez la couture sur mesure et le prêt-à-porter avec
                      un souci du détail et de la perfection. Cette formation
                      vous prépare à créer des pièces uniques alliant tradition
                      et modernité.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer1} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Antonio
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;50
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;65
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="course-item">
                  <Image src={Course2} className="img-fluid" alt="" />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Broderie Industrielle</p>
                      <p className="price">250 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">L&apos;art de la broderie</Link>
                    </h3>
                    <p className="description">
                      Découvrez l’art de la broderie, du travail manuel aux
                      techniques industrielles avancées. Apprenez à
                      personnaliser des textiles avec des motifs uniques et
                      raffinés. Maîtrisez l’utilisation des machines et
                      logiciels de broderie pour une précision et une qualité
                      optimales.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer2} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Lana
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;35
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;42
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="course-item">
                  <Image src={Course3} className="img-fluid" alt="" />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Broderie Artisanale</p>
                      <p className="price">180 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">L&apos;art de la broderie</Link>
                    </h3>
                    <p className="description">
                      Découvrez l’art de la broderie, du travail manuel aux
                      techniques industrielles avancées. Apprenez à
                      personnaliser des textiles avec des motifs uniques et
                      raffinés. Maîtrisez l’utilisation des machines et
                      logiciels de broderie pour une précision et une qualité
                      optimales.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer3} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Brandon
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;20
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;85
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="course-item">
                  <Image src={Course2} className="img-fluid" alt="" />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Broderie Industrielle</p>
                      <p className="price">250 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">L&apos;art de la broderie</Link>
                    </h3>
                    <p className="description">
                      Découvrez l’art de la broderie, du travail manuel aux
                      techniques industrielles avancées. Apprenez à
                      personnaliser des textiles avec des motifs uniques et
                      raffinés. Maîtrisez l’utilisation des machines et
                      logiciels de broderie pour une précision et une qualité
                      optimales.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer2} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Lana
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;35
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;42
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="course-item">
                  <Image src={Course3} className="img-fluid" alt="" />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Broderie Artisanale</p>
                      <p className="price">180 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">L&apos;art de la broderie</Link>
                    </h3>
                    <p className="description">
                      Découvrez l’art de la broderie, du travail manuel aux
                      techniques industrielles avancées. Apprenez à
                      personnaliser des textiles avec des motifs uniques et
                      raffinés. Maîtrisez l’utilisation des machines et
                      logiciels de broderie pour une précision et une qualité
                      optimales.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer3} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Brandon
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;20
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;85
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="course-item">
                  <Image src={Course1} className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Stylisme</p>
                      <p className="price">169 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">Le dessin de mode</Link>
                    </h3>
                    <p className="description">
                      Apprenez les techniques de coupe, d’assemblage et de
                      finition pour concevoir des vêtements d’exception.
                      Maîtrisez la couture sur mesure et le prêt-à-porter avec
                      un souci du détail et de la perfection. Cette formation
                      vous prépare à créer des pièces uniques alliant tradition
                      et modernité.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer1} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Antonio
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;50
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;65
                      </div>
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

export default Training;