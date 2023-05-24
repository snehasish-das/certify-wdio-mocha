import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/answers/answersLanding')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class AnswersLandingPage extends BasePage {
    /**
     * click on a specific menu item on answers landing page e.g. Knowledge
     * @param menu 
     */
    public async clickOn(menu){
        await this.click(locators.mainMenu,menu)
    }
}

export default new AnswersLandingPage()