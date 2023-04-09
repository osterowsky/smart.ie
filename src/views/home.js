import React, { useState } from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Mark1 from '../components/mark1'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import FAQ from '../components/faq'
import Card from '../components/card'
import './home.css'

const Home = (props) => {

    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    const handleClick = () => {

      if (!validateEmail(email)) {
        setEmail('');
        return;
      }
      fetch('/.netlify/functions/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      .then(response => response.json())
      .then(data => {
        setEmail('');
      })
      .catch(error => {
        console.error(error)
      });
    };

  return (
    <div className="home-container">
      <Helmet>
        <title>Smart.ie</title>
        <meta property="og:title" content="Smart.ie" />
      </Helmet>
      <div className="wrapper">
        <Navbar rootClassName="navbar-root-class-name" />
        <section className="home-section">
          <video src="/playground_assets/main.mp4" loop autoPlay muted className="home-pasted-video" />
        </section>
      </div>
      <section id="corobimy" className="home-section01">
        <header className="home-header">
          <h2 className="home-heading">Co robimy?</h2>
        </header>
        <section className="home-note">
          <div className="home-image">
            <img
              alt="pastedImage"
              src="/playground_assets/listy.png"
              className="home-pasted-image"
            />
          </div>
          <div className="home-content">
            <div className="home-main">
              <div className="home-caption">
                <span className="home-section02 section-head">
                  oferty tworzone pod ciebie
                </span>
              </div>
              <div className="home-heading01">
                <h2 className="section-heading">Inteligenta lista</h2>
                <p className="section-description">
                  Przedstawiamy najlepszego towarzysza zakupów: naszą
                  inteligentną listę, która uprości Twoje zakupy spożywcze jak
                  nigdy dotąd! Dzięki naszej liście możesz łatwo dodać wszystkie
                  potrzebne produkty i uzyskać dokładne i aktualne ceny dla
                  każdej pozycji w oparciu o aktualne ceny rynkowe i Twoje
                  preferencje.
                </p>
                <div className="home-checkmarks">
                  <Mark1 Label="Obliczenie ceny zakupów"></Mark1>
                  <Mark1 Label="Dostosowane wyłącznie do Twoich sklepów"></Mark1>
                  <Mark1 Label="Oszczędność pieniędzy i czasu"></Mark1>
                </div>
              </div>
            </div>
            <div className="home-get-started button">
              <span className="home-text">Rób wygodnie zakupy!</span>
            </div>
          </div>
        </section>
        <section className="home-note1">
          <div className="home-image1">
            <img
              alt="pastedImage"
              src="/playground_assets/oferty.png"
              className="home-pasted-image1"
            />
          </div>
          <div className="home-content1">
            <main className="home-main1">
              <header className="home-caption1">
                <span className="home-section03 section-head">
                  Promocje robione z myslą o tobie
                </span>
              </header>
              <main className="home-heading03">
                <header className="home-header01">
                  <h2 className="section-heading">Personalizowane oferty</h2>
                  <p className="section-description">
                    Personalizowane oferty to prawdziwy skarb dla każdego
                    użytkownika, który ceni sobie swój czas i chce maksymalnie
                    wykorzystać potencjał technologii. Dzięki tej
                    funkcjonalności, otrzymujesz dostęp do ofert idealnie
                    dopasowanych do Twoich preferencji zakupowych, diety i
                    lokalizacji - nie musisz już szukać igły w stogu siana.
                    Odpowiednie produkty, sklepy i promocje pojawiają się przed
                    Tobą w zaledwie kilka kliknięć, a dzięki temu zaoszczędzisz
                    mnóstwo czasu i pieniędzy.
                  </p>
                </header>
              </main>
            </main>
            <div className="home-get-started1 button">
              <span className="home-text01">Zacznij oszczędzać już dziś!</span>
            </div>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image2">
            <img
              alt="pastedImage"
              src="/playground_assets/chatbot.png"
              className="home-pasted-image2"
            />
          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption2">
                <span className="home-section04 section-head">
                  gotuj to, na co masz ochotę
                </span>
              </div>
              <div className="home-heading05">
                <h2 className="section-heading">Chatbot Smartie</h2>
                <p className="section-description">
                  Przedstawiamy najlepszego kompana do gotowania: naszego
                  chatbota AI, dzięki któremu planowanie posiłków stanie się
                  dziecinnie proste! Niezależnie od tego, czy jesteś
                  doświadczonym kucharzem, czy początkującym w kuchni, nasz
                  chatbot pomoże Ci znaleźć idealny przepis i składniki do
                  następnego posiłku.
                </p>
              </div>
            </div>
            <div className="home-get-started2 button">
              <span className="home-text02">Wypróbuj Smartie!</span>
            </div>
          </div>
        </section>
      </section>
      <section className="home-section05">
        <div className="home-note3">
          <div className="home-image3">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image4"
            />
          </div>
          <div className="home-content3">
            <div className="home-caption3">
              <span className="section-head">Tempor incididunt</span>
            </div>
            <div className="home-heading07">
              <div className="home-header02">
                <h2 className="section-heading">
                  Tips to get care, answers and advice faster
                </h2>
              </div>
              <Accordion rootClassName="accordion-root-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section07">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left side"></div>
        </div>
      </section>
      <section id="cennik" className="home-section08">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header03">
            <header className="home-left2">
              <span className="home-section09 section-head">Cennik</span>
              <h2 className="home-heading09 section-heading">
                Zacznij swoja przygodę już teraz!
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph3 section-description">
                <span>
                  &quot;Ja już korzystam z wersji premium Smart.ie bez
                  reklam&quot;.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>- Robert Lewandowski</span>
              </p>
              <span className="home-text06">
                * Robert to kierowca busa ze Strzegomia
              </span>
            </div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header04">
                    <label className="home-name">Free</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">0zł</h1>
                      <span className="home-duration">/miesiąc</span>
                    </div>
                  </div>
                  <p className="home-description">
                    Idealna opcja na start dla kazdego uzytkownika, ciesz sie
                    Smart.ie juz teraz
                  </p>
                </div>
                <div className="home-buy-details">
                  <div className="home-buy button">
                    <span className="home-text07">
                      <span>Zacznij przygodę już teraz za darmo!</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features">
                    <span className="home-heading10">Co otrzymasz?</span>
                    <div className="home-list">
                      <Includes
                        Label="Spersonalizowane promocje żywności"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Inteligenta lista z obecnymi cenami rynkowymi"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Tysiące inspiracji kulinarnych"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Śledzenie oszczędności na żywności"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Excludes
                        Label="Nielimitowana użyteczność chatbota"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                      <Excludes
                        Label="Wspóldzielenie list z innymi"
                        rootClassName="excludes-root-class-name22"
                      ></Excludes>
                      <Excludes
                        Label="Nielimitowana ilość list"
                        rootClassName="excludes-root-class-name21"
                      ></Excludes>
                      <Excludes
                        Label="Zaawansowane preferencje zakupowe"
                        rootClassName="excludes-root-class-name20"
                      ></Excludes>
                      <Excludes
                        Label="Możliwość dodawania artykułów głosowo"
                        rootClassName="excludes-root-class-name19"
                      ></Excludes>
                      <Excludes
                        Label="Brak Reklam"
                        rootClassName="excludes-root-class-name18"
                      ></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header05">
                    <label className="home-name1">Premium</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">4.99zł</h1>
                      <span className="home-duration1">/miesiąc</span>
                    </div>
                  </div>
                  <p className="home-description1">
                    Idealna opcja dla Roberta i tych, którzy nie lubią reklam,
                    zacznij juz teraz!
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-buy1 button">
                    <span className="home-text10">
                      <span>Zacznij przygodę z Premium!</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features1">
                    <span className="home-heading11">Co otrzymasz?</span>
                    <div className="home-list1">
                      <Includes
                        Label="Spersonalizowane promocje żywności"
                        rootClassName="includes-root-class-name21"
                      ></Includes>
                      <Includes
                        Label="Inteligenta lista z obecnymi cenami rynkowymi"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Tysiące inspiracji kulinarnych"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Śledzenie oszczędności na żywności"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Nielimitowana użyteczność chatbota"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Wspóldzielenie list z innymi"
                        rootClassName="includes-root-class-name23"
                      ></Includes>
                      <Includes
                        Label="Nielimitowana ilość list"
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="Zaawansowane preferencje zakupowe"
                        rootClassName="includes-root-class-name24"
                      ></Includes>
                      <Includes
                        Label="Możliwość dodawania artykułów głosowo"
                        rootClassName="includes-root-class-name25"
                      ></Includes>
                      <Includes
                        Label="Brak Reklam"
                        rootClassName="includes-root-class-name26"
                      ></Includes>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
      </section>
      <section id="faq" className="home-section10">
        <header className="home-header06">
          <span className="home-section11 section-head">FAQ</span>
          <h2 className="home-heading12 section-heading">
            Najczęściej zadawane pytania
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="faq-root-class-name"></FAQ>
        </main>
      </section>
      <section id="kimjestesmy" className="home-section12">
        <header className="home-header07">
          <header className="home-left3">
            <h2 className="home-heading13">Kim jesteśmy?</h2>
            <span className="home-section13 section-head">
              Smart.ie od kuchni
            </span>
          </header>
          <div className="home-right1">
            <p className="home-paragraph4 section-description">
              Smart.ie to projekt stworzony przez ambitnych młodych ludzi
              wywodzących się z największego akceleratora startupowego dla
              młodzieży w Polsce
            </p>
          </div>
        </header>
        <main className="home-cards">
          <Card
            Description="Zakłada Smart.ie, bo lubi być zoorganizowanym"
            rootClassName="card-root-class-name"
          ></Card>
          <Card
            Icon="/playground_assets/group%201314-200h.png"
            Header="Antoni Ciszewski"
            image_src1="/playground_assets/antek-200h.png"
            Description="Zakłada Smart.ie, bo uwielbia jeść smacznie"
            rootClassName="card-root-class-name1"
          ></Card>
          <Card
            Icon="/playground_assets/group%201317-200h.png"
            Header="Adam Wilczyński"
            image_src1="/playground_assets/adam-200h.png"
            Description="Zakłada Smart.ie bo uwielbia oszczędzać"
            rootClassName="card-root-class-name2"
          ></Card>
        </main>
      </section>
      <section className="home-section14">
        <main className="home-content4">
          <div className="home-container1">
            <header className="home-header08">
              <h2 className="home-heading14 section-heading">
                Smart.ie wkrótce dostępne na urządzeniach mobilnych
              </h2>
              <div className="home-buttons">
                <div className="home-ios button">
                  <img
                    alt="image"
                    src="/playground_assets/apple-200w.png"
                    className="home-icon"
                  />
                  <span className="home-text13">Pobierz na IOS</span>
                </div>
                <div className="home-android button">
                  <img
                    alt="image"
                    src="/playground_assets/android-200h.png"
                    className="home-icon1"
                  />
                  <span className="home-text14">Pobierz na Android</span>
                </div>
              </div>
            </header>
          </div>
        </main>
        <img
          alt="image"
          src="/playground_assets/account.png"
          className="home-image5"
        />
      </section>
      <footer className="home-footer">
        <div className="home-content5">
          <main className="home-main-content">
            <div className="home-content6">
              <header className="home-main3">
                <div className="home-header09">
                  <div className="home-container2">
                    <span>Text</span>
                    <span className="home-text16">Smart.ie</span>
                  </div>
                  <span className="home-text17">
                    <span>Oszczędzaj bez zmiany swojego</span>
                    <br></br>
                    <span>lifestylu żywieniowego!</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://www.facebook.com/profile.php?id=100091242044447"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon2"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/smart-ie/about/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/linkedin-200h.png"
                      className="home-linked-in social"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@smart.ie_pl"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/tiktok-200w.png"
                      className="home-linked-in1 social"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/smart.ie/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/instagram.png"
                      className="home-linked-in1 social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header10">
                    <span className="footer-header">Smart.ie</span>
                  </div>
                  <div className="home-links">
                    <a href="#corobimy" className="home-text23 footer-link">
                      Co robimy?
                    </a>
                    <a href="#kimjestesmy" className="home-text24 footer-link">
                      <span>Kim jesteśmy?</span>
                      <br></br>
                    </a>
                    <a href="#cennik" className="home-text27 footer-link">
                      <span>Cennik</span>
                      <br></br>
                    </a>
                    <a href="#faq" className="home-text30 footer-link">
                      <span>FAQ</span>
                      <br></br>
                    </a>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text33">
                <span>© 2023 Smart.ie</span>
                <br></br>
              </span>
            </section>
          </main>
          <div className="home-container3">
            <main className="home-main4">
              <h1 className="home-heading15">
                <span>
                  Otrzymuj cotygodniowe wskazówki dotyczące
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>oszczędzania!</span>
                <br></br>
              </h1>
              <div className="home-input-field">
                <input
                  type="email"
                  id="inputemail"
                  placeholder="Podaj swoj email"
                  autoComplete="off"
                  className="home-textinput input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="home-buy2 button" onClick={handleClick}>
                  <span className="home-text40">-&gt;</span>
                  <span className="home-text41">Dołącz już teraz!</span>
                </div>
              </div>
            </main>
            <main className="home-subscribe">
              <h1 className="home-notice">
                Dołączając do naszej listy mailowej zgadzasz się z naszą
                <a href="/polityka-prywatnosci"> polityką prywatności</a>
              </h1>
            </main>
          </div>
          <section className="home-copyright1">
            <span className="home-text42">
              © 2023 Smart.ie
            </span>
          </section>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
