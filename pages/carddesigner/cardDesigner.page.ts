import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/carddesigner/cardDesigner')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CardDesignerPage extends BasePage {
    /**
     * add an element to the card
     * @param element 
     */
    public async addElement(element){
        console.log('Adding element '+element);
        let isElementVisible = await this.isVisible(locators.elements,element);
        if(!isElementVisible){
            console.log('clicking Elements menu');
            await this.click(locators.menuItem,"Elements");
        }
        await this.click(locators.elements,element);
    }

    /**
     * click on a specific button based on text
     * @param button 
     */
    public async clickButton(button){
        await this.click(locators.button,button);
    }

    public async clickOnCardDesignerLink(){
        await this.click(locators.cardDesignerLink);
    }

    
}

export default new CardDesignerPage()