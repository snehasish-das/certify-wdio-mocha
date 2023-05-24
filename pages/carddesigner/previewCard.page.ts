import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/carddesigner/previewCard')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class PreviewCard extends BasePage {
    /**
     * add an element to the card
     * @param element 
     */
    public async verifyElement(element){
        let frame = '.preview-iframe';
        await this.switchToFrame(frame);
        await this.click(locators.input,element);
        await this.switchToDefault();

    }

    public async clickBack(){
        await this.click(locators.backIcon);
    }
}

export default new PreviewCard()