"use client";

import React from "react";
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
                <div className="userpicture" >
                  DA
                </div>
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
        <div className="left_section">
          <ul>
           <li>Article</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
