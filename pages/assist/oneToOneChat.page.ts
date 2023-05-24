import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/assist/oneToOneChatPage')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class OneToOneChatPage extends BasePage {

    /**
    * click initiate chat button
    */
    public async clickChat () {
        if(await (await $(locators.alertOk)).isDisplayed()){
            await this.click(locators.alertOk);
        }
        //await this.click(locators.chatTab);
        await this.switchToFrame(locators.chatContainerFrame);
    }

    /**
     * Verify bot or user transcription
     * @param message 
     * @returns 
     */
    public async verifyMessage(message: string){
        await this.switchToFrame(locators.chatContainerFrame);
        try{
            if(await this.isVisible(locators.chatTranscript,message)){
                return true;
            }
        }catch(e){
            return false;
        }
        await this.switchToDefault();
    }

    public async switchToAgentChatInput(locator: string, ...params){
        await this.click(locator,params);
   }

    public async verifyMessageonVisitorPage(message: string){
        try{
            if  (await this.isEnabled(locators.chatTranscriptonVisitor,message)){
                return true;
            }
        }catch(e){
            return false;
        }
    }

    /**
     * send text message to interact with the visitors
     * @param message 
     */
    public async sendMessageToVisitor(message: string){
        await this.waitFor(5000);
        await this.switchToFrame(locators.chatContainerFrame);
        await this.setValue(locators.agentChatInput, message);
        await browser.keys("Return");
        await this.switchToDefault();
    }
    public async sendWelcomeMessageToVisitor(){
        await this.switchToFrame(locators.chatContainerFrame);
        await this.click(locators.welcomeMessagse);
        await this.switchToAgentChatInput(locators.agentChatInput);
        await browser.keys("Return");
        await this.switchToDefault();
    }
    

    /**
     * enable the email transcript option to be able to send an email when the conversation is closed
     * @param email 
     */
    public async enableEmailTranscript(email: string){
        await this.switchToFrame(locators.chatContainerFrame);
        await this.click(locators.chatMenuIcon);
        await this.click(locators.emailTranscript);
        await this.setValue(locators.email,email);
        await this.click(locators.sendEmail);
        await this.switchToDefault();

    }
    
    
    
}

export default new OneToOneChatPage()