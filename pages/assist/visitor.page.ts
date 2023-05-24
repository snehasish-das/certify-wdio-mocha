import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/assist/visitorsPage')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class VisitorPage extends BasePage {

    /**
    * click initiate chat button
    */
    public async clickChat () {
        await this.waitFor(15000);
        await this.click(locators.initiateChatButton);
    }

    /**
     * verify the message from an agent or bot
     * @param message 
     * @returns 
     */
    public async verifyMessage(message: string){
        try{
            if(await this.isEnabled(locators.botMessage,message)){
                return true
            }
        }catch(e){
            return false;
        }
    }

    /**
     * send text message to the agent or bot
     * @param message 
     */
    public async sendMessage(message: string){
        await this.switchToFrame(locators.chatIframe);
        await this.setValue(locators.visitorInput,message)
        await browser.keys("Return"); 
        await this.switchToDefault();  
    }
}

export default new VisitorPage()