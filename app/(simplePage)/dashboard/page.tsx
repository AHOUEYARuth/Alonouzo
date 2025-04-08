"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import User from "@/assets/img/user.svg";
import Logout from "@/assets/img/logout.svg";
import "./dashboard.css";
/* import {
  FaTachometerAlt,
  FaPlusCircle,
  FaList,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa"; */

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "", img: "" });
  const [error, setError] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const toggleDropdown = () => setIsActive(!isActive);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    const newArticle = {
      id: Date.now(),
      ...formData,
      published: false,
    };

    setArticles([...articles, newArticle]);
    setFormData({ title: "", content: "",img: "" });
    setError("");
    setSuccessModal(true);
    setTimeout(() => setSuccessModal(false), 3000);
  };

  const handleDelete = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  const handlePublish = (id) => {
    setArticles(
      articles.map((a) => (a.id === id ? { ...a, published: true } : a))
    );
  };

  return (
    <>
      <header className="das_header">
        <div className="das_content">
          <div className="profil">
            <Link href="/">AlonouZo</Link>
            <div className="user_infos">
              <div className="userName">
                <h6>Detch Amra</h6>
                <Link href="">rua@gmail.com</Link>
              </div>
              <div className="account">
                <div className="userpicture" onClick={toggleDropdown}>
                  DA
                </div>
                <div className={`dropdown ${isActive ? "active" : ""}`}>
                  <div className="consult_profil">
                    <Image src={User} alt="" />
                    <p>Profil</p>
                  </div>
                  <div className="consult_profil">
                    <Image src={Logout} alt="" />
                    <p>Se déconnecter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard_main">
        <div className="left_section">
          <ul>
            <li onClick={() => setActiveMenu("home")}>
              {/* <FaTachometerAlt /> */} Tableau de bord
            </li>
            <li onClick={() => setActiveMenu("add")}>
              {" "}
             {/*  <FaPlusCircle />  */}Ajouter une création
            </li>
            <li onClick={() => setActiveMenu("list")}>
              {" "}
              {/* <FaList /> */} Liste des articles
            </li>
          </ul>
        </div>

        <div className="right_section">
          {activeMenu === "home" && (
            <div>
              <h2>Bienvenue dans votre tableau de bord</h2>
              <p>Articles créés : {articles.length}</p>
              <p>
                Articles publiés : {articles.filter((a) => a.published).length}
              </p>
            </div>
          )}

          {activeMenu === "add" && (
            <form onSubmit={handleSubmit}>
              <h2>Ajouter une création</h2>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <input
                type="text"
                placeholder="Titre"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <textarea
                placeholder="Contenu"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              ></textarea>
              <button type="submit">Enregistrer</button>
            </form>
          )}

          {activeMenu === "list" && (
            <div>
              <h2>Liste des articles</h2>
              <ul>
                {articles.map((article) => (
                  <li key={article.id}>
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button onClick={() => handleDelete(article.id)}>
                       {/*  <FaTrash /> */} Supprimer
                      </button>
                      <button>
                        {/* <FaEdit /> */} Modifier
                      </button>
                      {!article.published && (
                        <button onClick={() => handlePublish(article.id)}>
                         {/*  <FaEye /> */} Publier
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {successModal && (
          <div className="modal">
            <div className="modal_content">
              <p className="message">Création enregistrée avec succès !</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Dashboard;
