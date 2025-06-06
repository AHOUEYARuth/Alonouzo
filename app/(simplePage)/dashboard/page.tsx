"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import User from "@/assets/img/user.svg";
import Logout from "@/assets/img/logout.svg";
import "./dashboard.css";
const Dashboard = () => {
  
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
          <Link href="/dashboard">TAbleau de bord</Link>
          <Link href="/creation">Liste des articles</Link>
        </aside>
        <div className="dashboard">
          <h1 style={{ color: "#000" }}>
            Bienvenue dans votre tableau de bord
          </h1>
          <div className="articles">
            <div className="firstarticle">
              Articles créés:<p>0</p>
            </div>
            <div className="secondarticle">
              Articles publiés:<p>0</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
