import { useEffect, useState } from "react";
import { setRandomColor, setColorToDefault } from "../../hooks/random_color";
import phoneWallet1 from "../../../pictures/websites/wallet.png";
import phoneWallet2 from "../../../pictures/websites/wallet2.png";
import laptopWallet1 from "../../../pictures/websites/laptopwallet.png";
import phonePortfolio1 from "../../../pictures/websites/portfolio1.png";
import "./portfolio.scss";

interface PortfolioProps {}

interface PortfolioState {}

function Portfolio() {
  const [websiteTitle, setWebsiteTitle] = useState("");
  const [websiteDescription, setWebsiteDescription] = useState("");
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
            } else if (entry.target === document.querySelector(".portfolio")) {
              setWebsiteTitle("Rodrigo Seborro");
              setWebsiteDescription(
                "Are you ready to get to know me? It's the perfect place to\
                start. Here you can check some of the work that I have done,\
                get to know some facts and contact me directly so that we\
                can talk more!"
              );
            } else if (entry.target === document.querySelector(".pokemon")) {
              setWebsiteTitle("Pokedex");
              setWebsiteDescription(
                `I joined a team of web developers to create a Pokedex\
                    website. We've decided to create a brand new Pokemon API\
                    which we will use to display Pokemon's data in a Pokedex\
                    Format. Want to get to know more about your favourite\
                    pokemon? Visit us!`
              );
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

  function displayWebsite() {
    return (
      <>
        <h1>{websiteTitle}</h1>
        <p>{websiteDescription}</p>
      </>
    );
  }

  return (
    <section className="portfolio_section" id="projects">
      <div className="content">
        {/* <div className="title hidden">
          <h1>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              A
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              B
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              O
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              U
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              T
            </span>
            <span>J</span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              M
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              E
            </span>
          </h1>
        </div> */}
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
            src={phonePortfolio1}
            alt="phone portfolio mockup"
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
        <div className="pokemon start-image">
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
      </div>
    </section>
  );
}

export default Portfolio;
