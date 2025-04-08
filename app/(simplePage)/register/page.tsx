"use client";
import React, { useState } from "react";
import "./register.css";
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
import FormField from "@/components/FormField";
import Link from "next/link";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !phone) {
      setErrorMessage("Tous les champs sont obligatoires");
      return;
    }

    setErrorMessage("");

    console.log("Données à envoyer:", {
      firstname,
      lastname,
      email,
      password,
      phone,
    });

    setShowModal(true);
    resetForm();
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="register_main">
        <section className="register">
          <div className="regis_container">
            <div className="content">
              <h1 className="hero_title" style={{ color: "black" }}>
                S&apos;inscrire
              </h1>
              Veuillez renseigner vos données pour vous inscrire
              {errorMessage && (
                <p
                  className="error_message"
                  style={{ color: "red", marginTop: "10px" }}
                >
                  {errorMessage}
                </p>
              )}
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="iput_group">
                  <div className="field_input">
                    <FormField
                      label="Nom"
                      value={lastname}
                      onChange={(value) => setLastname(value)}
                    />
                  </div>
                  <div className="field_input">
                    <FormField
                      label="Prénom"
                      value={firstname}
                      onChange={(value) => setFirstname(value)}
                    />
                  </div>
                </div>

                <div className="iput_group">
                  <div className="field_input">
                    <FormField
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(value) => setPassword(value)}
                    />
                  </div>
                  <div className="field_input">
                    <FormField
                      label="Téléphone"
                      type="tel"
                      value={phone}
                      onChange={(value) => setPhone(value)}
                    />
                  </div>
                </div>

                <FormField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(value) => setEmail(value)}
                />

                <button type="submit" className="custom_btn">
                  Créer un compte
                </button>
              </form>
              <div className="register_footer">
                <p>
                  Vous avez déjà un compte ?{" "}
                  <Link href="/login" className="link">
                    Connectez-vous
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="hero_section regi"
          style={{ backgroundImage: `url(${Carousel2.src})` }}
        ></div>

        {/* Modal de succès */}
        {showModal && (
          <div
            className="modal_overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              className="modal_content"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
                maxWidth: "400px",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h2>Compte créé avec succès!</h2>
              <p>
                Votre compte a été créé avec succès. Vous pouvez maintenant vous
                connecter.
              </p>
              <Link href={"/login"} >
                Se connecter
              </Link>
              <button
                onClick={closeModal}
                className="custom_btn"
                style={{
                  marginTop: "20px",
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Register;
