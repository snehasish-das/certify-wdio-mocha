import homePage from '../../../../pages/home.page';
import usersPage from '../../../../pages/voiceportal/Admin/userManagement.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
const locators = require('../../../../resources/locators/voiceportal/Admin/userManagementPage');

describe('Voice Portal Admin >> User Management Tests', async() => {
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

    it('Verify page load of User Management and Table Headers', async() => {
        await usersPage.verifyText(locators.pageTitle, 'User Management').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tableHeader, 'GENERAL PERMISSION').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tableHeader, 'PROJECT MEMBERSHIP').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    });

    it('Change company and verify page load',async () => {
        await usersPage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await usersPage.verifyText(locators.pageTitle, 'User Management').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tableHeader, 'GENERAL PERMISSION').then(value => expect(value).toBe(true));
        await usersPage.verifyText(locators.tableHeader, 'PROJECT MEMBERSHIP').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    });

    it('Verify error message when email is invalid', async () => {
        await usersPage.fillValue(locators.emailField, 'automation_test1');
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.emailValidMsg, 'Validation failed').then(value => expect(value).toBe(true));
        await usersPage.isButtonEnabled(locators.addButton, '').then(value => expect(value).toBe(false));
        await homePage.waitFor(5000);
    })

    it('Add a standard user for one project', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test1@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.emailValidMsg, 'Validation failed').then(value => expect(value).toBe(false));
        await usersPage.isButtonEnabled(locators.addButton, '').then(value => expect(value).toBe(true));
        await usersPage.clickButton(locators.projectDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'sample_project1');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailField, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully added automation_test1@tmail.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        await usersPage.verifyText(locators.emailLink, 'automation_test1@tmail.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    });

    it('Add another project to existing standard user', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test1@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsSelectAll, 'UNSELECT ALL');
        await homePage.waitFor(5000)
        await usersPage.clickButton(locators.projectsMenu, 'sample_project2');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailField, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully added automation_test1@tmail.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    });

    it('Add an existing standard user with same set of projects', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test1@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await usersPage.clickButton(locators.projectsSelectAll, 'UNSELECT ALL');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.projectsMenu, 'sample_project1');
        await usersPage.clickButton(locators.projectsMenu, 'sample_project2');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailField, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.errorMsg, 'user already has').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    });

    it('Add a standard user with multiple projects', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test2@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await usersPage.clickButton(locators.projectsSelectAll, 'UNSELECT ALL');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.projectsMenu, 'sample_project1');
        await usersPage.clickButton(locators.projectsMenu, 'sample_project2');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailField, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully added automation_test2@tmail.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    });

    it('Add a standard user with all projects', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test3@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await usersPage.clickButton(locators.projectsSelectAll, 'UNSELECT ALL');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailField, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully added automation_test3@tmail.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    })

    it('Add a user with one project as an adminstrator', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test4@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        //await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await usersPage.clickButton(locators.projectsSelectAll, 'UNSELECT ALL');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.projectsMenu, 'sample_project1');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.emailField, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionDropdown, '');
        await usersPage.clickButton(locators.projectsMenu, 'Project Administrator');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully added automation_test4@tmail.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    })

    it('Add a user with all projects as an adminstrator', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test5@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await usersPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        // await usersPage.clickButton(locators.projectsSelectAll, 'UNSELECT ALL');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionDropdown, '');
        await usersPage.clickButton(locators.projectsMenu, 'Project Administrator');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully added automation_test5@tmail.com').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    })

    it('Add a custom user by selecting from the dropdown', async() => {
        await usersPage.fillValue(locators.emailField, 'automation_test6@tmail.com');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.permissionDropdown, '');
        await usersPage.clickButton(locators.projectsMenu, 'Custom');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.addButton, '');
        await homePage.waitFor(30000);
        await usersPage.clickButton(locators.button, 'SAVE');
        await homePage.waitFor(10000);
    })

    it('Delete one user', async() => {
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.userCheckbox, 'automation_test1@tmail.com');
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully deleted').then(value => expect(value).toBe(true));
    });

    it('Delete multiple users', async() => {
        await usersPage.verifyUserlist();
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.userCheckbox, 'automation_test2@tmail.com');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.userCheckbox, 'automation_test3@tmail.com');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.userCheckbox, 'automation_test4@tmail.com');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.userCheckbox, 'automation_test5@tmail.com');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.userCheckbox, 'automation_test6@tmail.com');
        await homePage.waitFor(1000);
        await usersPage.clickButton(locators.actionDropdown, '');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.projectsMenu, 'Delete Selected');
        await homePage.waitFor(5000);
        await usersPage.clickButton(locators.button, 'Yes');
        await usersPage.waitUntilDisplayed(locators.message, 'successfully deleted').then(value => expect(value).toBe(true));
        await homePage.waitFor(20000);
    })
});
