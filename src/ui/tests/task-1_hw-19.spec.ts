import { test, expect } from "@playwright/test";
// Требования:
//     Страница регистрации:
//       Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
//       Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен
//     Страница логина:
//       Username: обязательное
//       Password: обязательное

interface ICreds {
  username: string;
  password: string;
}

enum Notification {
  Register_Success = "Successfully registered! Please, click Back to return on login page",
}

test.describe("two tests", () => {
  const validCreds: ICreds = {
    username: "123",
    password: "sUper123",
  };
  test.beforeEach(async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-login-form/");
  });

  test("Register with valid values", async ({ page }) => {
    const registerBtn = page.locator("#registerOnLogin");
    const userName = page.locator('//input[@id="userNameOnRegister"]');
    const password = page.locator("#passwordOnRegister");
    const registerUser = page.locator("#register");
    const successMsg = page.locator("#errorMessageOnRegister");

    await registerBtn.click();
    await userName.fill(validCreds.username);
    await password.fill(validCreds.password);
    await registerUser.click();
    await expect(successMsg).toHaveText(Notification.Register_Success);
  });
  test("Register and Login with valid values", async ({ page }) => {
    const registerBtn = page.locator("#registerOnLogin");
    const userName = page.locator('//input[@id="userNameOnRegister"]');
    const password = page.locator("#passwordOnRegister");
    const registerUser = page.locator("#register");
    const successMsg = page.locator("#errorMessageOnRegister");
    await registerBtn.click();
    await userName.fill(validCreds.username);
    await password.fill(validCreds.password);
    await registerUser.click();
    await expect(successMsg).toHaveText(Notification.Register_Success);

    const backBtn = page.locator("#backOnRegister");
    const userNameLogin = page.locator("#userName");
    const userPassLogin = page.locator("#password");
    const submitBtn = page.locator("#submit");
    const successMsgLogin = page.locator("#successMessage");

    await backBtn.click();
    await userNameLogin.fill(validCreds.username);
    await userPassLogin.fill(validCreds.password);
    await submitBtn.click();
    await expect(successMsgLogin).toHaveText("Hello, 123!");
  });
});
