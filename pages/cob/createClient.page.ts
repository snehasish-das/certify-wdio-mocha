import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../base.page';
import homePage from '../home.page';
const locators = require('../../resources/locators/cob/create')
const env = require('../../config/environment');



/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateClient extends BasePage {
    /**
     * search for a particular client by name
     * @param payloadFilePath 
     */
    public async create(payloadFilePath){
        //Create flow begins
        let finalPath = "../../resources/testdata/"+payloadFilePath;
        console.log("Payoad File : "+finalPath);
        let payload = require(finalPath);
        await this.waitFor(5000);
        for(let key in payload){
            if(await this.isVisible(locators.textInput,key)){
                await this.setValue(locators.textInput,payload[key],key);
            }else if(await this.isVisible(locators.dropdown,key)){
                await this.click(locators.dropdown,key);
                await this.click(locators.dropdownItem,payload[key]);
            }else{
                await payload[key].split(',').forEach(element => {
                    this.click(locators.checkbox,element);
                });
            }
            if(await this.isVisible(locators.nextButton)){
                await this.click(locators.nextButton);
            }
        }
        
        if(await this.isVisible(locators.nextButton)){
            await this.click(locators.nextButton);
        }else{
            await this.click(locators.submitButton);
        }

        homePage.navigateTo(env.cob_home);
    }

    /**
     * search for a particular client by name
     * @param payloadFilePath 
     */
    public async update(payloadFilePath){
        //Create flow begins
        let finalPath = "../../resources/testdata/"+payloadFilePath;
        console.log("Payoad File : "+finalPath);
        let payload = require(finalPath);
        await this.waitFor(5000);
        for(let key in payload){
            if(await this.isVisible(locators.textInput,key)){
                await this.setValue(locators.textInput,payload[key],key);
            }else if(await this.isVisible(locators.dropdown,key)){
                await this.click(locators.dropdown,key);
                await this.click(locators.dropdownItem,payload[key]);
            }else{
                if(await this.isVisible(locators.nextButton)){
                    await this.click(locators.nextButton);
                }
                await payload[key].split(',').forEach(element => {
                    if(this.isVisible(locators.checkbox,element)){
                        this.click(locators.checkbox,element);
                    }else{
                        if(this.isVisible(locators.textInput,key)){
                            this.setValue(locators.textInput,payload[key],key);
                        }else if(this.isVisible(locators.dropdown,key)){
                            this.click(locators.dropdown,key);
                            this.click(locators.dropdownItem,payload[key]);
                        }else{
                            payload[key].split(',').forEach(element => {
                                this.click(locators.checkbox,element);
                            });
                        }
                    }
                });
            }
        }
        
        while(await this.isVisible(locators.nextButton)){
            await this.click(locators.nextButton);
        }
        
        if(await this.isVisible(locators.submitButton)){
            await this.click(locators.submitButton);
        }

        homePage.navigateTo(env.cob_home);
    }
}

export default new CreateClient()