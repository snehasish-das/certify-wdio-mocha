import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/carddesigner/cardLanding')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CardLandingPage extends BasePage {
    /**
     * click on create Button and select template to continue card designing
     * @param parentTemplate e.g. Payment Cards
     * @param template e.g. Blank Payment
     */
    public async clickCreateContent(parentTemplate, template){
        await this.click(locators.createButton)
        await this.click(locators.templateTab,parentTemplate)
        await this.click(locators.template,template)
    }

    /**
     * Clink on the client and select the required client
     * @param client 
     */
    public async chooseClient(client){
        await this.click(locators.chooseClient)
        await this.click(locators.client,client)
    }

    /**
     * search for a particular card by name
     * @param cardName 
     */
    public async searchCard(cardName){
        await this.setValue(locators.searchInput,cardName);
        await browser.keys("Return");
    }

    /**
     * peform an action on an existing card
     * @param cardName 
     * @param action 
     */
    public async selectCardAction(cardName, action){
        await this.click(locators.cardActionDropdown,cardName);
        await this.click(locators.cardAction,action);
    }

    /**
     * 
     * @param select delete a particular card
     */
    public async deleteCard(select){
        await this.click(locators.deleteCard,select);
    }
}

export default new CardLandingPage()