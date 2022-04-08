import { Given, When, Then } from "@wdio/cucumber-framework";
import registerPage from "../pageobjects/register.page";
import faker from "@faker-js/faker";
import loginPage from "../pageobjects/login.page";

let email =
  faker.name.lastName().toLowerCase() +
  faker.name.firstName().toLowerCase() +
  "@mailinator.com";

Given(/^on register page$/, async () => {
  registerPage.openURL();
});

When(/^fill form$/, async () => {
  await registerPage.firstName.setValue(faker.name.firstName());
  await registerPage.lastName.setValue(faker.name.lastName());
  await registerPage.lastName.setValue(faker.name.lastName());
  await registerPage.yourEmail.setValue(email);
  await registerPage.yourPhoneNumber.setValue("85677598801");
  await registerPage.yourAddress.setValue("Jalan Faker");
  await registerPage.password.setValue("Password");
  await registerPage.confirmPassword.setValue("Password");
});

When(/^submit register$/, async () => {
  await registerPage.btnRegister.click();
});

Then(/^register successful$/, async () => {
  console.log("success");
});

Given(/^on login page$/, async () => {
  registerPage.openURL();
  await registerPage.linkLogin.click();
});

When(/^fill form login$/, async () => {
  await loginPage.inputEmail.setValue(email);
  await loginPage.inputPassword.setValue("Password");
});

When(/^submit login$/, async () => {
  await loginPage.btnLogin.click();
});

Then(/^login successful$/, async () => {
  await loginPage.btnOK.click();
  console.log("success");
});
