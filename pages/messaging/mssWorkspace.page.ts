import { LogicalOperator } from 'typescript';
import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';

const locators = require('../../resources/locators/messaging/mssHomeTab')
const expect = require('chai').expect;

class MssWorkspacePage extends BasePage {

    public async waitFor(miliseconds: number){
        return await browser.pause(miliseconds)
    }
    public async clickOnVersionTab()
    {
        await this.click(locators.versionsTab);
    }

    public async clickOnMainTab(tabName :String){
        await this.click(locators.messagingTab,tabName);
    }

    public async clickLeftMenuItem(menuName :String){
        await this.click(locators.leftMenuItem, menuName);
    }

    public async clickSubMenu(submenu :String) {
        await this.click(locators.subMenuItem,submenu);
    }

    
    public async selectColor(){
        await this.click(locators.colorIcon);
        await this.click(locators.selectColor);
    }

    public async selectRadioButton(value : string)
    {
        await this.click(locators.radioButton,value);
    }
    public async isSelectedRadioBtn(...params)
    {
        let locator =  this.replaceParams(locators.radioButton,params);
        return await (await $(locator)).isSelected();
    }

    public async clickButton(buttonName :string)
    {
        await this.click(locators.buttonsHome, buttonName);
    }

   

    public async assertSuccessMessage(message : string){
        if(await this.isVisible(locators.sysMessage,message))
        {
            console.log("Changes Saved successfully!!")
        }
    }

     public async getToggleState(channelName :String)
    {
        this.waitFor(10000);
        let state = await this.isVisible(locators.toggleButton);
        if (state == true)
        {
            console.log(channelName+" Toggle is ON");
            
        }
        else
        {
            console.warn(channelName+" Toggle button is OFF, so the Configuration need to be done");
            
        }
    }
    
    public async verifyToggle(){
        if(!this.isVisible(locators.toggleButton)){
            this.waitFor(10000);            
        }
       return await (await $(locators.toggleButton)).isExisting();
    }
    
    public async assertWebPreivew(){
        console.log('Finding element ');
        let isElementVisible = await this.isVisible(locators.webPreview);
        if(!isElementVisible){
            console.log('Web Preview not present');
        }
        else{
            console.log('Web Preview present');
        }
    }
    
    public async clickGeneralSetting()
    {
        await this.click(locators.generalSetting);
    }
    public async isClickableEle()
    {
      return await (await $(locators.addCxSurveyBtn)).isClickable();
    }

    public async selectClient(clientName : String)
    {
        await this.click(locators.clientname_on_popup, clientName);
        if(clientName=='Sales Demo')
        {
            await this.click(locators.clientname_on_popup, 'Default');
        }
    }
    public async selectclientname_mss()
    {
        await this.click(locators.clientname_on_popup);
    }
    
   
    public async selectRouting(value : string)
    {
        await this.click(locators.selectDropDown);
        await $(locators.selectDropDown).selectByAttribute('value', value);
    }

    public async clear(locator : string)
    {
        await (await $(locator)).clearValue();

    }
    
    public async updateVisitorMessage(text : string)
    {
        await this.click(locators.visitorMsgText);
        await this.clear(locators.visitorMsgText);
        await this.setValue(locators.visitorMsgText,text);
    }
    public async assertVerionPublishStatus(message : string){
        if(await this.isVisible(locators.publishStatus,message))
        {
            console.log("Published Successfully!!" + message)
        }
    }

}
export default new MssWorkspacePage()