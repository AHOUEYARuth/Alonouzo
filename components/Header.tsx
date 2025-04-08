"use client";
import React from 'react';
import Link from 'next/link';
import "./componentStyle.css";
import { usePathname } from "next/navigation";
import Logo from "@/assets/img/Logo/Logo_100.png"
import Image from "next/image";
const Header = () => {
     const pathname = usePathname(); 
    return (
      <header>
        <div className="container">
          <div className="content">
            <div>
              <Link href="/" className="logo">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
            <ul className="header_menu">
              {/* <li>
                <Link href="/" className={pathname === "/" ? "nav_active" : ""}>
                  Accueil
                </Link>
              </li> */}
              <li>
                <Link
                  href="/decouverte"
                  className={pathname === "/decouverte" ? "nav_active" : ""}
                >
                  Découverte
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className={pathname === "/training" ? "nav_active" : ""}
                >
                  Formations
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className={pathname === "/marketplace" ? "nav_active" : ""}
                >
                  MarketPlace
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={pathname === "/about" ? "nav_active" : ""}
                >
                  À Propos
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/register"
                  className={pathname === "/register" ? "nav_active" : ""}
                >
                  S&apos;inscrire
                </Link>
              </li> */}
              <li>
                <Link
                  href="/login"
                  className={pathname === "/login" ? "nav_active" : ""}
                >
                  Se connecter
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/cart"
                  className={pathname === "/cart" ? "nav_active" : ""}
                >
                 panier
                </Link>
              </li> */}
              {/* <Link href="/contact">
                <button className="btn">Contact</button>
              </Link> */}
            </ul>
          </div>
        </div>
      </header>
    );
};

export default Header;