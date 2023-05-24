import RestBasePage from "../rest.base.page";
import {v4 as uuidv4} from 'uuid';

const jwt = require('jsonwebtoken');
//const uuidv4 = require('uuid');
const expect = require('chai').expect;
const assert = require('chai').assert;

class OpenChannel extends RestBasePage{
    private generateToken(brandId){
        let jwtSecret = '83bf3d30-11fe-11e9-bc42-526af7768f64';
        let currentTimestamp = Math.floor(Date.now() / 1000);
        let signedToken = "Bearer "+jwt.sign({
            aud : brandId,
            iat : currentTimestamp,
            nbf : currentTimestamp - 30,
            exp: currentTimestamp + 90
          }, jwtSecret, { algorithm: 'HS256' });
        console.log('Auth : '+signedToken);
        return signedToken;
    }

    public async getApiKey(channelName, brandId){
        let endpoint = "/v1/notifications/channels/"+channelName+"/brands/"+brandId;
        let token = await this.generateToken(brandId);
        let response = await this.triggerGet(endpoint,token);
        expect(response.status).to.equal(200);

        let apiKey = response.body.apiKey;
        console.log("API Key : "+apiKey);
        expect(apiKey).to.not.equal(null);
        return apiKey;
    }

    public getRandomUUID(){
        return uuidv4();
    }

    public async escalateChatToAgent(channelName, brandId, channelUserId, payload){
        let endpoint = "/v1/notifications/channels/"+channelName+"/brands/"+brandId+"/users/"+channelUserId+"/messages";
        let response = await this.triggerPost(endpoint,await this.getApiKey(channelName,brandId),payload);
        let messageId = response.body.messageId;
        console.log("Mesage ID : "+messageId);
        expect(messageId).to.not.equal(null);
        return messageId;
    }

    public async getChannelName(){
        let channelName = "e2etest";
        if(typeof process.env.CHANNEL_NAME !== 'undefined' && process.env.CHANNEL_NAME != ''){
            channelName = process.env.CHANNEL_NAME;
        }
        return channelName;
    }

    public async getChannelUserId(){
        let channelUserId = "8f341a10-1c96-4b6c-8582-0d1ba3cb50a7";
        if(typeof process.env.CHANNEL_USER_ID !== 'undefined' && process.env.CHANNEL_USER_ID != ''){
            channelUserId = process.env.CHANNEL_USER_ID;
        }
        return channelUserId;
    }

    public async getBrandId(){
        let brandId = "salesdemo";
        if(typeof process.env.BRAND_ID !== 'undefined' && process.env.BRAND_ID != ''){
            brandId = process.env.BRAND_ID;
        }
        return brandId;
    }
}
export default new OpenChannel()