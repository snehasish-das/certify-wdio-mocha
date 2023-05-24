import BasePage from '../../base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Spvepage extends BasePage {
    /**
     * verify the text e.g. Company
     * @param locator
     * @param text 
     * @returns 
     */
    public async verifyText(locator, text):Promise<boolean>{
        return await this.isPresent(locator,text);
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
    public async isButtonEnabled(locatorName, param):Promise<boolean>{
        if(param === ''){
            return await this.isEnabled(locatorName);
        }

        return await this.isEnabled(locatorName, param);
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
        locator = this.replaceParams(locator, param);
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
}

export default new Spvepage();
