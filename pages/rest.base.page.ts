import BasePage from "./base.page";

const env = require('../config/environment');
const users = require('../config/users');
const supertest = require('supertest');
const request = supertest(env.rest_base_url);

export default class RestBasePage extends BasePage{
    /**
     * trigger get calls
     * @param endpoint 
     * @param auth 
     */
    protected async triggerGet(endpoint, auth){
        let response = await request.get(endpoint).set('Content-Type','application/json').set('Authorization',`${auth}`);
        console.log("GET Response:\n"+JSON.stringify(response.body));
        this.printDetails(response);
        return response;
    }

    protected async triggerPost(endpoint, auth, payload){
        let response = await request.post(endpoint).set('Content-Type','application/json').set('Authorization',`${auth}`).send(payload);
        console.log("POST Response:\n"+JSON.stringify(response.body));
        this.printDetails(response);
        return response;
    }

    private async printDetails(res){
        //console.log("Inside check status");
        const reqData = JSON.parse(JSON.stringify(res)).req;
        console.log(` 
        request-method  : ${JSON.stringify(reqData.method)} 
        request-url     : ${JSON.stringify(reqData.url)}
        request-data    : ${JSON.stringify(reqData.data)}
        request-headers : ${JSON.stringify(reqData.headers)}
        reponse-status  : ${JSON.stringify(res.status)}
        reponse-body    : ${JSON.stringify(res.body)}
        `
        );
    }
}