Feature('apptest');
const { loginPage } = inject();

Scenario('Successfully login', ({ I }) => {
    I.fillField(loginPage.locator.inputEmail, loginPage.userInfo.email)
    I.fillField(loginPage.locator.inputPassword, loginPage.userInfo.password)
    I.tap(loginPage.locator.loginBtn)
});
