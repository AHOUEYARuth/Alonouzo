import React from 'react';
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
import Link from 'next/link';
import Image from 'next/image';
import Course1 from "@/assets/img/portfolio/poterie1.jpg";
import Course2 from "@/assets/img/portfolio/vannerie2.jpg";
import Course3 from "@/assets/img/portfolio/12.jpg";
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
            <h1 className="hero_title">Nos Formations</h1>
          </div>
        </div>

        <section id="courses" className="courses section">
          <div className="container section-title" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="section-tittle text-center">
                  <div>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "grey",
                        fontWeight: "100",
                      }}
                    >
                      Découvrez nos formations pratiques axées sur les
                      savoir-faire artisanaux ancestraux. Apprenez un métier de
                      vos mains et développez des compétences durables et
                      valorisantes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" style={{ rowGap: "40px" }}>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="course-item">
                  <Image src={Course1} className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Poterie</p>
                      <p className="price">169 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href=""> L&apos;Art de la Poterie</Link>
                    </h3>
                    <p className="description">
                      Façonnez la terre, exprimez votre créativité. Apprenez les
                      techniques essentielles pour créer des pièces uniques et
                      décoratives en céramique
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer1} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          James Gomez
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <div className="boutique">
                          <button className="bout">S&apos;inscrire</button>
                        </div>
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
                      <p className="category">Vannerie</p>
                      <p className="price">250 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">Tressage Créatif</Link>
                    </h3>
                    <p className="description">
                      Découvrez l&apos;art de tresser des fibres naturelles pour
                      réaliser des objets pratiques et esthétiques : paniers,
                      décorations, et plus encore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer2} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Lana
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <div className="boutique">
                          <button className="bout">S&apos;inscrire</button>
                        </div>
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
                      <p className="category">Sculptre de bois</p>
                      <p className="price">180 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">L&apos;Éveil du Bois</Link>
                    </h3>
                    <p className="description">
                      Donnez vie au bois ! Apprenez les techniques de base pour
                      sculpter des formes, des motifs et des objets décoratifs
                      uniques.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer3} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Brandon
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <div className="boutique">
                          <button className="bout">S&apos;inscrire</button>
                        </div>
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
                      <p className="category">Tissage</p>
                      <p className="price">250 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">L&apos;Élégance du Kanvo</Link>
                    </h3>
                    <p className="description">
                      Découvrez l&apos;art ancestral du tissage Kanvo. Apprenez
                      les techniques traditionnelles pour créer des étoffes
                      uniques, riches en motifs et en histoire locale.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer2} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Lana
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <div className="boutique">
                          <button className="bout">S&apos;inscrire</button>
                        </div>
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
                      <p className="category">Forgerie</p>
                      <p className="price">180 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">L&apos;art du fer</Link>
                    </h3>
                    <p className="description">
                      Domptez le métal ! Initiez-vous aux techniques de la forge
                      pour transformer le fer en objets utiles et artistiques,
                      du simple outil à la pièce ornementale.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer3} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Brandon
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <div className="boutique">
                          <button className="bout">S&apos;inscrire</button>
                        </div>
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
                      <p className="category">Sérigraphie artisanal</p>
                      <p className="price">169 000 Fcfa</p>
                    </div>

                    <h3>
                      <Link href="">
                        L&apos;Art de l&apos;Impression Manuelle
                      </Link>
                    </h3>
                    <p className="description">
                      Créez des motifs uniques sur divers supports ! Apprenez
                      les techniques artisanales de la sérigraphie, de la
                      préparation du pochoir à l&apos;impression finale.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <Image src={Trainer1} className="img-fluid" alt="" />
                        <Link href="" className="trainer-link">
                          Antonio
                        </Link>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <div className="boutique">
                          <button className="bout">S&apos;inscrire</button>
                        </div>
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