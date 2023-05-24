import homePage from '../../../../pages/home.page'
import visitorPage from '../../../../pages/assist/visitor.page'
import oneToOnePage from '../../../../pages/assist/oneToOneChat.page'
import wrapupPage from '../../../../pages/assist/wrapup.page'

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Validate Agent interaction and bot transcription', async() => {
    it('Login as assist console as agent', async() => {
        await homePage.navigateTo(env.dc_assist_console);
        await homePage.assistLogin(users.dc_agent.username,users.dc_agent.password);
        await homePage.waitFor(5000);
    });
    it('Open another window and initiate visitor conversation', async() => {
        await visitorPage.newWindow(env.visitor_page);
        await visitorPage.clickChat();
        await visitorPage.sendMessage("Automation Agent please");
        await visitorPage.waitFor(10000); //wait for Yes or No option
        await visitorPage.sendMessage("Yes");
        await visitorPage.waitFor(10000); //Waiting for chat assignment
    });
    it('Verify user transcription and initiate chat with visitor', async() => {
        await oneToOnePage.switchTo("console");
        //await oneToOnePage.clickChat();
        //await oneToOnePage.verifyMessage("Automation Agent please");
        await oneToOnePage.sendMessageToVisitor("Hello Visitor");        
    });
    it('Navigate to visitor chat window and respond to Agent', async() => {
        await visitorPage.switchTo("Loftwell");
        await visitorPage.sendMessage("Hello Agent, please wrapup the chat");
    });
    it('Navigate to agent console and wrapup the chat', async() => {
        await wrapupPage.switchTo("console");
        await wrapupPage.selectIntent("Intent Level 1","Status")
        await wrapupPage.selectIntent("Intent Level 2","Resolved")
        await wrapupPage.setIntentDescription("Automation")
        await wrapupPage.setIntentResolved("End chat description")
        await wrapupPage.clickEndChat();
    });
});