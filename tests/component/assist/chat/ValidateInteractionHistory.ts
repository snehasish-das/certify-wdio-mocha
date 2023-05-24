import homePage from '../../../../pages/home.page'
import visitorPage from '../../../../pages/assist/visitor.page'
import oneToOnePage from '../../../../pages/assist/oneToOneChat.page'
import wrapupPage from '../../../../pages/assist/wrapup.page'
import ihs from '../../../../pages/assist/interactionHistory.page'

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Validate agent interaction history tab', async() => {
    it('Login as assist console as agent', async() => {
        await homePage.navigateTo(env.assist_console);
        await homePage.assistLogin(users.agent.username,users.agent.password);
        await homePage.waitFor(5000);
    });
    it('Open another window and initiate visitor conversation', async() => {
        await visitorPage.newWindow(env.visitor_page);
        await visitorPage.clickChat();
        await visitorPage.sendMessage("Automation Agent please");
    });
    it('Verify user transcription and initiate chat with visitor', async() => {
        await oneToOnePage.switchTo(env.assist_console);
        await oneToOnePage.clickChat();
        await oneToOnePage.verifyMessage(users.agent.username+" please");
        await oneToOnePage.sendMessageToVisitor("Hello Visitor");        
    });
    it('Navigate to visitor chat window and respond to Agent', async() => {
        await visitorPage.switchTo(env.visitor_page);
        await visitorPage.sendMessage("Hello "+users.agent.username+", please wrapup the chat");
    });
    it('Navigate to agent console and wrapup the chat', async() => {
        await wrapupPage.switchTo(env.agent_console);
        await wrapupPage.selectIntent("Intent Level 1","Status")
        await wrapupPage.selectIntent("Intent Level 2","Resolved")
        await wrapupPage.setIntentDescription("Automation")
        await wrapupPage.setIntentResolved("End chat description")
        await wrapupPage.clickEndChat();
    });
    it('Validate the interaction history', async() => {
        await ihs.clickOnFirstEntry(users.agent.username);
        await ihs.verifyTranscriptionMessage(users.agent.username+" please");
        await ihs.verifyTranscriptionMessage("Hello "+users.agent.username+", please wrapup the chat");
    });
});