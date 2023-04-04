import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="faq-element accordion-element"
      >
        <div className="faq-details">
          <span className="faq-text">
            <span className="">
              Jak Smart.ie personalizuje oferty na podstawie preferencji
              użytkownika?
            </span>
            <br className=""></br>
          </span>
          <span data-role="accordion-content" className="faq-text03">
            Aplikacja personalizuje oferty na podstawie preferencji użytkownika,
            takich jak dodawanie produktów do listy, zainteresowanie ofertami
            widniejącymi w aplikacji oraz daniami, na które tworzone są listy.
            Dodatkowo, na podstawie lokalizacji użytkownika, ulubionych sklepów
            i preferencji produktów, aplikacja wybiera najkorzystniejszą ofertę
            dla użytkownika.
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span className="faq-text04">Czy Smart.ie jest bezpłatne?</span>
          <span data-role="accordion-content" className="faq-text05">
            Tak, aplikacja jest bezpłatna do pobrania i używania.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon02">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text06">Jakie są zalety używania Smart.ie?</span>
          <span data-role="accordion-content" className="faq-text07">
            Zalety korzystania z aplikacji to spersonalizowane oferty, wygodne
            wyszukiwanie produktów, zminimalizowanie nakładu czasu i większa
            wartość oszczędności. Użytkownicy widzą tylko te oferty, które ich
            interesują, a po sporządzeniu listy zakupów widzą szacunkową cenę i
            to, gdzie najlepiej zrobić zakupy na podstawie swojej listy lub
            menu.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon04">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text08">
            Czy Smart.ie umożliwia udostępnianie listy zakupów z innymi
            użytkownikami?
          </span>
          <span data-role="accordion-content" className="faq-text09">
            Tak, aplikacja umożliwia udostępnianie listy zakupów z innymi
            użytkownikami, co pozwala na wspólne planowanie zakupów lub
            dzielenie się przepisami.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon06">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4">
          <span className="faq-text10">
            Czy Smart.ie faktycznie ma funkcję chatbota, który może dodawać
            produkty do listy?
          </span>
          <span data-role="accordion-content" className="faq-text11">
            Tak, aplikacja zawiera chatbota, który może dodawać produkty do
            listy na podstawie przepisu albo słów kluczowych e.g. “szybkie danie
            włoskie” lub “przepis na spaghetti
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon08">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.',
  rootClassName: '',
}

FAQ.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FAQ
