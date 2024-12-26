import { test, expect } from '@playwright/test';


test('Test id perdu', async ({ page }) => {
  await page.goto('https://mon-espace-client.sofinco.fr/ancienne-authent/identifiant-oublie');
  await page.getByLabel('Accepter & Fermer: Accepter notre traitement des données et fermer').click();
  await page.getByLabel('Votre nom').fill("ZAR");
  await page.getByLabel('Votre prénom').fill("Mo");
  await page.getByLabel('Votre date de naissance').fill("28/06/1995");
  await page.getByLabel('Votre département de naissance').fill("59");
  await page.getByText('Rechercher mon identifiant').click();
  const requestPromise = page.waitForRequest('**/*logoj*.png');

  await page.getByText('Rechercher mon identifiant').click();



  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
