import BasePage from '../../base.page';
import {Key} from 'webdriverio';
const locators = require('../../../resources/locators/voiceportal/Projects/repositoriesPage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Repositoriespage extends BasePage {
    /**
     * verify the title e.g. Company
     * @param title 
     * @returns 
     */
    public async verifyTitle(titleName):Promise<boolean>{
        return await this.isPresent(locators.title,titleName)
    }

    /**     
     * Checks whether an element is present in DOM
     * @param locator
     * @param param
     * @returns      
     */    
    public async isPresent(locator, ...param):Promise<boolean>{
        locator = this.replaceParams(locator, param);
        const elem = await $(locator);
        return await elem.isDisplayed();
    }

    /**
     * Wait until a particular element is clickable on the screen
     * @param locator 
     * @param param
     * @returns 
     */
    public async waitUntilClickable(locator, ...param):Promise<boolean>{
        locator = this.replaceParams(locator, param);
        const elem = await $(locator);
        
        await elem.waitForClickable({timeout:60000});
        return await this.isPresent(locator);
    }

    /**
     * Change the client e.g. 247 inc
     * @param clientName 
     * @returns 
     */
    public async changeClient(clientName):Promise<void>{
        await this.waitUntilClickable(locators.dropdown, '');
        await this.click(locators.dropdown);
        await this.waitUntilClickable(locators.clientMenu, clientName);
        return await this.click(locators.clientMenu, clientName);
    }

    /**
     * verify the text description e.g. Company
     * @param text 
     * @returns 
     */
    public async verifyText(text):Promise<boolean>{
        return await this.isPresent(locators.subLabel,text)
    }

     /**
     * verify the table name e.g. Projects Files Repository
     * @param tableName 
     * @returns 
     */
     public async verifyTableName(tableName):Promise<boolean>{
        return await this.isPresent(locators.tableLabel, tableName);
    }

    /**
     * verify the table header e.g. Company
     * @param header
     * @param headerName 
     * @returns 
     */
    public async verifyHeader(header, headerName):Promise<boolean>{
        if(header == 1)
            return await this.isPresent(locators.sourceTableHeader, headerName);
        else
            return await this.isPresent(locators.projectTableHeader, headerName);
    }
}

export default new Repositoriespage()
