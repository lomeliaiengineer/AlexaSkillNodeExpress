const Alexa = require('ask-sdk-core');

const { SessionEndedRequest, HelpIntent, CancelAndStopIntentHandler, UnhandledIntent } = require('./intents/amazonIntents');
const { HelloWorldIntentHandler } = require('./intents/HelloWorldIntent');
const { LaunchRequest } = require('./intents/LaunchIntent');
const { LocatisationRequestInterceptor } = require('./interceptors/LocatisationInterceptor');

const createSkill = () => {
    const skillbuilder = Alexa.SkillBuilders.custom();
    return skillbuilder.addRequestHandlers(
        LaunchRequest,
        HelloWorldIntentHandler,
        SessionEndedRequest,
        HelpIntent,
        CancelAndStopIntentHandler,
        UnhandledIntent
    )
        .addRequestInterceptors(LocatisationRequestInterceptor)
        .withApiClient(new Alexa.DefaultApiClient())
        .withCustomUserAgent('prueba/v1')
        .create()
}

module.exports = { createSkill }