import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/answers/knowledge/knowledge')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class KnowledgeLandingPage extends BasePage {
    /**
     * click on a specific menu item on answers landing page e.g. Entities
     * @param tab 
     */
    public async clickOn(tab){
        await this.click(locators.tabMenu,tab)
    }
}

export default new KnowledgeLandingPage()