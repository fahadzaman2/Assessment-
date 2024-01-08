import { test, expect } from '@playwright/test';
import { assert } from 'console';
import exp from 'constants';

test('verify agriculture page', async ({ page }) => {

  test.slow();

  await page.goto('https://onlinelibrary.wiley.com/');

  
  await page.waitForURL("https://onlinelibrary.wiley.com/");

  await page.locator("//a[@id='accordionHeader-1']").waitFor();
  await page.locator("//a[@id='accordionHeader-1']").click();

  await page.locator("//span[contains(text(),'Agriculture')]").waitFor();
  await page.locator("//span[contains(text(),'Agriculture')]").click();

  await page.waitForURL("https://onlinelibrary.wiley.com/topic/browse/000018");
});

test('verify contact us', async ({ page }) => {

  test.slow();
  test.setTimeout(120000);

  await page.goto('https://onlinelibrary.wiley.com/');
  await page.waitForURL("https://onlinelibrary.wiley.com/");

  //await page.waitForLoadState('networkidle');

  await page.locator("//a[contains(text(),'Contact Us')]").click();

  //await page.waitForLoadState('networkidle');

  await page.waitForURL("https://wolsupport.wiley.com/s/");
  await expect(page).toHaveURL("https://wolsupport.wiley.com/s/");
});

test('verify login fields', async ({page}) => {

  test.slow();
  test.setTimeout(60000);

  await page.goto('https://onlinelibrary.wiley.com/');

  await page.waitForURL("https://onlinelibrary.wiley.com/");

  await page.locator("//span[@class='sign-in-label']").waitFor();
  await page.locator("//span[@class='sign-in-label']").click();

  
  await expect(page.locator("//input[@id='username']")).toBeTruthy();
  await expect(page.locator("//input[@id='password']")).toBeTruthy();
  await expect(page.locator("//input[@name='submitButton']")).toBeTruthy();
  
  




})
