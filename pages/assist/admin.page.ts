import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
const env = require('../../config/environment');
const users = require('../../config/users')
const locators = require('../../resources/locators/assist/adminPage')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminPage extends BasePage {

    /**
    * Navigate to any admin menu item using this method
    * @param menu
    */
    public async clickMenu (menu: string) {
        await this.click(locators.mainMenu,menu);
    }

    /**
     * This method is used to create new entries e.g. User, Skill, Team, Queue
     * @param payload 
     * @param skills 
     * @param teams 
     */
    public async createEntity(payload: Map<string,string>, skills: Array<string>, teams: Array<string>){
        await this.click(locators.createIcon);
        for(let key of payload.keys()){
            try{
                await this.setValue(locators.fieldValue,payload.get(key),key);
            }
            catch(e){
                await this.click(locators.dropdownIcon,key);
                await this.click(locators.dropdownValue,payload.get(key));
            }
        }

        if(skills != null && skills.length>0){
            await this.click(locators.selectTab,'Skill');
            await this.click(locators.tabAddIcon);
            for(let skill in skills){
                await this.click(locators.tabCheckbox,skill);
            }
        }

        if(teams != null && teams.length>0){
            await this.click(locators.selectTab,'Manages');
            await this.click(locators.addUserTeamActionIcon);
            for(let team in teams){
                await this.click(locators.tabCheckbox,team);
            }
        }
        await this.click(locators.button,'Submit');
    }
}

export default new AdminPage()