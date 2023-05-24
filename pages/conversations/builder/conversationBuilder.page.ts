import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/conversations/builder/conversationBuilder')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConversationsBuilderPage extends BasePage {
    public async verifyFolder(folderName){
        //await chai.assert.fail(this.isVisible(locators.folder,folderName),'Folder '+folderName+' is not available');
        if(!await this.isVisible(locators.folder,folderName)){
            await this.waitFor(15000);
        }
        await expect(await this.isVisible(locators.folder,folderName)).toBe(true);
    }

    public async clickExpandIcon(folderName){
        return await this.click(locators.expandIcon,folderName);
    }

    public async deleteBotMessage(){
        if(this.isVisible(locators.botMessageAction)){
            await this.click(locators.botMessageAction);
            await this.click(locators.actionMenu,"Delete");
            await this.click(locators.button,"DELETE FOREVER");
        }
    }

    public async clickAddIcon(folderName){
        return await this.click(locators.addIcon,folderName);
    }

    public async addNewNode(newNodeType, newNodeName, newNodeDescription){
        await this.click(locators.newNodeRadio, newNodeType);
        await this.setValue(locators.newNodeName,newNodeName);
        await this.setValue(locators.newNodeDescription,newNodeDescription);
        await this.click(locators.newNodeAddButton);
    }

    public async updateBotMessageResponse(response){
        await this.switchToFrame("iframe");
        await this.setValue(locators.botMessageResponse, response);
        await this.switchToDefault();
    }

    public async addBotMessageMenu(menuTitle, linkDestination, description, imageUrl, actionButtonName){
        await this.click(locators.botMessageOptions,"Menu");
        if(await this.isVisible(locators.botMessageMenuOptionButton)){
            await this.click(locators.botMessageMenuOptionButton);
        }else{
            await this.click(locators.botMessageMenuAddButton);
        }
        await this.setValue(locators.botMessageNewMenuInput,"Title");
        await this.click(locators.botMessageNewMenuSelectDropdown,"Link");
        await this.click(locators.botMessageNewMenuSelectItem,linkDestination);
        await this.setValue(locators.botMessageNewMenuTextarea,description,"Description");
        //await this.setValue(locators.botMessageNewMenuInput,imageUrl,"Image");
        await this.setValue(locators.botMessageNewMenuInput,actionButtonName,"Action");
        await this.click(locators.button,"DONE");
    }

    public async clickButton(buttonName){
        return await this.click(locators.button,buttonName);
    }
}

export default new ConversationsBuilderPage()