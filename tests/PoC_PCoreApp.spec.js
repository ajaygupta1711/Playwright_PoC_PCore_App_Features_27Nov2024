import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NavigateAssignTicketPage } from '../pages/NavigateAssignTicketPage';
import { AddAssignTicketPage } from '../pages/AddAssignTicketPage';
import { NavigateTimesheetPage } from '../pages/NavigateTimesheetPage';
import { AddTimesheetPage } from '../pages/AddTimesheetPage';

const credData = JSON.parse(JSON.stringify(require('../utils/Credentials.json')));
const tktData = JSON.parse(JSON.stringify(require('../utils/TicketDetails.json')));
const timeData = JSON.parse(JSON.stringify(require('../utils/TimesheetDetails.json')));

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
        await loginPage.fillLoginForm(credData.user.username, credData.user.password);
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
        await addAssignTicketPage.addDetailsOnAssignTicketScreen(tktData.ticket.masterProject, tktData.ticket.project, tktData.ticket.feature, tktData.ticket.ticketId, tktData.ticket.description, tktData.ticket.complexity, tktData.ticket.assignedUser, tktData.ticket.priority, tktData.ticket.remarks, tktData.ticket.confirmationMessage);
        await addAssignTicketPage.clickSaveOnTicket();
        await addAssignTicketPage.verifyClickConfirmMsg();
    });

    test('TC04_Navigate On Timesheet Page', async () => {
        await navigateTimesheetPage.navigateTimesheetScreen();
    });

    test('TC05_Fill the details on the timesheet page', async () => {
        await navigateTimesheetPage.navigateTimesheetScreen();
        await addTimesheetPage.addDetailsOnTimesheetScreen(timeData.timesheet.group, timeData.timesheet.activity, timeData.timesheet.dailyHour);
        await addTimesheetPage.clickSaveOnTimesheet();
    });

    test.afterEach(async () => {
        page.close();
    })
});