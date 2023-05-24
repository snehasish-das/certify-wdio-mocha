import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Home/voiceLanding')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VoiceLandingPage extends BasePage {
    /**
     * click on the menu item by name e.g. Admin
     * @param menuItem 
     * @returns 
     */
    public async clickMenu(menuItem){
        return await this.click(locators.menuItem,menuItem)
    }

    /**
     * click on the tab by name e.g. Company
     * @param tabName 
     * @returns 
     */
    public async clickTab(tabName){
        return await this.click(locators.tabName,tabName)
    }
}

export default new VoiceLandingPage()