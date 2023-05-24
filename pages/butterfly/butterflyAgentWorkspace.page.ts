import { LogicalOperator } from 'typescript';
import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';

const locators = require('../../../certify/resources/locators/butterfly/agentWorkspacePage')
const expect = require('chai').expect;

class ButterflyAgentWorkspacePage extends BasePage {

    public async waitFor(miliseconds: number){
        return await browser.pause(miliseconds)
    }

    public async verifySoftphone(){
        await this.switchToFrame(locators.frameElement);
        if(await this.isVisible(locators.softphone))
        {
            console.log("SoftPhone Widget is present on Agent Workspace");
        }  
        else{
            console.log("SoftPhone Widget is NOT present on Agent Workspace");
        }     
    }
    public async getSoftphoneDetails()
    {
        let agentName = await this.getValue(locators.phoneWorkerName);
        console.log("Agent name : "+agentName);
        if(await this.isVisible(locators.emegencyButton))
        {
            console.log("Emergency button is present on Agent Workspace");
        }     

    }
    public async verifyWidgets(){
        if(await this.isVisible(locators.personalNotes))
        {
            console.log("Personal Note Widget is present on Agent Workspace");
        }
        else{
            console.log("Personal Note Widget is NOT present on Agent Workspace");
        }
        if(await this.isVisible(locators.summary))
        {
            console.log("Summary Widget is present on Agent Workspace");
        }
        else{
            console.log("Summary Widget is NOT present on Agent Workspace");
        }     
        if(await this.isVisible(locators.videoWidget))
        {
            console.log("Video Widget is present on Agent Workspace");
        }    
        else{
            console.log("Video Widget is NOT present on Agent Workspace");
        } 

    }


}
export default new ButterflyAgentWorkspacePage()