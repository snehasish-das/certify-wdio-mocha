import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const locators = require('../../resources/locators/conversations/conversations')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConversationsLandingPage extends BasePage {
    public async chooseWorkspace (workspace : string){
        if(this.isVisible(locators.chooseWorkspaceHeader)){
            let spaces = workspace.split('>>');
            spaces.forEach(space => {
                this.click(locators.chooseWorkspace,space);
            });
        }
    }

    public async clickTile(tileName){
        await this.click(locators.tileMenu,tileName);
    }
}

export default new ConversationsLandingPage()