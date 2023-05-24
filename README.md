# certify

Execute a particular test suite
`npx wdio ./wdio.conf.ts --suite carddesigner`

Execute a script/suite configured in package.json
`npm test`

Execute a single test/spec
`npx wdio ./wdio.conf.ts --spec ./tests/component/carddesigner/PaymentCardTests.ts`

Execute multiple specs/tests
`npx wdio ./wdio.conf.ts --spec ./tests/integration/openchannel/OpenChannel.ts --spec ./tests/component/carddesigner/PaymentCardTests.ts`

Generate Report and open (make sure you are not connected to vpn)
`allure generate --clean && allure open`

Check and update depenencies to latest version
`ncu -u` followed by `npm install`

Execute a test with dynamic URL
`HOME_URL=https://staging.developer.cloud.247-inc.net/home npx wdio ./wdio.conf.ts --spec ./tests/component/carddesigner/PaymentCardTests.ts`


Execute Tests to update TCM -- *FYI only*
`BUILD_NUMBER=6 NODE_NAME='Test adhoc run' npx wdio ./wdio.conf.ts --spec ./tests/component/carddesigner/PaymentCardTests.ts`