"use client";
import React from "react";
import Carousel2 from "@/assets/img/Banner/Banneeeeer.png";
/* import { useState } from "react";
 */import "../register/register.css";
import FormField from "@/components/FormField";
const Login = () => {
/*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */
  return (
    <>
      <main className="register_main">
        <section className="register">
          <div className="regis_container">
            <div className="content">
              <h1 className="hero_title" style={{ color: "black" }}>
                Se connecter
              </h1>
              <p>Veuillez saisir vos données pour vous connecter</p>
              <form autoComplete="off">
                <FormField label="Email" type="email" />
                <FormField label="password" />
                <button type="submit" className=" custom_btn">
                  se connecter
                </button>
              </form>
              <p className="hero_text">
                Vous n&apos;avez pas de compte?{" "}
                <a href="/register" className="hero_link">
                  S&apos;inscrire
                </a>
              </p>
            </div>
          </div>
        </section>
        <div
          className="hero_section regi"
          style={{ backgroundImage: `url(${Carousel2.src})` }}
        ></div>
      </main>
    </>
  );
};

export default Login;
