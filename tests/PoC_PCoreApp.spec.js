import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { NavigateAssignTicketPage } from '../Pages/NavigateAssignTicketPage';
import { AddAssignTicketPage } from '../Pages/AddAssignTicketPage';
import { NavigateTimesheetPage } from '../Pages/NavigateTimesheetPage';
import { AddTimesheetPage } from '../Pages/AddTimesheetPage';

const testData = JSON.parse(JSON.stringify(require('../Fixtures/Credentials.json')));
const formData = JSON.parse(JSON.stringify(require('../Fixtures/TicketDetails.json')));

let page = '';
let loginPage;
let navigateAssignTicketPage;
let addAssignTicketPage;
let navigateTimesheetPage;
let addTimesheetPage;

test.describe('Celsior PCore App Features', () => {

    test.beforeEach(async ({ browser }) => {

        console.log('Run before each test');
        const context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        navigateAssignTicketPage = new NavigateAssignTicketPage(page);
        addAssignTicketPage = new AddAssignTicketPage(page);
        navigateTimesheetPage = new NavigateTimesheetPage(page);
        addTimesheetPage = new AddTimesheetPage(page);
        await loginPage.navigateToApplication();
        await loginPage.fillLoginForm(testData.user.username, testData.user.password);
        await loginPage.clickSignin();
    });

    test('TC01_Verify Login Successful with Valid Credential', async () => {
        await loginPage.verifyLoggedInUser();
    });

    test('TC02_Navigate On Assign Ticket Page', async () => {
        await navigateAssignTicketPage.navigateOnAssignTicketScreen();
    });

    test('TC03_Fill the details on the assign ticket page', async () => {
        await navigateAssignTicketPage.navigateOnAssignTicketScreen();
        await addAssignTicketPage.addAssignTicketScreen(formData.ticket.masterProject, formData.ticket.project, formData.ticket.feature, formData.ticket.ticketId, formData.ticket.description, formData.ticket.complexity, formData.ticket.assignedUser, formData.ticket.priority, formData.ticket.remarks);
    });

    test('TC04_Navigate On Timesheet Page', async () => {
        await navigateTimesheetPage.navigateTimesheetScreen();
    });

    test('TC05_Fill the details on the timesheet page', async () => {
        await navigateTimesheetPage.navigateTimesheetScreen();
        await addTimesheetPage.addTimesheetScreen();
    });

    test.afterEach(async () => {
        page.close();
    });
})