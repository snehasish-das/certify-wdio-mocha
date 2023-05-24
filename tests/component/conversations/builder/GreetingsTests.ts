import conversationbuilderPage from '../../../../pages/conversations/builder/conversationBuilder.page';
import conversationsLandingPage from '../../../../pages/conversations/conversationsLanding.page';
import homePage from '../../../../pages/home.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Greetings tests', async() => {
    before('Login and navigate to Conversations', async() =>{
        await homePage.navigateTo(env.conversation_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
        await homePage.clickTile('Conversations');  
        await homePage.waitFor(5000);
    });
    it('Expand and delete existing message', async() => {
        //Select workspace and click on Conversation Builder
        await conversationsLandingPage.chooseWorkspace("General")
        await conversationsLandingPage.clickTile("Conversation Builder")

        //Delete existing bot messge if any
        await conversationbuilderPage.waitFor(5000)
        await conversationbuilderPage.clickExpandIcon("Greetings")
        await conversationbuilderPage.deleteBotMessage()
    });
    it('Add bot Message Menu', async() => {
        let newNodeName = "WelcomeNode_Automation";
        let newNodeDesc = "Welcome Node";
        let response = "Hi, \n" +
        "I am a telecom bot!\n" +
        "\n" +
        "Please choose from the options below";
        await conversationbuilderPage.waitFor(5000)
        await conversationbuilderPage.clickAddIcon("Greetings")
        await conversationbuilderPage.addNewNode("Bot Message",newNodeName,newNodeDesc)
        await conversationbuilderPage.addBotMessageMenu("Prepaid","Prepaid_Services","User opts to choose prepaid","https://images.squarespace-cdn.com/content/v1/57b9b83e579fb3b27bfc2746/1571776911735-93N688EHEZSZVL07IU7B/Icon-Prepaid-B01.png","Prepaid")
        await conversationbuilderPage.addBotMessageMenu("Postpaid","Postpaid_Services","User opts to choose postpaid","https://cdn3d.iconscout.com/3d/premium/thumb/postpaid-bill-payment-2870168-2386920.png","Postpaid")
        await conversationbuilderPage.clickButton("SAVE")
        await conversationbuilderPage.clickButton("CLOSE")
    });
    it('Update bot Message', async() => {
        let newNodeName = "WelcomeNode_Automation";
        let newNodeDesc = "Welcome Node";
        let response = "Hi, \n" +
        "I am a telecom bot!\n" +
        "\n" +
        "Please choose from the options below";
        //Delete existing bot messge if any
        await conversationbuilderPage.waitFor(5000)
        await conversationbuilderPage.clickExpandIcon("Greetings")
        await conversationbuilderPage.deleteBotMessage()

        //Add and update bot message
        await conversationbuilderPage.waitFor(5000)
        await conversationbuilderPage.clickAddIcon("Greetings")
        await conversationbuilderPage.addNewNode("Bot Message",newNodeName,newNodeDesc)
        await conversationbuilderPage.updateBotMessageResponse(response)
        await conversationbuilderPage.clickButton("SAVE")
        await conversationbuilderPage.clickButton("CLOSE")
    });
});