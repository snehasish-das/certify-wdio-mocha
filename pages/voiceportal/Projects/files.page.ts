import BasePage from '../../base.page';
import {Key} from 'webdriverio';
const locators = require('../../../resources/locators/voiceportal/Projects/filesPage');
const path = require('path');
var fs = require('fs');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Filespage extends BasePage {
    /**
     * verify the title e.g. Company
     * @param title 
     * @returns 
     */
    public async verifyTitle(titleName):Promise<boolean>{
        return await this.isVisible(locators.title,titleName);
    }

    /**
     * Change the client e.g. 247 inc
     * @param companyName 
     * @returns 
     */
    public async changeCompany(companyName):Promise<void>{
        await this.click(locators.companyDropdown);
        return await this.click(locators.companyMenu,companyName);
    }

    /**
     * Change the project e.g. 247 inc
     * @param projectName 
     * @returns 
     */
    public async changeProject(projectName):Promise<void>{
        await this.click(locators.projectDropdown);
        return await this.click(locators.projectMenu,projectName);
    }

    /**
     * Checks save/cancel button is enabled or not while creating folder
     * @param buttonName 
     * @returns 
     */
    public async checkButtonEnabled(buttonName):Promise<boolean>{
        return await this.isEnabled(locators.saveCancelButton,buttonName);
    }

    /**
     * Checks Actions menu is enabled
     * @param buttonName 
     * @returns 
     */
    public async checkActionsEnabled():Promise<boolean>{
        return await this.isEnabled(locators.actionButtonCheck);
    }

    /**
     * Checks save/cancel button is enabled or not while creating folder
     * @param buttonName 
     * @returns 
     */
    public async setFieldsFolder(fieldName, fieldvalue):Promise<void>{
        return await this.setValue(locators.folderField,fieldvalue,fieldName);
    }

    /**
     * Click button 
     * @param buttonName 
     * @returns 
     */
    public async clickUploadButton(buttonName):Promise<void>{
        return await this.click(locators.createButton,buttonName);
    }

    /**
     * Click button 
     * @param buttonName 
     * @returns 
     */
    public async clickActionsButton():Promise<void>{
        return await this.click(locators.actionButton);
    }

    /**
     * Click button 
     * @param buttonName 
     * @returns 
     */
    public async clickSaveCancelButton(buttonName):Promise<void>{
        return await this.click(locators.saveCancelButton,buttonName);
    }

    /**
     * Click action menu
     * @param actionName 
     * @returns 
     */
    public async clickAction(actionName):Promise<void>{
        if(actionName == 'Move'){
            await browser.keys('Ctrl');
            await browser.keys('ArrowDown');
            browser.keys('ArrowDown');
            browser.keys('ArrowDown');
            return await browser.keys('Enter');
        }
        else if(actionName == 'Delete'){
            browser.keys('Ctrl');
            browser.keys('ArrowDown');
            await this.waitFor(5000);
            browser.keys('Ctrl');
            browser.keys('ArrorDown');
            return await browser.keys('Enter');
        }

    }

    /**
     * Click Button
     * @param locator 
     * @param param
     * @returns 
     */
    public async clickButton(locatorName, param):Promise<void>{
        if(param === ''){
            return await this.click(locatorName);
        }

        return await this.click(locatorName, param);
    }

    /**
     * Upload file
     * @param fileName 
     * @returns 
     */
    public async uploadFile(fileName):Promise<void>{
        const filePath = path.join(__dirname, fileName);
        return await this.setValue(locators.uploadButton,filePath);
    }

    /**
     * Wait until a particular element is displayed on the screen
     * @param locator 
     * @param param
     * @returns 
     */
    public async waitUntilDisplayed(locator, ...param):Promise<boolean>{
        locator = this.replaceParams(locator, param);
        const elem = await $(locator);
        
        await elem.waitForExist({timeout:60000});
        return await this.isVisible(locator);
    }


    /**
     * verify the text e.g. Company
     * @param locator
     * @param text 
     * @returns 
     */
    public async verifyText(locator, text):Promise<boolean>{
        return await this.isVisible(locator,text)
    }

     /**
     * verify the table name e.g. Projects Files Repository
     * @param tableName 
     * @returns 
     */
     public async verifyTableName(tableName):Promise<boolean>{
        return await this.isVisible(locators.tableLabel, tableName);
    }

    /**
     * verify the table header e.g. Company
     * @param header
     * @param headerName 
     * @returns 
     */
    public async verifyHeader(header, headerName):Promise<boolean>{
        if(header == 1)
            return await this.isVisible(locators.sourceTableHeader, headerName);
        else
            return await this.isVisible(locators.projectTableHeader, headerName);
    }

    /**
     * 
     * @param data 
     * @param tooltip 
     * @returns 
     */
    public async verifyTooltip(data,tooltip):Promise<boolean>{
        await this.hover(locators.tableData,data);
        return await this.isVisible(locators.tableDataTooltip,tooltip)
    }
}

export default new Filespage()
