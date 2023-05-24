import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Admin/userManagementPage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Userspage extends BasePage {
    /**
     * verify the text e.g. Company
     * @param locator
     * @param text 
     * @returns 
     */
    public async verifyText(locator, text):Promise<boolean>{
        return await this.isPresent(locator,text)
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
     * Check whether Button is enabled or not
     * @param locator 
     * @param param
     * @returns 
     */
    public async isButtonEnabled(locatorName, ...param):Promise<boolean>{
        const locator = await this.replaceParams(locatorName, param);
        const elem = await $(locator);

        if(await elem.isExisting()){
            return await this.isEnabled(locatorName, param);
        }
        return false;
    }

    /**
     * Set the value
     * @param locator 
     * @param param
     * @returns 
     */
    public async fillValue(locatorName, param):Promise<void>{
        return await this.setValue(locatorName, param);
    }

    /**
     * Wait until a particular element is displayed on the screen
     * @param locator 
     * @param param
     * @returns 
     */
    public async waitUntilDisplayed(locator, ...param):Promise<boolean>{
        locator = await this.replaceParams(locator, param);
        const elem = await $(locator);
        
        await elem.waitForExist({timeout:60000});
        return await this.isPresent(locator);
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
     * Verify whether all users are visible in DOM
     * @returns 
     */
    public async verifyUserlist():Promise<void>{
        const locator = await this.replaceParams(locators.rowOption, ['20 rows']);
        const elem = await $(locator);
        if(await elem.isExisting()){
            await this.clickButton(locators.rowOption, '20 rows');
        }
    }    
}

export default new Userspage();
