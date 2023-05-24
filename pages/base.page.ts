const assert = require('assert');
/**
* main page object containing all methods, selectors and functionality
*/
export default class BasePage {

    /**
     * replace dynamic locator params using this method
     * @param locator 
     * @param params 
     * @returns 
     */
    protected replaceParams (locator: string, ...params) {
        console.log(`Initial Locator : ${locator}`);
        params.forEach(param => {
            locator = locator.replace(`<<param>>`,param)
        });
        console.log(`Final Locator : ${locator}`);
        return locator
    }
    
    /**
     * waits and returns true if the locator is enabled else returns false
     * @param locator 
     * @param params 
     * @returns 
     */
    protected async isEnabled(locator: string, ...params): Promise<boolean>{
        locator = this.replaceParams(locator,params);
        let elem = await $(locator);
        let isEnabled:Promise<boolean> = elem.isEnabled();
        return await $(locator).isEnabled();
    }
    
    /**
     * waits and returns true if the locator is enabled else returns false
     * TODO : Handle timeout exception
     * @param locator 
     * @param params 
     * @returns 
     */
    protected async isVisible(locator: string, ...params): Promise<boolean>{
        locator = await this.replaceParams(locator,params);
        let elem = await $(locator);
        let isVisible:Promise<boolean> = elem.isDisplayedInViewport();
        return isVisible;
    }

    /**
     * used to perform a click() action
     * @param locator
     * @param params 
     */
    protected async click(locator: string, ...params){
        locator = this.replaceParams(locator,params);
        //await (await $(locator)).waitForClickable();
        return await (await $(locator)).click();
    }
    
    /**
     * Generic method to send text to any input
     * @param locator 
     * @param value 
     * @param params 
     * @returns 
     */
    protected async setValue(locator: string, value: string, ...params){
        locator = this.replaceParams(locator,params);
        await $(locator).waitForEnabled();
        return await $(locator).setValue(value);
    }

    /**
     * Generic method to clear text to any input
     * @param locator 
     * @param params 
     * @returns 
     */
    protected async clearValue(locator: string, ...params){
        locator = this.replaceParams(locator,params);
        await $(locator).waitForEnabled();
        return await $(locator).clearValue();
    }
    

    /**
     * Get the text of a particular element
     * @param locator 
     * @param params 
     * @returns 
     */
    protected async getValue(locator: string, ...params){
        locator = await this.replaceParams(locator,params);
        await $(locator).waitForDisplayed();
        return await $(locator).getText();
    }
    

    /**
     * static/hard wait for miliseconds
     * @param miliseconds 
     * @returns 
     */
    public async waitFor(miliseconds: number){
        return await browser.pause(miliseconds)
    }

    /**
     * genrate a random 6 digit number to create a unique value
     * @returns 
     */
    public generateRandomNumber(){
        return Math.floor(100000 + Math.random() * 900000);
    }

    /**
     * switch to window based on url
     * @param url 
     * @returns 
     */
    public async switchTo(url: string){
        return await browser.switchWindow(url);
    }
    
    /**
     * Launch a new window and open the url
     * @param url 
     * @returns 
     */
    public async newWindow(url: string){
        return await browser.newWindow(url);
    }

    public async switchToFrame(frame){
        await this.waitFor(15000);
        return await browser.switchToFrame(await $(frame));
    }

    public async switchToDefault(){
        return await browser.switchToParentFrame();
    }

    public async addElementScreenshotToReport(locator, ...params){
       locator = this.replaceParams(locator,params)
       await browser.takeElementScreenshot(locator);
    }

    public async hover(locator, ...params){
       locator = this.replaceParams(locator,params)
       await $(locator).moveTo();
    }
}
