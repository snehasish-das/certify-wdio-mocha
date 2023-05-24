import conversationbuilderPage from '../../../../pages/conversations/builder/conversationBuilder.page';
import conversationsLandingPage from '../../../../pages/conversations/conversationsLanding.page';
import homePage from '../../../../pages/home.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Conversation tests', async() => {
    before('Login and navigate to Conversations', async() =>{
        await homePage.navigateTo(env.conversation_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
        await homePage.clickTile('Conversations');  
        await homePage.waitFor(5000);
    });
    it('Verify folders Greetings, Conversations, Social Responses, Escalations', async() => {

        //Select workspace and click on Conversation Builder
        await conversationsLandingPage.chooseWorkspace("General")
        await conversationsLandingPage.clickTile("Conversation Builder")

        //Verify folders
        await conversationbuilderPage.waitFor(5000)
        await conversationbuilderPage.verifyFolder("Greetings");
        await conversationbuilderPage.verifyFolder("Conversations");
        await conversationbuilderPage.verifyFolder("Social Responses");
        await conversationbuilderPage.verifyFolder("Escalations");
    });
});