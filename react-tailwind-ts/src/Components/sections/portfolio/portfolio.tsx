import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import phoneWallet1 from "../../../pictures/websites/wallet.png";
import phoneWallet2 from "../../../pictures/websites/wallet2.png";
import laptopWallet1 from "../../../pictures/websites/laptopwallet.png";
import phonePortfolio1 from "../../../pictures/websites/portfolio1.png";
import laptopPortfolio1 from "../../../pictures/websites/laptop_portfolio1.png";
import laptopPortfolio2 from "../../../pictures/websites/laptop_portfolio2.png";
import laptopLarDashboard1 from "../../../pictures/websites/laptop1_LarDashboard.png";
import laptopLarDashboard2 from "../../../pictures/websites/laptop2_LarDashboard.png";
import laptopLarDashboard3 from "../../../pictures/websites/laptop3_LarDashboard.png";
import laptopSocialMediaLar1 from "../../../pictures/websites/laptop1SocialMediaLar.png";
import phoneSocialMediaLar2 from "../../../pictures/websites/phone1LarSocialMedia.png";
import phoneSocialMediaLar1 from "../../../pictures/websites/phone2LarSocialMedia.png";
import laptopSoon from "../../../pictures/laptop_soon.png";
import phoneSoon from "../../../pictures/phone_soon.png";
import CSS from "../../../pictures/Icons/CSS/CSSsmall.png";
import SCSS from "../../../pictures/Icons/SCSS/SCSS.png";
import React from "../../../pictures/Icons/React/React ballsmall.png";
import Redux from "../../../pictures/Icons/Redux/redux reactsmall.png";
import Ts from "../../../pictures/Icons/Typescript/Typescript_logo_2020 1small.png";
import Next from "../../../pictures/Icons/Next.js/Next.png";
import PostgreSQL from "../../../pictures/Icons/PostgreSQL/PostgreSQL.png";
import Django from "../../../pictures/Icons/Django/Django.png";
import Electron from "../../../pictures/Icons/Electron/Electron.png";
import Tailwind from "../../../pictures/Icons/Tailwind/Tailwind.png";
import Emotion from "../../../pictures/Icons/Emotion/Emotion.png";
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
              setIcons_array([SCSS, React, Ts]);
            } else if (
              entry.target === document.querySelector(".BookshelfBuddy")
            ) {
              setWebsiteTitle("BookshelfBuddy (SOON!)");
              setWebsiteDescription(
                `Together with Google Books API I've created a website where users can not only search for books in the Google's API/ 
                but also together with my own created API, sign-up to the website and save their favorite books to track their reading.`
              );
              setWebsiteLink("//");
              setWebsiteAvailable("none");
              setIcons_array([]);
            } else if (
              entry.target === document.querySelector(".LarDashboard")
            ) {
              setWebsiteTitle("O Lar Dashboard");
              setWebsiteDescription(
                `This Project was created with the intuitive of a elderly home\
                to be able to keep some of this details saved not only on physical\
                paper, but now they can also save their data on a computer. This\
                website is connected to a REST API which with any update, delete or create request\
                will also affect the "O lar Social Media" website.`
              );
              setWebsiteLink("https://youtu.be/Abv9sTkMg38");
              setWebsiteAvailable("block");
              setIcons_array([
                Next,
                PostgreSQL,
                Django,
                Emotion,
                Electron,
                Redux,
              ]);
            } else if (
              entry.target === document.querySelector(".LarSocialMedia")
            ) {
              setWebsiteTitle("O Lar Social Media");
              setWebsiteDescription(
                `This Project was created with the intuitive of a elderly home to share posts with 
                their people, sharing photos, letting users comment to share their thoughts. Also
                 letting users see the information and recent medical visits of their responsible elders.
                 `
              );
              setWebsiteLink("https://youtu.be/Aand_O4UAlM");
              setWebsiteAvailable("block");
              setIcons_array([React, PostgreSQL, Django, Tailwind]);
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
        <div className="BookshelfBuddy start-image">
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
        <div className="LarDashboard start-image">
          <img
            src={laptopLarDashboard1}
            alt="laptop Lar Dashboard mockup"
            className="phone_start laptop hidden"
          />
          <img
            src={laptopLarDashboard2}
            alt="laptop Lar Dashboard mockup"
            className="laptop_wallet_start laptop hidden"
          />
          <img
            src={laptopLarDashboard3}
            alt="laptop Lar Dashboard mockup"
            className="phone_wallet2 laptop hidden"
          />
        </div>
        <div className="LarSocialMedia start-image">
          <img
            src={phoneSocialMediaLar1}
            alt="laptop wallet mockup"
            className="phone_start phone hidden"
          />
          <img
            src={laptopSocialMediaLar1}
            alt="laptop wallet mockup"
            className="laptop_wallet_start laptop hidden"
          />
          <img
            src={phoneSocialMediaLar2}
            alt="laptop portfolio mockup"
            className="phone_wallet2 phone hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
