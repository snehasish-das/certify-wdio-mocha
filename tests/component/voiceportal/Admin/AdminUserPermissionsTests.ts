import homePage from '../../../../pages/home.page';
import usersPage from '../../../../pages/voiceportal/Admin/userManagement.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
const locators = require('../../../../resources/locators/voiceportal/Admin/userManagementPage');

describe('Voice Portal Admin >> User Permissions Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to Admin >> User Management', async() =>{
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
    });

    it('Add a standard user with no projects', async() => {
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.fillValue(locators.emailField, 'appmgrtest6@247-inc.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await homePage.waitFor(30000);
    })

    it('Log out and login as standard user with no projects', async() => {
        await usersPage.waitUntilClickable(locators.navMenu, '');
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify user privileges of standard user with no projects', async() => {
        await usersPage.verifyText(locators.text, 'You do not have access to any projects currently').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(false));
        await homePage.waitFor(10000);
    })

    it('login and change user privileges to standard user with projects', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
        //change permissions to standard user with multiple projects
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.fillValue(locators.emailField, 'appmgrtest6@247-inc.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await usersPage.clickButton(locators.projectsSelectAll, 'UNSELECT ALL');
        await usersPage.clickButton(locators.projectsMenu, 'sample_project1');
        await usersPage.clickButton(locators.projectsMenu, 'sample_project2');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully added appmgrtest6@247-inc.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    })

    it('Log out (1) and login as standard user with projects', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify user privileges of standard user with projects', async() => {
        await usersPage.verifyText(locators.tile, 'sample_project1');
        await usersPage.verifyText(locators.tile, 'sample_project2');
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(false));
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Summary').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Trendspotter').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Call Search').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Info').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Files').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Custom Reports').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Repositories').then(value => expect(value).toBe(false));
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(15000);
        await usersPage.verifyText(locators.subTile, 'Telephony').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Web Services').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Error Audio').then(value => expect(value).toBe(false));
        await homePage.waitFor(5000);
    })

    it('login (1) and change user privileges to project admin with projects', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
        //change permissions to standard user with multiple projects
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailLink, 'appmgrtest6');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectAdminCheckbox, 'sample_project1');
        await usersPage.clickButton(locators.projectAdminCheckbox, 'sample_project2');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(5000);
    })

    it('Log out (2) and login as project admin for multiple projects', async() => {
        await usersPage.waitUntilClickable(locators.navMenu, '');
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify the user privileges of project admin with multiple projects', async() => {
        await usersPage.verifyText(locators.tile, 'sample_project1');
        await usersPage.verifyText(locators.tile, 'sample_project2');
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(true));
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.subTile, 'Summary').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Trendspotter').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Call Search').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Info').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Files').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Custom Reports').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Repositories').then(value => expect(value).toBe(false));
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.subTile, 'Telephony').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Web Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Error Audio').then(value => expect(value).toBe(false));
        //Verifying user privileges of project admin in Admin tab
        await usersPage.waitUntilClickable(locators.tile, 'Admin');
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.subTile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Company').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'User Management').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager Provisioner').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Speaker Verification').then(value => expect(value).toBe(false));
        //Verify projects page permissions
        if(await usersPage.isButtonEnabled(locators.companyDropdown, '')){
            await usersPage.clickButton(locators.companyDropdown, '');
            await homePage.waitFor(5000);
            await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        }
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.tile, 'Create New Project').then(value => expect(value).toBe(false));
        await usersPage.clickButton(locators.emailLink, 'sample_project1');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'Project Detail');
        await usersPage.verifyText(locators.button, 'Delete Project').then(value => expect(value).toBe(false));
    })

    it('Verify the add and delete user priveleges of project admin with multiple projects', async() => {
        await usersPage.waitUntilClickable(locators.subTile, 'User Management');
        await usersPage.clickButton(locators.subTile, 'User Management');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User Management');
        if(await usersPage.isButtonEnabled(locators.companyDropdown, '')){
            await usersPage.clickButton(locators.companyDropdown, '');
            await homePage.waitFor(5000);
            await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        }
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        //add priveleges
        await usersPage.isButtonEnabled(locators.button, 'ADD USER').then(value => expect(value).toBe(true));
        await usersPage.clickButton(locators.permissionDropdown, '');
        await usersPage.verifyText(locators.projectsMenu, 'Project Administrator').then(value => expect(value).toBe(false));
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.permissionDropdown, '');
        await homePage.waitFor(5000);
        //delete project admin
        await usersPage.clickButton(locators.userCheckbox, 'project_admin@tmail.com');
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        await homePage.waitFor(5000);
        //delete company admin
        await usersPage.clickButton(locators.userCheckbox, 'company_admin@tmail.com');
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        await homePage.waitFor(5000);
        //delete super user
        await usersPage.clickButton(locators.userCheckbox, 'super_user@tmail.com');
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        await homePage.waitFor(5000);
        //delete pdb admin
        await usersPage.clickButton(locators.userCheckbox, 'pdb_admin@tmail.com');
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        await homePage.waitFor(30000);
    })

    it('login (2) and change user privileges to company admin', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
        //change permissions to company admin
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await homePage.waitFor(10000);
        await usersPage.clickButton(locators.emailLink, 'appmgrtest6');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionCheckbox, 'Company Admin');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(30000);
    })

    it('Log out (3) and login as company admin', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify the user privileges of company admin', async() => {
        await usersPage.verifyText(locators.tile, 'sample_project1');
        await usersPage.verifyText(locators.tile, 'sample_project2');
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(true));
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Summary').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Trendspotter').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Call Search').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Info').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Files').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Custom Reports').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Repositories').then(value => expect(value).toBe(false));
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(15000);
        await usersPage.verifyText(locators.subTile, 'Telephony').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Web Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Error Audio').then(value => expect(value).toBe(false));
        //Verifying user privileges of project admin in Admin tab
        await usersPage.waitUntilClickable(locators.tile, 'Admin');
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Company').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'User Management').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager Provisioner').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Speaker Verification').then(value => expect(value).toBe(false));
        //Verify projects page permissions
        if(await usersPage.isButtonEnabled(locators.companyDropdown, '')){
            await usersPage.clickButton(locators.companyDropdown, '');
            await homePage.waitFor(5000);
            await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        }
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.tile, 'Create New Project').then(value => expect(value).toBe(true));
        await usersPage.clickButton(locators.emailLink, 'sample_project1');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'Project Detail');
        await homePage.waitFor(5000);
        await usersPage.isButtonEnabled(locators.button, 'Delete Project').then(value => expect(value).toBe(true));
    })

    it('Verify the add and delete user priveleges of company admin', async() => {
        await usersPage.clickButton(locators.subTile, 'User Management');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User Management');
        if(await usersPage.isButtonEnabled(locators.companyDropdown, '')){
            await usersPage.clickButton(locators.companyDropdown, '');
            await homePage.waitFor(5000);
            await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        }
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        //add priveleges
        await usersPage.isButtonEnabled(locators.button, 'ADD USER').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionDropdown, '');
        //await usersPage.verifyText(locators.projectsMenu, 'Project Administrator').then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.permissionDropdown, '');
        await homePage.waitFor(5000);
        //delete company admin
        await usersPage.clickButton(locators.userCheckbox, 'company_admin@tmail.com');
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        await homePage.waitFor(5000);
        //delete super user
        await usersPage.clickButton(locators.userCheckbox, 'super_user@tmail.com');
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        await homePage.waitFor(5000);
        //delete pdb admin
        await usersPage.clickButton(locators.userCheckbox, 'pdb_admin@tmail.com');
        await homePage.waitFor(2000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        await homePage.waitFor(30000);
    })

    it('login (3) and change user privileges to network admin', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
        //change permissions to company admin
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailLink, 'appmgrtest6');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User');
        await homePage.waitFor(5000);
        //to remove all the previous permissions
        await usersPage.clickButton(locators.permissionCheckbox, 'PDB');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionCheckbox, 'PDB');
        await homePage.waitFor(5000);
        //network admin permission
        await usersPage.clickButton(locators.permissionCheckbox, 'Network Admin');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(30000);
    })  
    
    it('Log out (4) and login as network admin', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify the user privileges of network admin', async() => {
        await usersPage.verifyText(locators.tile, 'sample_project1');
        await usersPage.verifyText(locators.tile, 'sample_project2');
        await usersPage.verifyText(locators.tile, 'sample_project3');
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(false));
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Summary').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Reports').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Trendspotter').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Call Search').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Info').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Files').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Custom Reports').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Repositories').then(value => expect(value).toBe(false));
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Telephony').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Web Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Error Audio').then(value => expect(value).toBe(false));
    })

    it('login (4) and change user privileges to Super User(RO)', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
        //change permissions to company admin
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailLink, 'appmgrtest6');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User');
        await homePage.waitFor(5000);
        //to remove all the previous permissions
        await usersPage.clickButton(locators.permissionCheckbox, 'PDB');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionCheckbox, 'PDB');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionCheckbox, 'Superuser-Readonly');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(30000);
    })

    it('Log out (5) and login as Super User(RO)', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify the user privileges of Super User(RO)', async() => {
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(false));
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Summary').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Trendspotter').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Call Search').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Info').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Files').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Custom Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Repositories').then(value => expect(value).toBe(true));
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(15000);
        await usersPage.verifyText(locators.subTile, 'Telephony').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager').then(value => expect(value).toBe(false));
        await usersPage.verifyText(locators.subTile, 'Web Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Error Audio').then(value => expect(value).toBe(true));
    })

    it('login (5) and change user privileges to Super User', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
        //change permissions to company admin
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailLink, 'appmgrtest6');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User');
        await homePage.waitFor(5000);
        //to remove all the previous permissions
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionCheckbox, 'Superuser-Readonly');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionCheckbox, 'Superuser');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(30000);
    })

    it('Log out (6) and login as Super User', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify the user privileges of Super User', async() => {
        await usersPage.verifyText(locators.tile, 'sample_project1');
        await usersPage.verifyText(locators.tile, 'sample_project2');
        await usersPage.verifyText(locators.tile, 'sample_project3');
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(true));
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Summary').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Trendspotter').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Call Search').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Info').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Files').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Custom Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Repositories').then(value => expect(value).toBe(true));
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(15000);
        await usersPage.verifyText(locators.subTile, 'Telephony').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Web Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Error Audio').then(value => expect(value).toBe(true));
        //Verifying user privileges of project admin in Admin tab
        await usersPage.waitUntilClickable(locators.tile, 'Admin');
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Company').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'User Management').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager Provisioner').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Speaker Verification').then(value => expect(value).toBe(true));
        //Verify projects page permissions
        if(await usersPage.isButtonEnabled(locators.companyDropdown, '')){
            await usersPage.clickButton(locators.companyDropdown, '');
            await homePage.waitFor(5000);
            await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        }
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.tile, 'Create New Project').then(value => expect(value).toBe(true));
        await usersPage.clickButton(locators.emailLink, 'sample_project1');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'Project Detail');
        await homePage.waitFor(5000);
        await usersPage.isButtonEnabled(locators.button, 'Delete Project').then(value => expect(value).toBe(true));
    })

    it('Verify the add and delete user priveleges of super user', async() => {
        await usersPage.clickButton(locators.subTile, 'User Management');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User Management');
        await homePage.waitFor(5000);
        if(await usersPage.isButtonEnabled(locators.companyDropdown, '')){
            await usersPage.clickButton(locators.companyDropdown, '');
            await homePage.waitFor(5000);
            await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        }
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        //add priveleges
        await usersPage.isButtonEnabled(locators.button, 'ADD USER').then(value => expect(value).toBe(true));
        await usersPage.clickButton(locators.permissionDropdown, '');
        await usersPage.verifyText(locators.projectsMenu, 'Project Administrator').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        // delete super user
        // await usersPage.clickButton(locators.userCheckbox, 'super_user@tmail.com');
        // await homePage.waitFor(2000);
        // await usersPage.clickButton(locators.actionDropdown, '');
        // await homePage.waitFor(5000);
        // await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        // await homePage.waitFor(5000);
        // await usersPage.clickButton(locators.button, 'Yes');
        // await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        // await homePage.waitFor(5000);
        //delete pdb admin
        // await usersPage.clickButton(locators.userCheckbox, 'pdb_admin@tmail.com');
        // await homePage.waitFor(2000);
        // await usersPage.clickButton(locators.actionDropdown, '');
        // await homePage.waitFor(5000);
        // await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        // await homePage.waitFor(5000);
        // await usersPage.clickButton(locators.button, 'Yes');
        // await usersPage.waitUntilDisplayed(locators.errorMsg2, 'cannot be deleted');
        // await homePage.waitFor(30000);
    })

    it('login (6) and change user privileges to PDB Admin', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("User Management");
        await homePage.waitFor(10000);
        //change permissions to company admin
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailLink, 'appmgrtest6');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionCheckbox, 'PDB');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(30000);
    })

    it('Log out (7) and login as PDB Admin', async() => {
        await usersPage.clickButton(locators.navMenu, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.logOut, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'LOG OUT');
        await homePage.waitFor(5000);
        await homePage.login('appmgrtest6@247-inc.com','Appmgr@2','Sachin');
        await usersPage.waitUntilDisplayed(locators.tile, 'Home');
        await homePage.waitFor(5000);
    })

    it('Verify the user privileges of PDB Admin', async() => {
        await usersPage.verifyText(locators.tile, 'sample_project1');
        await usersPage.verifyText(locators.tile, 'sample_project2');
        await usersPage.verifyText(locators.tile, 'Library').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tile, 'Admin').then(value => expect(value).toBe(true));
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Summary').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Trendspotter').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Call Search').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Info').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Files').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Custom Reports').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Repositories').then(value => expect(value).toBe(true));
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Telephony').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Web Services').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Error Audio').then(value => expect(value).toBe(true));
        //Verifying user privileges of project admin in Admin tab
        await usersPage.waitUntilClickable(locators.tile, 'Admin');
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.subTile, 'Projects').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Company').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'User Management').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Experience Manager Provisioner').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.subTile, 'Speaker Verification').then(value => expect(value).toBe(true));
        //Verify projects page permissions
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.tile, 'Create New Project').then(value => expect(value).toBe(true));
        await usersPage.clickButton(locators.emailLink, 'sample_project1');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'Project Detail');
        await homePage.waitFor(5000);
        await usersPage.isButtonEnabled(locators.button, 'Delete Project').then(value => expect(value).toBe(true));
    })

    it('Verify the add user priveleges of PDB Admin', async() => {
        await usersPage.clickButton(locators.subTile, 'User Management');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User Management');
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        //add priveleges
        await usersPage.isButtonEnabled(locators.button, 'ADD USER').then(value => expect(value).toBe(true));
        await usersPage.clickButton(locators.permissionDropdown, '');
        await usersPage.verifyText(locators.projectsMenu, 'Project Administrator').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    })

    it('make test user back to standard', async() => {
        await usersPage.clickButton(locators.emailLink, 'appmgrtest6');
        await usersPage.waitUntilDisplayed(locators.pageTitle, 'User');
        await homePage.waitFor(10000)
        await usersPage.clickButton(locators.permissionCheckbox, 'PDB');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(30000);
    })
})
