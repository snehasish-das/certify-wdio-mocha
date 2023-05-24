import type { Options } from '@wdio/types'
import { visitFunctionBody } from 'typescript';
const allure = require('allure-commandline')
require('global-agent/bootstrap')
const fs = require('fs');  //fs module to read json file
const path = require('path'); //path for screenshot file save
const supertest = require('supertest');
const request = supertest('http://dev-cache01.scs.dev.east.cloud.247-inc.net/attest/api');
const request_jira = supertest('https://247inc.atlassian.net/rest/api');  // JIRA url
const FormData = require('form-data');
const fetch = require('node-fetch');




// const drivers = {
//     chrome: { version: '104.0.5112.81' }, // https://chromedriver.chromium.org/
//     firefox: { version: '0.29.1' }, // https://github.com/mozilla/geckodriver/releases
//     chromiumedge: { version: '85.0.564.70' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
// }

export const config: Options.Testrunner = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    //
    // =====================
    // ts-node Configurations
    // =====================
    //
    // You can write tests using TypeScript to get autocompletion and type safety.
    // You will need typescript and ts-node installed as devDependencies.
    // WebdriverIO will automatically detect if these dependencies are installed
    // and will compile your config and tests for you.
    // If you need to configure how ts-node runs please use the
    // environment variables for ts-node or use wdio config's autoCompileOpts section.
    //

    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
        // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
        // do please make sure "tsconfig-paths" is installed as dependency
        // tsConfigPathsOpts: {
        //     baseUrl: './'
        // }
    },
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        './tests/**/*.ts'
    ],
    // define specific suites
    suites: {
        assist: [
            './tests/**/assist/adminconsole/*.ts'
        ],
        answers: [
            './tests/**/answers/*.ts'
        ],
        carddesigner: [
            './tests/**/carddesigner/*.ts'
        ],
        conversations: [
            './tests/**/conversations/**/*.ts'
        ],
        openchannel: [
            './tests/**/openchannel/*.ts'
        ],
        mss: [
            './tests/**/messaging/*.ts'
        ],
        voiceportal: [
            './tests/**/voiceportal/*.ts'
        ],
        cob: [
            './tests/**/cob/*.ts'
        ],
        butterfly: [
            './tests/**/butterfly/*.ts'
        ],
        smoke: [
            './tests/smoke/*.ts'
        ],
        otherFeature: [
            // ...
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true,
        // proxy: {
        //     proxyType: "manual",
        //     httpProxy: "http://proxy-grp1.lb-priv.sv2.247-inc.net:3128"
        // }
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    //baseUrl: 'http://staging.developer.247-inc.net/home',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 120000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 60000,
    //
    // Default request retries count
    connectionRetryCount: 1,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [
        ['chromedriver', {
            port: 9000,
            args: ['--whitelisted-ips=', '--disable-dev-shm-usage', '--no-sandbox', '--headless', 'window-size=1024,768']
        }]
        //['selenium-standalone', {  }]
    ],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [
        ['spec', {
            symbols: {
                passed: '[PASS]',
                failed: '[FAIL]'
            },
            addConsoleLogs: true,
            realtimeReporting: true,
            showPreface: true,
            onlyFailures: false
        }],
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }],
        ['junit', {
            outputDir: './junitReports',
            outputFileFormat: function (options) { // optional
                return `results-${options.cid}.${options.capabilities}.${new Date().getTime()}.xml`
            }
        }],
        ['json', {
            stdout: true,
            outputDir: './jsonResults',
            outputFileFormat: function (opts) {
                return `results-${opts.cid}.${opts.capabilities}.json`
            }
        }]
    ],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 180000
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {Number} exitCode 0 - success, 1 - fail
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {Number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: async function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: function (test, context) {
        browser.maximizeWindow();
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */



    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
            await browser.saveScreenshot("./screenshots/image1.png");

        }

        //Report back to TCM tool
        if (process.env.BUILD_NUMBER != null) {
            let nodeName = process.env.NODE_NAME;
            let testID = test.title.split(',')[0].split('=')[1];
            let endpoint = '/releases/' + nodeName + '/' + testID;
            let auth = 'Basic c25laGFzaXNoLmRhc0AyNDcuYWk6V2VsY29tZTEyMyQ=';
            let link = "https://cicd.cloud.247-inc.net/job/certify-test-framework/job/TCM_Adhoc_Test_Run/" + process.env.BUILD_NUMBER;
            let testStatus = passed ? "Passed" : "Failed";
            let payload = '{ "test_status": "' + testStatus + '","test_run_link": "' + link + '"}';
            console.log("Node: " + nodeName + ", Test ID: " + testID + ", Endpoint: " + endpoint + ", payload: " + payload);
            let response = await request.patch(endpoint).set('Content-Type', 'application/json').set('Authorization', auth).send(payload);
            //console.log(response);  

            if (testStatus == "Failed") {
                //Getting the required details for Bug Description
                let envUrl = process.env.HOME;
                console.log("envi URL-->", +envUrl);
                let jobLink = "https://cicd.cloud.247-inc.net/job/certify-test-framework/job/TCM_Adhoc_Test_Run/";
                let testTitle = test.title.split(',')[1].split('=')[1];
                let productName = test.title.split(',')[2].split('=')[1];
                let jsonData = JSON.parse(fs.readFileSync('JiraApiPayload.json', 'utf-8'));
                let assignee = JSON.parse(fs.readFileSync('productAssignee.json', 'utf-8'));

                //Building Defect Summary and Description text from above variables
                jsonData.fields.summary = testTitle + " -Test Case failed in TCM";
                jsonData.fields.description.content[0].content[0].text = "Environment URL :" + envUrl + "\n\nError Logs:" + error + "\n\nPlease find screenshot in attachment \n\n JOB URL:" + jobLink;

                //Fetching the Assginee Name from ProductAssignee.json file
                for (let i = 0; i < assignee.length; i++) {
                    if (assignee[i].Product == productName) //mapping assignee & product to defect based on TC ProductName
                    {
                        jsonData.fields.assignee.id = assignee[i].Assignee;
                        jsonData.fields.customfield_20030[0].id = assignee[i].ProductId;
                        jsonData.fields.customfield_20030[0].value = assignee[i].Product;
                    }
                }
                //Forming JIRA Api for Defect Creation
                let jiraendpoint = '/3/issue';
                let jiraauth = 'Basic c293amFueWEuckAyNDcuYWk6QVRBVFQzeEZmR0Ywb2xZZGFoVkU2WGZuZmdYMjVZT2Rsb25NVmJlTkx2QXplc2hJQ2hCc1htd3dCdVRKQnBmZUFZTVUtSVJzNWkxLXNFcXF6R1piQm5XZm1QY0pLdi1HSm9aZmxNNWtpRzZNZUhGc3lGeEN5NkJabGdlNjBwdEZOMTZyazd3RGFqMW1PR21PU0J6NWZ0TXd2TWlMWFd2OTFUOERnX2J0cDRCSUZ6cmNWZ240Ym1VPTZCQzQ0ODU3';
                //let cookie = 'atlassian.xsrf.token=BFJ5-99LY-C2ZS-U889_30c11cf1616c494a84324c3e12927a28b3f8fe2d_lin';
                let cookie = 'atlassian.xsrf.token=BFJ5-99LY-C2ZS-U889_356dc135bf83ccf55701bee345fd5b56ca094044_lin';
                console.log("Complete Payload Value -->", jsonData);
                //Sending POST request to creat Defect
                let jiraresponse = await request_jira.post(jiraendpoint).set('Content-Type', 'application/json').set('Authorization', jiraauth).set('Cookie', cookie).send(jsonData);
                console.log("JIRA Bug Details-->" + JSON.stringify(jiraresponse["text"]));
                let textValue = JSON.parse(jiraresponse["text"]);
                let BugID = textValue.key;
                console.log("JIRA Bug Key : " + BugID);

                //--------Sending POST request to attach the screenshot to created defect---------
                let BugIdvalue = textValue.id;
                console.log("Bug ID" + BugIdvalue);

                const filePath = './screenshots/image1.png';
                const form = new FormData();
                const stats = fs.statSync(filePath);
                const fileSizeInBytes = stats.size;
                const fileStream = fs.createReadStream(filePath);

                form.append('file', fileStream, { knownLength: fileSizeInBytes });

                fetch('https://247inc.atlassian.net/rest/api/3/issue/' + BugIdvalue + '/attachments',
                    {
                        method: 'POST',
                        body: form,
                        headers: {
                            'Authorization': jiraauth,
                            'Accept': 'application/json',
                            'X-Atlassian-Token': 'no-check',
                            'Cookie': cookie,

                        }
                    })
                    .then(response => {
                        console.log(
                            `Response jira2: ${response.status} ${response.statusText}`
                        );
                        return response.text();
                    })
                    .then(text => console.log(text))
                    .catch(err => console.error(err));


                //Updating the BugID back to TCM Tool
                 let data='{ "bug_no": "'+BugID+'"}';
                 let tcmresponse = await request.patch(endpoint).set('Content-Type','application/json').set('Authorization',auth).send(data);
                 console.log("BugID update Response :"+tcmresponse); 
            }
        }



    },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) {
    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function (exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise<void>((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
}
