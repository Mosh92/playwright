import { test, expect } from "@playwright/test";

// Создайте ОДИН смоук тест со следующими шагами:

// 1. Переход на страницу https://anatoly-karpovich.github.io/demo-registration-form/
// 2. Заполните форму регистрации
// 3. Проверьте, что пользователь успешно зарегистрирован

test('Smoke test for registration form', async ({ page }) => {
  await page.goto('https://anatoly-karpovich.github.io/demo-registration-form/');
  const nameField = page.locator('#firstName');
  const lastNameField = page.locator('#lastName');
  const adressField = page.locator('#address');
  const emailField = page.locator('#email');
  const phoneField = page.locator('#phone');
  const countryDrop = page.locator('//select[@id="country"]');
  const radioChoice = page.locator('//input[@value="male"]');
  const hobbieTravelling = page.locator('//input[@value="Travelling"]');
  const hobbieMovie = page.locator('//input[@value="Movies"]');
  const languageEnter = page.locator('#language');
  const skill = page.locator('//option[@value="JavaScript"]');
  const birthdayDropYear = page.locator('#year');
  const birthdayDropMonth = page.locator('#month');
  const birthdayDropDay = page.locator('#day');
  const passwordField = page.locator('#password');
  const confirmPasswordField = page.locator('#password-confirm');
  const submitBtn = page.locator('//button[@type="submit"]');
  const finalTitle = page.locator('//*[contains(text(), "Registration Details")]');

  await nameField.fill('Sergey');
  await lastNameField.fill('Tester');
  await adressField.fill('WWW.LENINGRAD WWW.RU');
  await emailField.fill('test@test.test');
  await phoneField.fill('+375331234567');
  await countryDrop.selectOption('USA');
  await radioChoice.click();
  await hobbieTravelling.click();
  await hobbieMovie.click();
  await languageEnter.fill('Russian');
  await skill.click();
  await birthdayDropYear.selectOption('1997');
  await birthdayDropMonth.selectOption('August');
  await birthdayDropDay.selectOption('18');
  await passwordField.fill('pass123!!@@');
  await confirmPasswordField.fill('pass123!!@@');
  await submitBtn.click();

  await expect(finalTitle).toHaveText('Registration Details');


  
});


