import homePage from '../../../../pages/home.page'
import visitorPage from '../../../../pages/assist/visitor.page'
import oneToOnePage from '../../../../pages/assist/oneToOneChat.page'
import transferPage from '../../../../pages/assist/transfer.page'

const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Transfer chat back to queue', async() => {
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
        await oneToOnePage.sendMessageToVisitor("Hello Visitor");
    });
    it('Tranfer chat to queue', async() => {
        await transferPage.transferToQueue("Transfering chat back to the queue");
    });
});