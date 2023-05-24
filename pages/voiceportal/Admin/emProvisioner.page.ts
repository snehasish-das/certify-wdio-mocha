import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Admin/emProvisionerPage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmProvisionerpage extends BasePage {
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
     * Wait until a particular element is displayed on the screen
     * @param locator
     * @param param
     * @returns
     */
    public async waitUntilDisplayed(locator, param):Promise<boolean>{
        locator = this.replaceParams(locator, param);
        const elem = await $(locator);
        await elem.waitForExist({timeout:60000});
        return await this.isPresent(locator);
    }
    /**
     * 
     * @param input
     * @param value
     */
    public async selectInputDropdown(input, value){
        await this.click(locators.dropdownPath, value);
        await this.waitFor(5000);
        await this.setValue(locators.dropdownInput, input, value)
        await browser.keys("Return");
    }
    /**
     * 
     * @param value
     */
    public async clickDropdown(value){
        await this.click(locators.dropdownPath, value);
    }
    /**
     * @param value1
     * @param value2
     */
    public async selectDropdown(value1, value2){
        await this.click(this.replaceParams(locators.dropdownSelection, value1, value2));
        await this.waitFor(1000);
    }
     /**
     * 
     * @param value
     */
    public async selectAllDropdown(value){
        await this.click(locators.dropdownSelectAll, value);
        await this.waitFor(1000);
    }
     /**
     * 
     * @param value
     */
     public async unselectAllDropdown(value){
        await this.click(locators.dropdownUnselectAll, value);
        await this.waitFor(1000);
    }
    /**
     * @param value1
     * @param value2
     * @returns
     */
    public async verifyEmptyField(value1, value2):Promise<boolean>{
        return await this.isPresent(this.replaceParams(locators.emptyDropdown, value1, value2));
    }
    /**
     * @param buttonName
     * @returns
     */
    public async verifyButton(buttonName):Promise<boolean>{
        return await this.isEnabled(locators.button, buttonName);
    }
     /**
     * @param buttonName
     */
     public async clickButton(buttonName){
        await this.click(locators.button, buttonName);
    }
    /**
     * @param linkName
     */
    public async openHyperlink(linkName){
        await this.click(locators.hyperlink, linkName);
        await this.waitFor(1000);
    }
    public async clickSomewhere(){
        await this.click(locators.clickAnywhere);
        await this.waitFor(1000);
    }
    public async verifyEmGroup(){
        await this.isPresent(locators.emGroupNone);
    }
    public async verifyEmApplication(){
        await this.isPresent(locators.emApplicationNone);
    }
    /**
     * @param label
     * @param value
     */
    public async inputField(label, value){
        await this.setValue(locators.inputFieldPath, label, value)
    }    
    public async clickCompany(){
        await this.click(locators.clientDropdown);
    }
    /**
     * @param value
     */
    public async selectCompany(value){
        await this.click(locators.selectClient, value);
    }
    /**
     * @param value
     */
    public async clickHyperlink(value){
        await this.click(locators.hyperlinkPath, value);
        await this.waitFor(5000);
    }
    /**
     * @param value
     */
    public async selectProject(value){
        await this.click(locators.allProjectsPath, value);
        await this.waitFor(5000);
    }
    /**
     * @param value
     */
    public async radioButton(value){
        await this.click(locators.emApplicationSearch, value);
        await this.waitFor(2000);
    }
    /**
     * @param value
     */
    public async emApplicationDetail(value){
        await this.setValue(locators.emSearchInputField, value);
        await this.waitFor(2000);
    }
    /**
     * @param value
     */
    public async openCompany(value){
        await this.click(locators.companyNameLink, value);
    }
    /**
     * @param value
     */
    public async openEmGroup(value){
        await this.click(locators.clickEmGroup, value);
    }
    public async openEditUsers(){
        await this.click(locators.editUserspath);
    }
    /**
     * @param value1
     * @param value2
     * @returns
     */
    public async selectUserPrivilege(value1, value2){
        return await this.click(this.replaceParams(locators.userPrivilegeOption, value1, value2));
    }
    /**
     * @param value
     */
    public async editClick(value){
        return await this.click(locators.editPath, value);
    }
     /**
     * @param value
     */
    public async verifyTableHeader(value){
        await this.isPresent(locators.tableHeader, value);
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
}
export default new EmProvisionerpage()