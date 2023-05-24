import { LogicalOperator } from 'typescript';
import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';

const locators = require('../../../certify/resources/locators/butterfly/dashboardPage')
const expect = require('chai').expect;

class ButterflyWorkspacePage extends BasePage {

    public async waitFor(miliseconds: number){
        return await browser.pause(miliseconds)
    }
    public async clickOnStatus()
    {
        await this.click(locators.statusTab);
    }
    public async getStatus()
    {
        let status = await this.getValue(locators.statusTab);
        console.log("Status is : "+status);
    }
    public async verifyStatus()
    {   let status = await this.getValue(locators.statusTab);
        console.log("Current Status is : "+status);
        if(status == "Offline")
        {
            console.log("Agent is Offline and not taking any calls");
        }
        else if(status == "Busy")
        {
            console.log("Agent status is busy as agent is taking a call");
        }
        else
        {
            console.log("Agent status is :"+status);
        }

    }
    public async clickLeftMenu(name :String){
        await this.click(locators.leftMenu, name);
    }

}
export default new ButterflyWorkspacePage()