const i18n = require('i18next');
const Alexa = require('ask-sdk-core');

const { messages } = require('../messages');

const LocatisationRequestInterceptor = {
    process(handlerInput){
        i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: messages
        }).then((t) => {
            handlerInput.t = (...args) => t(...args);
        })
    }
} 

module.exports = { LocatisationRequestInterceptor };