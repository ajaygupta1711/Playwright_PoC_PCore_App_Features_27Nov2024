import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { NavigateAssignTicketPage } from '../Pages/NavigateAssignTicketPage';
import { EnterDetailsOnAssignTicketPage } from '../Pages/EnterDetailsOnAssignTicketPage';

const testData = JSON.parse(JSON.stringify(require('../Fixtures/Credentials.json')));
const formData = JSON.parse(JSON.stringify(require('../Fixtures/TicketDetails.json')));

let page = '';
let loginPage;
let navigateAssignTicketPage;
let enterDetailsOnAssignTicketPage;

test.describe('Celsior PCore App Features', () => {

    test.beforeAll(async ({ browser }) => {

        console.log('Run before each test');
        const context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        navigateAssignTicketPage = new NavigateAssignTicketPage(page);
        enterDetailsOnAssignTicketPage = new EnterDetailsOnAssignTicketPage(page);
        await loginPage.navigateToApplication();
        await loginPage.fillLoginForm(testData.user.username, testData.user.password);
        await loginPage.clickSignin();
    });

    // test.afterAll(async ()=>{
    //     page.close();
    // });

    test('TC01_Verify Login Successful with Valid Credential', async () => {
        await loginPage.verifyLoggedInUser();
    });

    test('TC02_Navigate On Assign Ticket Page', async () => {
        await navigateAssignTicketPage.navigateOnAssignTicketScreen();
    });

    test('TC03_Fill the details on the assign ticket page', async () => {
        await enterDetailsOnAssignTicketPage.enterDetailsOnAssignTicketScreen(formData.ticket.masterProject, formData.ticket.project, formData.ticket.feature, formData.ticket.ticketId, formData.ticket.complexity, formData.ticket.assignedUser, formData.ticket.priority, formData.ticket.remarks);
    });
})