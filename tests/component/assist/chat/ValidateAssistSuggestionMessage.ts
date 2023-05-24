import homePage from "../../../../pages/home.page";
import visitorPage from "../../../../pages/assist/visitor.page";
import oneToOneChatPage from "../../../../pages/assist/oneToOneChat.page";
import wrapUpPage from "../../../../pages/assist/wrapUp.page";
import { WatchDirectoryFlags } from "typescript";

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('validate agent interaction form visitor', async ()=> {
    it('login as agent in assist console', async ()=>{
        await homePage.navigateTo(env.dc_assist_console);
        await homePage.assistLogin(users.dc_agent1.username, users.dc_agent1.password);
        await homePage.waitFor(10000);
});
it('open a vistor page in other window', async()=>{
    await visitorPage.newWindow(env.visitor_page);
    await visitorPage.clickChat();
    await visitorPage.sendMessage("agent please");
    await visitorPage.waitFor(10000);

});
it('verify chat had escalted to agent', async()=>{
    await oneToOneChatPage.switchTo("console");
    await oneToOneChatPage.waitFor(5000);
    await oneToOneChatPage.sendWelcomeMessageToVisitor();
    await oneToOneChatPage.waitFor(5000);
   });

it('navigate to vistor page verify the sugession message', async()=>{
    await visitorPage.switchTo("Loftwell");
    await oneToOneChatPage.verifyMessageonVisitorPage("Hi, my name is")
    await visitorPage.waitFor(5000);
   });

    it('navigate to agent console and wrap up the chat', async ()=>{
        await wrapUpPage.switchTo("console");
        await wrapUpPage.selectIntent("Intent Level 1","Status")
        await wrapUpPage.selectIntent("Intent Level 2","Resolved");
        await wrapUpPage.setIntentDescription("Automation");
        await wrapUpPage.setIntentResolved("resolved");
        await wrapUpPage.clickEndChat();
    });

});