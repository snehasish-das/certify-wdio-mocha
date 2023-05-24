import openChannelPage from '../../../pages/openchannel/openChannel.page';
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Open Channel tests', async() => {
    // before('Login and navigate to Agent console', async() =>{
    //     await homePage.navigateTo(env.dc_assist_console);
    //     await homePage.login(users.dc_agent.username,users.dc_agent.password,users.dc_agent.loginMode);
    //     await homePage.waitFor(5000);
    // });
    it('TestID=10, TestName=Escalate chat via open channel', async() => {
        let channelName = openChannelPage.getChannelName(); 
        let brandId = openChannelPage.getBrandId();
        let channelUserId = openChannelPage.getChannelUserId();
        //let randomUUID = openChannelPage.getRandomUUID();
        let payload = "{\n" +
        "  \"channelMessageId\": \""+openChannelPage.getRandomUUID()+"\",\n" +
        "  \"context\": {\n" +
        "    \"_queue\": \"default\",   \n" +
        "    \"sourceType\": \"e2etest_mca\"  \n" +
        "  },\n" +
        "  \"content\": {\n" +
        "    \"chat\": {\n" +
        "      \"text\": \"dc_auto_agent please \"\n" +
        "    }\n" +
        "  }\n" +
        "}";

        //Escalate chat and get message ID
        await JSON.stringify(await openChannelPage.escalateChatToAgent(channelName,brandId,channelUserId,payload));
    });
    it('TestID=13, TestName=Escalate chat to agent with chat history via Open Channel', async() => {
        let channelName = openChannelPage.getChannelName(); 
        let brandId = openChannelPage.getBrandId();
        let channelUserId = openChannelPage.getChannelUserId();
        let currentTimestamp = Math.floor(Date.now() / 1000);
        let payload =  "{\n" +
        "  \"channelMessageId\": \""+openChannelPage.getRandomUUID()+"\",\n" +
        "  \"context\": {\n" +
        "    \"_queue\": \"default\",   \n" +
        "    \"sourceType\": \"slack_mca\"  \n" +
        "  },\n" +
        "  \"content\": {\n" +
        "    \"history\": [\n" +
        "      {\n" +
        "        \"input\": \"Can I find out about TVs that are on sale\",\n" +
        "        \"response\": \"Sure. Are you interested in a specific brand?\",\n" +
        "        \"timestamp\": \""+ (currentTimestamp - 30) +"\"\n" +
        "      },\n" +
        "      {\n" +
        "        \"input\": \"I really like Sony\",\n" +
        "        \"response\": \"Unfortunately we do not have any Sony sets on sale this week.\",\n" +
        "        \"timestamp\": \""+(currentTimestamp - 20)+"\"\n" +
        "      },\n" +
        "      {\n" +
        "        \"input\": \"Can I chat with an agent?\",\n" +
        "        \"response\": \"Sure, hang on a moment while I find one of our experienced sales agents to help you\",\n" +
        "        \"timestamp\": \""+(currentTimestamp - 10)+"\"\n" +
        "      }\n" +
        "    ]\n" +
        "  }\n" +
        "}";

        //Escalate chat and get message ID
        await JSON.stringify(await openChannelPage.escalateChatToAgent(channelName,brandId,channelUserId,payload));
    });
    it('TestID=14, TestName=User navigation via Open Channel', async() => {
        let channelName = openChannelPage.getChannelName(); 
        let brandId = openChannelPage.getBrandId();
        let channelUserId = openChannelPage.getChannelUserId();
        let currentTimestamp = Math.floor(Date.now() / 1000);
        let eventType=["chat_window_maximized","chat_window_lost_focus","chat_window_closed","chat_window_minimized","chat_abandoned","user_typing_start","user_typing_stop"]
        for(let i=0; i<eventType.length; i++){
            let payload =  "{\n" +
            "  \"channelMessageId\": \""+openChannelPage.getRandomUUID()+"\",\n" +
            "  \"context\": {\n" +
            "    \"_event\": {\n" +
            "        \"type\": \""+eventType[i]+"\"\n" +
            "    }\n" +
            "  }\n" +
            "}";

            //Escalate chat and get message ID
            await JSON.stringify(await openChannelPage.escalateChatToAgent(channelName,brandId,channelUserId,payload));
        }
    });
});