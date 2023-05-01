import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import phoneWallet1 from "../../../pictures/websites/wallet.png";
import phoneWallet2 from "../../../pictures/websites/wallet2.png";
import laptopWallet1 from "../../../pictures/websites/laptopwallet.png";
import phonePortfolio1 from "../../../pictures/websites/portfolio1.png";
import laptopPortfolio1 from "../../../pictures/websites/laptop_portfolio1.png";
import laptopPortfolio2 from "../../../pictures/websites/laptop_portfolio2.png";
import laptopSoon from "../../../pictures/laptop_soon.png";
import phoneSoon from "../../../pictures/phone_soon.png";
import CSS from "../../../pictures/Icons/CSS/CSSsmall.png";
import React from "../../../pictures/Icons/React/React ballsmall.png";
import Ts from "../../../pictures/Icons/Typescript/Typescript_logo_2020 1small.png";
import "./portfolio.scss";

interface PortfolioProps {}

interface PortfolioState {}

function Portfolio() {
  const [websiteTitle, setWebsiteTitle] = useState("");
  const [websiteDescription, setWebsiteDescription] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [websiteAvailable, setWebsiteAvailable] = useState("");
  const [Icons_array, setIcons_array] = useState<string[]>([]);

  useEffect(() => {
    const startImages = document.querySelectorAll(".start-image");
    const projectDescription = document.querySelector(".project_description");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectDescription?.classList.add("show");
            if (entry.target === document.querySelector(".mindfulWallet")) {
              setWebsiteTitle("MoneyMindful");
              setWebsiteDescription(
                "I made this website, focused on giving the user a good experience with managing his finances.\
                 You can view how much you've spent and recieved this month while also showing you a total of the two.\
                  It was a project that helped me evolve in react but I hope to perfect it and add more features in it's life time."
              );
              setWebsiteLink("https://moneymindful.vercel.app/");
              setWebsiteAvailable("block");
              setIcons_array([CSS, React]);
            } else if (entry.target === document.querySelector(".portfolio")) {
              setWebsiteTitle("Rodrigo Seborro");
              setWebsiteDescription(
                "Are you ready to get to know me? It's the perfect place to\
                start. Here you can check some of the work that I have done,\
                get to know some facts and contact me directly so that we\
                can talk more!"
              );
              setWebsiteLink("#main");
              setWebsiteAvailable("block");
              setIcons_array([CSS, React, Ts]);
            } else if (entry.target === document.querySelector(".pokemon")) {
              setWebsiteTitle("Pokedex (SOON!)");
              setWebsiteDescription(
                `I joined a team of web developers to create a Pokedex\
                    website. We've decided to create a brand new Pokemon API\
                    which we will use to display Pokemon's data in a Pokedex\
                    Format. Want to get to know more about your favourite\
                    pokemon? Visit us!`
              );
              setWebsiteLink("//");
              setWebsiteAvailable("none");
              setIcons_array([]);
            }
          } else {
            projectDescription?.classList.remove("show");
          }
        });
      },
      {
        threshold: [0.3],
      }
    );

    startImages.forEach((el) => observer.observe(el));

    // cleanup function to disconnect the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  const iterateArray = () => {
    return Icons_array.map((icon: string) => {
      return (
        <img
          src={icon}
          alt="icon"
          className={css`
            padding: 1rem 1rem;
          `}
        />
      );
    });
  };

  function displayWebsite() {
    return (
      <div key={websiteTitle}>
        <h1>{websiteTitle}</h1>
        <p>{websiteDescription}</p>
        <a
          href={websiteLink}
          target="_blank"
          className={css`
            display: ${websiteAvailable};
            margin-top: 1rem;
          `}
        >
          Visit it now!
        </a>
        <>{iterateArray()}</>
      </div>
    );
  }

  return (
    <section className="portfolio_section" id="projects">
      <div className="content">
        <section className="project_description">{displayWebsite()}</section>
        <div className="mindfulWallet start-image">
          <img
            src={phoneWallet1}
            alt="phone wallet mockup"
            className="phone_start phone hidden"
          />
          <img
            src={laptopWallet1}
            alt="laptop wallet mockup"
            className="laptop_wallet_start laptop hidden"
          />
          <img
            src={phoneWallet2}
            alt="phone wallet mockup"
            className="phone_wallet2 phone hidden"
          />
        </div>
        <div className="portfolio start-image">
          <img
            src={laptopPortfolio1}
            alt="laptop portfolio mockup"
            className="phone_start laptop hidden"
          />
          <img
            src={phonePortfolio1}
            alt="phone portfolio mockup"
            className="laptop_wallet_start phone hidden"
          />
          <img
            src={laptopPortfolio2}
            alt="laptop portfolio mockup"
            className="phone_wallet2 laptop hidden"
          />
        </div>
        <div className="pokemon start-image">
          <img
            src={phoneSoon}
            alt="phone wallet mockup"
            className="phone_start phone hidden"
          />
          <img
            src={laptopSoon}
            alt="laptop wallet mockup"
            className="laptop_wallet_start laptop hidden"
          />
          <img
            src={phoneSoon}
            alt="phone wallet mockup"
            className="phone_wallet2 phone hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
