import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/answers/knowledge/entityTab')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class EntitiesTab extends BasePage {
    /**
     * Add a new parent/sub folder
     * @param folderName 
     * @param parentFolder 
     */
    public async addFolder(folderName, parentFolder) {
        if (parentFolder != null) {
            await this.clickAction(parentFolder, "ADD FOLDER")
        } else {
            await this.click(locators.addFolder);
        }
        await this.setValue(locators.folderNameInput, folderName);
        await this.click(locators.okButton);
    }

    /**
     * click on a particular folder level action
     * @param folderName 
     * @param actionName 
     */
    public async clickAction(folderName, actionName) {
        let folderStructure = folderName.split('>>');
        await folderStructure.forEach(folder => {
            if (this.isVisible(locators.folderExpandIcon, folder)) {
                this.click(locators.folderExpandIcon, folder)
            }
        });
        await this.click(locators.actionIcon, folderStructure[folderStructure.length - 1]);
        await this.click(locators.menuItem, actionName);
        if (actionName == 'REMOVE') {
            await this.click(locators.okButton);
        }
    }

    /**
     * Add new entity to an existing folder
     * @param folderName 
     * @param entityName 
     * @param entityExpression 
     */
    public async addEntity(folderName, entityName, entityExpression) {
        await this.clickAction(folderName, "ADD ENTITY / PHRASE");
        await this.setValue(locators.entityName, entityName);
        await this.setValue(locators.expression, entityExpression);
        await this.click(locators.saveButton);
        await this.click(locators.popOKButon);
    }

    public async verifyErrorMessage(message) {
        let errorText = await this.getValue(locators.deleteErrorMessage);
        await expect(errorText).toContain(message);
    }
}

export default new EntitiesTab()