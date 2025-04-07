"use client";
import React from 'react';
import Link from 'next/link';
import "./componentStyle.css";
import { usePathname } from "next/navigation";
const Header = () => {
     const pathname = usePathname(); 
    return (
      <header>
        <div className="container">
          <div className="content">
            <div>
              <Link href="/" className="logo">
                AlonouZo
              </Link>
            </div>
            <ul className="header_menu">
              <li>
                <Link href="/" className={pathname === "/" ? "nav_active" : ""}>
                  Accueil
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
              <li>
                <Link
                  href="/training"
                  className={pathname === "/training" ? "nav_active" : ""}
                >
                  Formation
                </Link>
              </li>
              <Link
                href="/marketplace"
                className={pathname === "/marketplace" ? "nav_active" : ""}
              >
                MarketPlace
              </Link>
              <Link href="/contact">
                <button className="btn">Contact</button>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    );
};

export default Header;