import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/answers/knowledge/responsesTab')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResponsesTab extends BasePage {
    /**
     * Add a new parent/sub folder
     * @param folderName 
     * @param parentFolder 
     */
    public async editInterface(interfaceName, attributeLabel, attributeValue){
        await this.clickAction(interfaceName,'EDIT');
        await this.setValue(locators.editInterfaceInput,attributeValue,attributeLabel);
        await this.click(locators.editInterfaceButton,'SAVE');
        if(await this.isVisible(locators.confirmInterfaceButton,'OK')){
            await this.click(locators.confirmInterfaceButton,'OK');
        }
    }

    /**
     * click on a particular folder level action
     * @param folderName 
     * @param actionName 
     */
    public async clickAction(interfaceName, actionName){
        if(await this.isVisible(locators.actions,interfaceName)){
            await this.click(locators.actions,interfaceName)
        }else{
            await this.click(locators.actions1,interfaceName);
        }
        await this.click(locators.clickAction, actionName);
        if(actionName == 'REMOVE'){
           await this.click(locators.okButton);
        }
    }

    /**
     * Add new category under an existing interface
     * @param interfaceName 
     * @param categoryName 
     */
    public async addCategory(interfaceName, categoryName){
        await this.clickAction(interfaceName,'ADD CATEGORY (FOLDER)');
        await this.setValue(locators.categoryName,categoryName);
        await this.click(locators.confirmInterfaceButton,'OK');
    }

    /**
     * Add response to an existing category
     * @param categoryName 
     * @param responseTitle 
     * @param responseExpression 
     * @param utterance (format userSeesvalue>>BotSeesValue)
     */
    public async addResponse(categoryName, responseTitle, responseExpression, utterance){
        //Click on Add Response 
        await this.clickAction(locators.newCategoryAction,categoryName);
        await this.click(locators.clickAction,'ADD RESPONSE');

        //set response title, expression
        await this.setValue(locators.responseTitle,responseTitle);
        await this.switchToFrame('cke_wysiwyg_frame');
        await this.setValue('//body',responseExpression);
        await this.switchToDefault();
        
        //Add Utterance if required
        if(utterance != null){
            let utteranceValues = utterance.split('>>');
            let userSees = utteranceValues[0];
            let botSees = utteranceValues[1];
            await this.addUtterance(userSees, botSees);
        }

        //Save response
        await this.click(locators.saveResponse);
        if(await this.isVisible(locators.confirmInterfaceButton,'OK')){
            await this.click(locators.confirmInterfaceButton,'OK');
            await this.waitFor(6000)
        }
    }

    /**
     * Add an utterance to a response
     * @param userSees 
     * @param botSeesEntity 
     * @returns 
     */
    public async addUtterance(userSees, botSeesEntity){
        await this.click(locators.responseMenu,"Utterances");
        await this.click(locators.utteranceActions,"Add");
        await this.setValue(locators.addUtteranceUserInput,userSees);
        await this.click(locators.generateButton);
        let word = userSees.split(" ");
        await this.click( locators.botSeesDropdownIcon, word[0].toLowerCase());
        await this.click( locators.botSeesValue, botSeesEntity);
        await this.click(locators.saveUtterance);
        return this;
    }
}

export default new ResponsesTab()   