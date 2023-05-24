import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/cob/clients')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class Clients extends BasePage {
    /**
     * search for a particular client by name
     * @param clientName 
     */
    public async searchClient(clientName):Promise<Boolean>{
        await this.setValue(locators.searchInput,clientName);
        await browser.keys("Return");
        return await this.isVisible(locators.clientCard,clientName)?true:false;
    }
    
    /**
     * click on create client button
     */
    public async clickOnCreateClient(){
        await this.click(locators.createButton);
    }

    /**
     * click on create lob link
     * @param clientName 
     */
    public async clickOnCreateLob(clientName){
        await this.click(locators.clientActionsMenu,clientName);
        await this.click(locators.createLobLink);
    }

    /**
     * click on view more link
     * @param clientName 
     */
    public async clickOnViewMore(clientName){
        await this.click(locators.clientViewMoreLink,clientName.toLowerCase());
    }

    /**
     * click on view more link
     * @param clientName 
     */
    // public async isRetryAvailable(clientName):Promise<Boolean>{
    //     return await this.isVisible(locators.clientRetryLink,clientName)?true:false;
    // }

    /**
     * click on Retry/Continue link based on availability
     * @param clientName 
     */
    public async clickOnUpdate(clientName){
        if(await this.isVisible(locators.updateLink,clientName)){
            this.click(locators.updateLink,clientName);
        }
    }
}

export default new Clients()