import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/assist/wrapupPage')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class WrapUpPage extends BasePage {

    /**
     * select intent while closing the chat conversation
     * @param fieldName 
     * @param fieldValue 
     */
    public async selectIntent(fieldName: string, fieldValue: string){
        await this.switchToFrame(locators.chatContainerFrame);
        await this.click(locators.intentDropdown, fieldName);
        await this.click(locators.intentValue, fieldValue);
        await this.switchToDefault();
    }

    /**
     * set intent description while closing the chat conversation
     * @param description 
     */
    public async setIntentDescription(description: string){
        await this.switchToFrame(locators.chatContainerFrame);
        await this.setValue(locators.intentDescription,description);
        await this.switchToDefault();
    }

    /**
     * select intent resolved status while closing the chat conversation
     * @param message 
     */
    public async setIntentResolved(message: string){
        await this.switchToFrame(locators.chatContainerFrame);
        await this.click(locators.intentResolvedYes);
        await this.setValue(locators.intentResolvedDesc,message);
        await this.switchToDefault();
    }

    public async clickEndChat(){
        await this.switchToFrame(locators.chatContainerFrame);
        await this.click(locators.endChatButton);
        await this.switchToDefault();
    }
}

export default new WrapUpPage()