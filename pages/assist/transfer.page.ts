import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/assist/transferPage')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class TransferPage extends BasePage {
    /**
     * Transfer the chat back to the queue
     * @param note 
     */
    public async transferToQueue(note:string){
        await this.setValue(locators.noteTextarea, note)
        await this.click(locators.transferChatLink);
        await this.click(locators.queueNameDropdownIcon);
        await this.click(locators.queueNameDropdownFirstValue);
        await this.click(locators.queueTransferButton);
    }
}

export default new TransferPage()