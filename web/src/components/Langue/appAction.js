import actionTypes from "./actionType";

export const changeLanguageApp = (languageInput) => ({
    type: actionTypes.CHANGE_LANGUAGE,
    language : languageInput
})