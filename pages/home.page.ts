import { ChainablePromiseElement } from 'webdriverio';

import BasePage from './base.page';
const env = require("../config/environment");
const users = require("../config/users")
const locators = require("../resources/locators/commonPage")
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {

    /**
    * Navigate to the intended env using this method
    * @param url
    */
    public async navigateTo(url: string) {
        console.log("Current URL : "+url);
        console.log("process.env.HOME : "+process.env.HOME_URL);
        if(typeof process.env.HOME_URL !== 'undefined' && process.env.HOME_URL != ''){
            url = process.env.HOME_URL;
        }
        console.log("Final URL : "+url);
        await browser.url(url);
        await browser.pause(2000)
    }

    /**
     * login to the application using the credential available in config.json
     * supports login via form or okta
     * @param userKey 
     */
    public async login(username: string, password: string, securityAnswer: string) {
        console.log("Login via okta credentials")
        await this.setValue(locators.loginInput, username, 'Username')
        await this.click(locators.loginButton, 'Next')
        await this.setValue(locators.loginInput, password, 'Password')
        await this.click(locators.loginButton, 'Sign')
        await this.setValue(locators.loginInput1, securityAnswer, 'Answer')
        await this.click(locators.loginButton, 'Verify')
    }

    /**
     * assist admin console standalone login
     * @param username 
     * @param password 
     */
    public async assistLogin(username: string, password: string) {
        console.log("Login via Assist standalone credentials")
        await this.setValue(locators.loginInput, username, 'Username')
        await this.setValue(locators.loginInput, password, 'Password')
        await this.click(locators.loginButton, 'SUBMIT')
    }

    /**
     * assist admin console standalone login
     * @param username 
     * @param password 
     */
    public async answersLogin(username: string, password: string) {
        console.log("Login via Answers standalone credentials")
        await this.setValue(locators.loginInput1, username, 'username')
        await this.setValue(locators.loginInput1, password, 'password')
        await this.click(locators.loginButton1, 'SIGN')
    }

     /**To select Workspace/client name on EC Dashboard */
     public async selectClientName(clientname: string)
     {
         console.log("Selecting the required client: "+clientname);
         await this.click(locators.chooseWorkspace);
         await this.click(locators.clickWorkspace, clientname);
     }
 
     /**To select Workspace app name */
     public async chooseWorkspace (workspace : string){
         if(this.isVisible(locators.chooseWorkspaceHeader)){
             let spaces = workspace.split('>>');
             spaces.forEach(space => {
                 this.click(locators.chooseWorkspace,space);
             });
         }
     }

    /**
    * Navigate to any product using this method e.g. click Assist to navigate to self serve
    * @param tile
    */
    public async clickTile(tile: string) {
        await this.click(locators.tileMenu, tile);
    }
}

export default new HomePage()