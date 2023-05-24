import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/cob/viewClient')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ViewClient extends BasePage {
    /**
     * search for a particular client by name
     * @param accountName 
     */
    public async verifyAccount(accountName):Promise<Boolean>{
        return await this.isVisible(locators.accountCard,accountName)?true:false;
    }
}

export default new ViewClient()