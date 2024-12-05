import { expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.email = page.getByPlaceholder("User Id / Official Email Id");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator("//*[@id='pydLogin_btnLogin']");
        this.topFrame = page.frameLocator("//*[@name='top']");
        this.verifyUser = this.topFrame.locator("//span[@id='lblUserName']");
    }

    // Methods

    async navigateToApplication() {
        await this.page.goto('https://pyramidcore.pyramidci.com/Security/PCILoginNew.aspx?logout=t');
    }

    async fillLoginForm(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
    }

    async clickSignin() {
        await this.loginButton.click();
    }

    async verifyLoggedInUser() {
        await expect(this.verifyUser).toContainText('Hello, Ajay');
    }
}