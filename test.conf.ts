const d = new Date();
let time = d.getTime();
let randomNum = time.toString().substring(7, 13);

exports.config = {
    user: process.env.LT_USERNAME || "soujanya1706",
    key: process.env.LT_ACCESS_KEY || "Z4m2haoFKRTWsn7txsS7rUVTCFYJrlvrOYBLUmMohgRJhCt3oV",
  
     
    services: [
      ['lambdatest', {
          tunnel: true  //always set tunnel to true
      }]
    ],
    lambdatest: {
             logLevel: 'silent'   //stop test logs creation 
          },

    updateJob: false,
    specs: ["./tests/**/messaging/*.ts"],
    exclude: [],
  
    capabilities: [
      {
        browserName: "chrome",
        version: "64.0",
        platform: "WIN10",
        name: "webdriverIO_Messagingtests",
        build: "wdio-Build"+randomNum,
        //visual: true,
        //video: true,
        //console: true,
        //network: true,
        tunnel: true,
      }],
    
      
    //logFile : './lambdatestlog/result-'+randomNum+'.log',
    product:'appAutomation',
    sync: true,
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 300000,
    connectionRetryTimeout: 300000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: "soujanya1706:Z4m2haoFKRTWsn7txsS7rUVTCFYJrlvrOYBLUmMohgRJhCt3oV@hub.lambdatest.com",
    port: 80,

   
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 90000,
    },
};