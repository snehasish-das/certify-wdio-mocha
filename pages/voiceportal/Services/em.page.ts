import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Services/emPage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmPage extends BasePage {

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
     * 
     * @param client 
     * 
     */
    public async selectClient(client){
        await this.click(locators.viewClient);
        await this.click(locators.getClient, client);
    }
    /**
     * 
     * @param input
     * @param label
     */
    public async inputName(value, label){
        await this.setValue(locators.inputField, value, label);
        await browser.keys("Return");
    }
    /**
     * 
     * @param input
     * @param label
     */
    public async inputNameSchedule(value, label){
        await this.setValue(locators.inputFieldSchedule, value, label);
        await browser.keys("Return");
    }
    /**
     * 
     * @param headerName 
     * @returns 
     */
    public async verifyHeader(headerName):Promise<boolean>{
        return await this.isPresent(locators.tableHeader, headerName)
    }
    /**
     * 
     * @param value
     */
    public async openHyperlink(value){
        await this.click(locators.hyperlinkPath, value);
    }
    /**
     * 
     * @param value1
     * @param value2
     */
    public async selectDropdown(value1, value2){
        await this.click(locators.dropdownPath, value1);
        await this.click(this.replaceParams(locators.dropdownSelect, value1, value2));
    }
    /**
     * 
     * @param name 
     * @returns 
     */
    public async verifyEmAppName(name):Promise<boolean>{
        return await this.isPresent(locators.emAppNamePath,name);
    }
    /**
     * 
     * @param value
     */
    public async expandAndCollapse(value){
        await this.click(locators.expandCollapsePath, value);
    }
    /**
     * 
     * @param value
     * @returns
     */
    public async verifyText(value):Promise<boolean>{
        return await this.isPresent(locators.textName, value);
    }
    /**
     * 
     * @param value
     */
    public async clickButton(value){
        await this.click(locators.button, value);
    }
    /**
     * 
     * @param value
     * @returns
     */
    public async verifyButton(value):Promise<boolean>{
        return await this.isPresent(locators.button, value);
    }
    /**
     * 
     * @param value
     * @returns
     */
    public async verifyWarning(value):Promise<boolean>{
        return await this.isPresent(locators.warning, value);
    }
    /**
     * 
     * @param value
     */
    public async textareaInput(value1, value2){
        await this.setValue(locators.textareaPath, value1, value2);
        await browser.keys("Return");
    }
    /**
     * 
     * @param value
     */
    public async clickCheckbox(value){
       await this.click(locators.checkboxPath, value);
    }
    /**
     * 
     * @param value
     */
    public async clickfirstOperation(value){
        await this.click(locators.firstOperation, value);
    }
    /**
     * 
     * @param value
     */
    public async clickSecondOperation(value){
        await this.click(locators.secondOperation, value);
    }
    /**
     * 
     * @param value
     */
    public async clickThirdOperation(value){
        await this.click(locators.thirdOperation, value);
    }
    /**
     * 
     * @param value
     */
    public async clickFourthOperation(value){
        await this.click(locators.fourthOperation, value);
    }
    /**
     * 
     * @param value
     */
    public async clickFifthOperation(value){
        await this.click(locators.fifthOperation, value);
    }
    /**
     * 
     * @param value
     * @returns
     */
    public async verifyDeployedSnapshot(value):Promise<boolean>{
        return await this.isPresent(locators.deployedSnapshot, value);
    }
    /***
     * Clear the value
     * @param locator 
     * @param param
     * @returns      
     */    
    public async clearValue(locator, ...param){
        locator = this.replaceParams(locator,param);
        // await $(locator).waitForEnabled();
        await (await $(locator)).clearValue();
    }
    /**
     * 
     * @param label
     */
    public async clearInputValue(label){
        await this.clearValue(locators.textareaPath, label);
    }
    /**
     * 
     * @param label
     */
    public async delete(label){
        await this.click(locators.deletePath, label);
    }
    public async deleteDate(){
        const locator = await this.replaceParams(locators.dateInput,['Date']);
        const date  = await $(locator).getAttribute('value');
        // console.log(date);
        const param = await date.slice(6)+'-'+date.slice(0,2)+'-'+date.slice(3,5);
        await this.click(locators.deletePath, param);
    }
    /**
     * 
     * @param label
     */
    public async clickScheduleEdit(label){
        await this.click(locators.scheduleEdit, label);
    }
    /**
     * 
     * @param label
     */
    public async clickScheduleView(label){
        await this.click(locators.scheduleView, label);
    }
    /**
     * 
     * @param label
     */
    public async clickScheduleDate(label){
        await this.click(locators.scheduleDate, label);
    }
    /**
     * 
     * @param label
     */
    public async clickScheduleDefault(label){
        await this.click(locators.scheduleDefault, label);
    }
    /**
     * 
     * @param label
     */
    public async clickScheduleDelete(label){
        await this.click(locators.scheduleDelete, label);
    }
    /**
     * 
     * @param value1
     */
    public async selectDate(value1){
        await this.click(locators.dateInput, value1);
        await this.waitFor(1000);
        await this.click(locators.calenderPath);
    }
    /**
     * 
     * @param label
     */
    public async clickFirstCheckbox(label){
        await this.click(locators.firstCheckbox, label);
    }
    /**
     * 
     * @param label
     */
    public async clickSecondCheckbox(label){
        await this.click(locators.secondCheckbox, label);
    }
    /**
     * 
     * @param label
     */
    public async clickThirdCheckbox(label){
        await this.click(locators.thirdCheckbox, label);
    }
    /**
     * 
     * @param value
     * @returns
     */
    public async verifyDefaultSchedule(value):Promise<boolean>{
        return await this.isPresent(locators.defaultSchedule, value);
    }
     /**
     * 
     * @param label
     */
     public async clickChangeType(label){
        await this.click(locators.changeTypeDrop, label);
    }
    /**
     * 
     * @param value1
     * @param value2
     * @returns
     */
    public async verifyHistory(value1, value2):Promise<boolean>{
        return await this.isPresent(this.replaceParams(locators.historyPath, value1, value2));
    }
    /**
     * 
     * @param value
     * @returns
     */
    public async verifyFirstHeader(value):Promise<boolean>{
        return await this.isPresent(locators.headerPathFirst, value);
    }
    /**
     * 
     * @param value
     * @returns
     */
    public async verifyNewHeader(value):Promise<boolean>{
        return await this.isPresent(locators.headerPath, value);
    }
}

export default new EmPage()