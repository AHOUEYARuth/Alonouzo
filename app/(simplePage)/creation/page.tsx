"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import User from "@/assets/img/user.svg";
import Logout from "@/assets/img/logout.svg";
import "../dashboard/dashboard.css";
import ModalForm from "@/components/ModalForm"; // Assure-toi que le chemin est correct

const Creation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="das_header">
        <div className="das_content">
          <div className="profil">
            <Link href="/">Alɔnuzɔ́</Link>
            <div className="user_infos">
              <div className="userName">
                <h6>Detch Amra</h6>
                <Link href="">rua@gmail.com</Link>
              </div>
              <div className="account">
                <div className="userpicture">DA</div>
                <div className="dropdown">
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
        <aside className="sidebar">
          <Link href="/dashboard">Tableau de bord</Link>
          <a href="">Liste des articles</a>
        </aside>
        <div className="dashboard">
          <h1 style={{ color: "#000" }}>Mes Articles</h1>
          <div className="prod">
            <div className="prod_content">
              <div className="add_prod">
                <button className="dash_bout" onClick={handleOpenModal}>
                  Ajouter un article
                </button>
              </div>
              <div className="prod_list">
                <p>Aucun article disponible</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal d'ajout d'article */}
      <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Creation;
