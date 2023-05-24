import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Admin/companyListPage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CompanyListpage extends BasePage {
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
     * verify the table header e.g. Company
     * @param headerName 
     * @returns 
     */
    public async verifyHeader(headerName):Promise<boolean>{
        return await this.isPresent(locators.tableHeader,headerName)
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
     * @param data 
     * @param tooltip 
     * @returns 
     */
    public async verifyTooltip(data,tooltip):Promise<boolean>{
        await this.hover(locators.tableData,data);
        return await this.isPresent(locators.tableDataTooltip,tooltip)
    }

    /**
     * 
     * @param clientName
     * 
     */
    public async verifyCompanyHyperlink(clientName){
        await this.click(locators.companyName,clientName)
    }
    /**
     * 
     * @param clientName
     * @returns
     */
    public async verifyCompanyName(clientName: string):Promise<boolean>{
        return await this.isPresent(locators.companyText,clientName)
    }
    /**
     * @buttonName
     * @returns 
     */
     public async verifyButton(buttonName){
        return await this.click(locators.button, buttonName);
    }

    /**
     * @param
     * @returns 
     */
    public async clickRow(){
        return await this.click(locators.rowSelect);
    }

    /**
     * 
     * @param buttonName
     * @returns 
     */
    public async verifyAddNewCompanylink(buttonName: string){
        return await this.click(locators.addNewCompany,buttonName);
    }
     /**
     * 
     * @param fieldName
     * @returns 
     */
    public async verifyListOfFields(fieldName):Promise<boolean>{
        return await this.isPresent(locators.fields,fieldName);
    }
     /**
     * @buttonName
     * @returns 
     */
    public async checkSaveButton(buttonName):Promise<boolean>{
        return await this.isPresent(locators.button, buttonName);
    }
    /**
     * 
     * @returns 
     */
    public async verifyChoseFileButton():Promise<boolean>{
        return await this.isPresent(locators.choseFile);
    }
    /**
     * @param labelName
     * @returns 
     */
    public async verifyHintLabel(labelName):Promise<boolean>{
        return await this.isPresent(locators.hintLabel, labelName);
    }
    /**
     * @param labelName
     * @returns 
     */
    public async verifyHintLabelIP(labelName):Promise<boolean>{
        return await this.isPresent(locators.hintLabel1, labelName);
    }
    /**
     * @param labelName
     * @returns 
     */
    public async verifyHintLabelAdmin(labelName):Promise<boolean>{
        return await this.isPresent(locators.hintLabel2, labelName);
    }
    /**
     * @param labelName
     * @returns 
     */
    public async verifyHintLabelA(labelName):Promise<boolean>{
        return await this.isPresent(locators.hintLabel3, labelName);
    }
    /**
     * @param warningMessage
     * @returns 
     */
    public async verifyWarningMessage(warningMessage):Promise<boolean>{
        return await this.isPresent(locators.hintLabel1, warningMessage);
    }
    /**
     * @param input
     * @param value
     * @returns 
     */
    public async nameInput(input, value){
        // await this.switchToFrame(locators.chatContainerFrame);
        return await this.setValue(locators.inputField, input, value);
        // await browser.keys("Return");
        // await this.switchToDefault();
    }
    /**
     * @param input
     */
    public async companyDescriptionInput(input){
        await this.setValue(locators.descriptionInput, input);
    }
    /**
     * @param input
     */
    public async contractDescriptionInput(input){
        await this.setValue(locators.descriptionInput1, input);
    }
    /**
     * 
     * @param value
     * @param input
     */
    public async verifyDropdown(input, value){
        await this.click(locators.dropdownPath, value);
        await this.setValue(locators.dropdownInput, input, value)
        await this.waitFor(1000);
        await browser.keys("Return");
    }
    /**
     * 
     * @param value
     * @param input
     */
    public async verifyDropdown1(value){
        await this.click(locators.dropdownPath, value);
        await this.waitFor(1000);
        await browser.keys("Return");
    }
    /**
     * 
     * @param value1
     * @param value2
     * @param value3
     */
    public async verifyDropdownEdit(value1, value2, value3){
        await this.click(this.replaceParams(locators.dropdownPathEdit, value2, value3));
        await this.setValue(this.replaceParams(locators.dropdownInputEdit, value2, value3), value1)
        await this.waitFor(1000);
        await browser.keys("Return");
    }
    /**
     * 
     * @param value1
     * @param value2
     */
    public async verifyDropdownSelectAll(value1, value2){
        await this.click(locators.dropdownPath, value1);
        await this.click(this.replaceParams(locators.dropdownSelectAll, value1, value2))
        await this.waitFor(1000);
        await browser.keys("Return");
    }
    /**
     * 
     * @param value1
     * @param value2
     * @param value3
     */
    public async verifyDropdownSelectAllEdit(value1, value2, value3){
        await this.click(this.replaceParams(locators.dropdownPathEdit, value1, value2));
        await this.click(this.replaceParams(locators.dropdownSelectAllEdit, value1, value2, value3))
        await this.waitFor(1000);
        await browser.keys("Return");
    }
    /**
     * @param linkName
     * @returns
     * 
     */
    public async verifyAddAnotherLink(linkName){
        return await this.click(locators.addAnotherLink, linkName);
    }
    /**
     * @param contractName
     */
    public async clickContract(contractName){
        await this.click(locators.selectContract, contractName);
    }
    /**
     * 
     * @param contractName
     * 
     */
    public async removeContract(contractName){
        await this.click(locators.selectContract, contractName);
        await this.click(locators.removeContract);
    }
    /**
     * @param value
     */
    public async clickSomewhere(value){
        await this.click(locators.clickAnywhere, value);
        await this.waitFor(1000);
    }
     /**
     * @param input
     * @param value
     */
    public async editInput(input, value){
        await this.setValue(locators.inputField1, input, value);
    }
    /**
     * @param input
     * @param value 
     */
    public async descriptionAndOutboundPort(input, value){
        await this.setValue(locators.inputField2, input, value);
    }
    /**
     * @param input
     * @param value 
     */
    public async descriptionAndOutboundPortEdit(input, value){
        await this.setValue(locators.inputFieldEdit2, input, value);
    }
    /**
     * @param value
     */
    public async clickCheckbox(value){
        await this.click(locators.checkboxPath, value);
        await this.waitFor(2000);
    }
    /**
     *
     * @param value
     */
    public async verifyMaxLength(value) {
        await this.getValue(locators.companyNameInput, value);
        //await expect(maxValue).toContain(value);
    }
}

export default new CompanyListpage()
