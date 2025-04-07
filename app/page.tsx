import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel1 from "@/assets/img/carousel-1.jpg";
import Carousel2 from "@/assets/img/carousel-2.jpg";
import Carousel3 from "@/assets/img/carousel-3.jpg";
import Carousel4 from "@/assets/img/carousel-4.jpg";
import Link from "next/link";
import Gallery1 from "@/assets/img/portfolio/app-1.jpg";
import Gallery2 from "@/assets/img/portfolio/pro1.jpg";
import Gallery3 from "@/assets/img/portfolio/branding-1.jpg";
import Gallery4 from "@/assets/img/portfolio/books-1.jpg";
import Gallery5 from "@/assets/img/portfolio/app-2.jpg";
import Gallery6 from "@/assets/img/portfolio/product-2.jpg";
import Gallery7 from "@/assets/img/portfolio/branding-2.jpg";
import Gallery8 from "@/assets/img/portfolio/books-2.jpg";
import Gallery9 from "@/assets/img/portfolio/app-3.jpg";
import Gallery10 from "@/assets/img/portfolio/product-3.jpg";
import Gallery11 from "@/assets/img/portfolio/branding-3.jpg";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="slider">
          <div className="list">
            <div className="item">
              <Image src={Carousel1} alt="" />

              <div className="slider_content">
                <div className="title">MAGIC SLIDER</div>
                <div className="type">FLOWER</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti temporibus quis eum consequuntur voluptate quae
                  doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sequi, aut.
                </div>
              </div>
            </div>

            <div className="item">
              <Image src={Carousel2} alt="" />

              <div className="slider_content">
                <div className="title">MAGIC SLIDER</div>
                <div className="type">NATURE</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti temporibus quis eum consequuntur voluptate quae
                  doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sequi, aut.
                </div>
              </div>
            </div>

            <div className="item">
              <Image src={Carousel3} alt="" />

              <div className="slider_content">
                <div className="title">MAGIC SLIDER</div>
                <div className="type">PLANT</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti temporibus quis eum consequuntur voluptate quae
                  doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sequi, aut.
                </div>
              </div>
            </div>

            <div className="item">
              <Image src={Carousel4} alt="" />

              <div className="slider_content">
                <div className="title">MAGIC SLIDER</div>
                <div className="type">NATURE</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti temporibus quis eum consequuntur voluptate quae
                  doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sequi, aut.
                </div>
              </div>
            </div>
          </div>

          <div className="images">
            <div className="item">
              <Image src={Carousel1} alt="" />
            </div>
            <div className="item">
              <Image src={Carousel2} alt="" />
            </div>
            <div className="item">
              <Image src={Carousel3} alt="" />
            </div>
            <div className="item">
              <Image src={Carousel4} alt="" />
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
                    src={Carousel3}
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
                  <h6 className="text-primary">About Us</h6>
                  <h1 className="mb-4">L&apos;artisanat</h1>
                  <p style={{ textAlign: "justify", paddingRight: "20px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam illum odit reprehenderit culpa ut saepe quis sint vero
                    tempora labore assumenda optio eos architecto, nemo delectus
                    nam voluptatem hic beatae commodi. Eaque optio facere error
                    perferendis, reiciendis illum nam aut tempora quaerat magnam
                    vitae aliquid perspiciatis fugiat qui dolorum quibusdam
                    eveniet id. Itaque minus error sed quasi ullam ut vitae
                    ipsum, ipsam aperiam, delectus culpa accusamus ad eaque
                    asperiores esse autem, illo unde obcaecati quod praesentium.
                    Vitae voluptate natus excepturi inventore aliquid delectus
                    possimus reprehenderit velit! Quidem voluptatum id commodi
                    molestias placeat impedit sapiente quibusdam tempore tenetur
                    eos deleniti, repellendus minima recusandae odio, delectus
                    magni incidunt nemo magnam! Dignissimos sint eligendi nisi
                    enim.
                  </p>
                  <Link href="/about" style={{ color: "blue" }}>
                    Lire plus &gt;&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="decouverte py-5">
          <div className="container">
            <div className="deco_content flex items-center flex-col justify-center">
              <div className="deco_title">
                <h1>Découverte</h1>
              </div>
              <div className="deco_description">
                <p style={{ textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Deleniti temporibus quis eum consequuntur voluptate quae
                </p>

                <div className="articles w-full">
                  <div className="article_list w-full">
                    <div className="article_item">
                      <div className="article_img">
                        <Image src={Carousel1} alt="" />
                      </div>
                      <div className="article_text">
                        <h4>Article 1</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deleniti temporibus quis eum consequuntur
                          voluptate quae doloribus distinctio.
                        </p>
                        <div className="article_link">
                          <Link href="">Lire plus &gt;&gt;</Link>
                        </div>
                      </div>
                    </div>
                    <div className="article_item small">
                      <div className="article_img">
                        <Image src={Carousel3} alt="" />
                      </div>
                      <div className="article_text">
                        <h4>Article 1</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deleniti temporibus quis eum consequuntur
                          voluptate quae doloribus distinctio. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Nam doloribus,
                          eaque laboriosam expedita, quae ipsa eius excepturi
                          autem aliquid vero error sint! Ullam omnis sequi
                          similique veritatis magni voluptatibus qui.
                        </p>
                        <div className="article_link">
                          <Link href="">Lire plus &gt;&gt;</Link>
                        </div>
                      </div>
                    </div>
                    <div className="article_item small">
                      <div className="article_img">
                        <Image src={Carousel3} alt="" />
                      </div>
                      <div className="article_text">
                        <h4>Article 1</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deleniti temporibus quis eum consequuntur
                          voluptate quae doloribus distinctio. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Nam doloribus,
                          eaque laboriosam expedita, quae ipsa eius excepturi
                          autem aliquid vero error sint! Ullam omnis sequi
                          similique veritatis magni voluptatibus qui.
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
                        <h4>Article 1</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deleniti temporibus quis eum consequuntur
                          voluptate quae doloribus distinctio.
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
            <h2>Portfolio</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Portfolio</span>
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
                      <a
                        href="assets/img/portfolio/app-1.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery2} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/product-1.jpg"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery3} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/branding-1.jpg"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery4} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/books-1.jpg"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery5} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/app-2.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery6} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/product-2.jpg"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery7} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/branding-2.jpg"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery8} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/books-2.jpg"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery9} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/app-3.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery9} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/product-3.jpg"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery10} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/branding-3.jpg"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <Image src={Gallery11} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <a
                        href="assets/img/portfolio/books-3.jpg"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
