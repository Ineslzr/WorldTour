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
            "welcome" : "Bienvenue à notre site",    
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
          "choix" : "Choisir une thème ",
          "choix_quiz_theme":"Choisissez un quiz selon vos thèmes préférés !",
          "choix_pays" :"Choix du pays",
          "questionnaire": "Questionnaire",
          "Depose_document": "Déposer un document pdf",
          "historique": "Historique",
          "creation_quiz": "Créer un quiz",
          "carte_points": "Carte points utilisateur"
        },
        "Choix_pays":{
          "choix_pays":"Choisissez un pays",
          "Testez_connaissance": "Testez vos connaissances à l'aide de quiz sur le pays choisi !",
          "filtre" : "Filtrer"
        },
        "Choix_quiz":{
          "badge" : "Choisissez un quiz pour gagner un badge !",
          "theme": "Le thème est  :"
        },
       }
      },
      vn: {
        translation: {
          "Welcome": {
            "welcome" : "Chào mừng đến với trang web du lịch",
          },
          "Connexion": {
            "connect" : "Đăng nhập",
          },
          "Inscription":{
            "inscription": "Đăng ký",
          },
          "Gauche": {
            "Home" : "Trang chủ",
            "Contact" : "Liên hệ ",
            "Presentation" : "Giới thiệu"
          },
          "Menu":{
            "choix" : "Chọn 1 chủ đề ! ",
            "choix_quiz_theme":"Chọn câu hỏi theo chủ đề yêu thích !",
            "choix_pays" :"Chọn 1 đất nước",
            "questionnaire": "Câu hỏi",
            "Depose_document": "Tải lên 1 file pdf",
            "historique": "Lịch sử truy cập",
            "creation_quiz": "Tạo 1 câu hỏi",
            "carte_points": "Bản đồ với điểm người dùng"
          },
          "Choix_pays":{
            "choix_pays":"Chọn 1 đất nước",
            "Testez_connaissance": "Kiểm tra kiến ​​​​thức của bạn với các câu đố về quốc gia đã chọn !",
            "filtre" : "Bộ lọc"
          },
          "Choix_quiz":{
            "badge" : "Chọn một bài kiểm tra để kiếm huy hiệu !",
            "theme": "Chủ đề :",
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