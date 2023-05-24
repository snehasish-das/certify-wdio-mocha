import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const env = require('../../config/environment');
const users = require('../../config/users')
const locators = require('../../resources/locators/assist/interactionHistoryPage')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class InteractionHistory extends BasePage {

    /**
    * Navigate to any admin menu item using this method
    * @param item
    */
    public async clickOnFirstEntry (item: string) {
        await this.click(locators.pastHistoryTableRows,item);
    }
    
    public async verifyTranscriptionMessage(message: string){
        await this.click(locators.transcriptArrow);
        return this.isVisible(locators.transcriptContent,message)?true:false;
    }
}

export default new InteractionHistory()