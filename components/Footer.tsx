import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* À propos */}
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="" className="logo d-flex align-items-center">
              <span className="sitename">Alɔnuzɔ́</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Atlantique</p>
              <p>cotonou, NY 535022</p>
              <p className="mt-3">
                <strong>Téléphone :</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email :</strong> <span>inovision@gamil.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/about">À propos</Link>
              </li>
              <li>
                <Link href="/training">Formation</Link>
              </li>
              <li>
                <Link href="marketplace">Marketplace</Link>
              </li>
              <li>
                <Link href="/decouverte">Découverte</Link>
              </li>
            </ul>
          </div>

          {/* Liens utilisateur */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Espace membre</h4>
            <ul>
              <li>
                <a href="#">S’inscrire</a>
              </li>
              <li>
                <a href="#">Se connecter</a>
              </li>
              <li>
                <a href="#">Conditions d’utilisation</a>
              </li>
              <li>
                <a href="#">Politique de confidentialité</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Notre newsletter</h4>
            <p>
              Abonnez-vous à notre newsletter pour recevoir les dernières
              actualités sur nos produits et services !
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form"
            >
              <div className="newsletter-form">
                <input type="email" name="email" placeholder="Votre email" />
                <input type="submit" value="S’abonner" />
              </div>
              <div className="error-message"></div>
              <div className="sent-message">
                Votre demande d’abonnement a bien été envoyée. Merci !
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">AlonouZo</strong>{" "}
          <span> - Tous droits réservés</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
