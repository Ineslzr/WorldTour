import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const fallbackLng = ['fr'];
const availableLanguages = ['en', 'fr', 'vn'];


const options = {
  // order and from where user language should be detected
  order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true
}

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: true,
    whitelist: availableLanguages,
    detection: options,
    defaultNS: "translation",
    resources: {
      en: {
          translation: {
            "Welcome": {
              "welcome" : "Welcome to our site",
          },
            "Connexion": {
             "connect" : "Connexion",
          },
            "Inscription":{
              "inscription": "Inscription",
          },
            "Gauche": {
              "Home" : "Home",
              "Contact" : "Contact",
              "Presentation" : "Presentation"
          },
            "Menu":{
              "choix" : "Your choices",
              "choix_quiz_theme":"Choose a quiz according to your favorite themes",
              "choix_pays" :"Choose a country",
              "questionnaire": "Questionnaire",
              "Depose_document": "Submit a pdf document",
              "historique": "Historical",
              "creation_quiz": "Create a quiz",
              "carte_points": "Map with user points"
          },
            "Choix_pays":{
              "choix_pays":"Choose a country",
              "Testez_connaissance": "Test your knowledge with quizzes on the chosen country!",
              "filtre" : "Filter"
          },
            "Choix_quiz":{
              "badge" : "Choose a quiz to earn a badge!",
              "theme": "Your Subject is",
            }
        }
      },
      fr: {
        translation: {
          "Welcome": {
            "welcome" : "Bienvenue ?? notre site",    
        },
          "Connexion": {
            "connect" : "Se connecter",
        },
          "Inscription":{
            "inscription": "S'inscrire",
        },
        "Gauche": {
          "Home" : "Accueil",
          "Contact" : "Contactez-nous",
          "Presentation" : "Presentation"
        },
        "Menu":{
          "choix" : "Choisir une th??me ",
          "choix_quiz_theme":"Choisissez un quiz selon vos th??mes pr??f??r??s !",
          "choix_pays" :"Choix du pays",
          "questionnaire": "Questionnaire",
          "Depose_document": "D??poser un document pdf",
          "historique": "Historique",
          "creation_quiz": "Cr??er un quiz",
          "carte_points": "Carte points utilisateur"
        },
        "Choix_pays":{
          "choix_pays":"Choisissez un pays",
          "Testez_connaissance": "Testez vos connaissances ?? l'aide de quiz sur le pays choisi !",
          "filtre" : "Filtrer"
        },
        "Choix_quiz":{
          "badge" : "Choisissez un quiz pour gagner un badge !",
          "theme": "Le th??me est  :"
        },
       }
      },
      vn: {
        translation: {
          "Welcome": {
            "welcome" : "Ch??o m???ng ?????n v???i trang web du l???ch",
          },
          "Connexion": {
            "connect" : "????ng nh???p",
          },
          "Inscription":{
            "inscription": "????ng k??",
          },
          "Gauche": {
            "Home" : "Trang ch???",
            "Contact" : "Li??n h??? ",
            "Presentation" : "Gi???i thi???u"
          },
          "Menu":{
            "choix" : "Ch???n 1 ch??? ????? ! ",
            "choix_quiz_theme":"Ch???n c??u h???i theo ch??? ????? y??u th??ch !",
            "choix_pays" :"Ch???n 1 ?????t n?????c",
            "questionnaire": "C??u h???i",
            "Depose_document": "T???i l??n 1 file pdf",
            "historique": "L???ch s??? truy c???p",
            "creation_quiz": "T???o 1 c??u h???i",
            "carte_points": "B???n ????? v???i ??i???m ng?????i d??ng"
          },
          "Choix_pays":{
            "choix_pays":"Ch???n 1 ?????t n?????c",
            "Testez_connaissance": "Ki???m tra ki???n ????????????th???c c???a b???n v???i c??c c??u ????? v??? qu???c gia ???? ch???n !",
            "filtre" : "B??? l???c"
          },
          "Choix_quiz":{
            "badge" : "Ch???n m???t b??i ki???m tra ????? ki???m huy hi???u !",
            "theme": "Ch??? ????? :",
          },
        }
      }
  },
  returnEmptyString: false,
  returnObjects: false,
  returnNull: false,
 
  interpolation: {
      escapeValue: false
    },
  });

export default i18n;