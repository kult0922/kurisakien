import { test, expect } from '@playwright/test';

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

test('order by credit', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('tab', { name: '注文' }).click();
  await page.getByText('普通煎茶').click();
  await page.getByRole('combobox').click();
  await page.getByLabel('2').click();
  await page.getByRole('button', { name: 'カートに入れる' }).click();
  await expect(page.locator('tbody').getByRole('cell', { name: '2160円' })).toBeVisible();
  await page.getByRole('button', { name: '注文に進む' }).click();
  await page.getByPlaceholder('姓').fill('名字');
  await page.getByPlaceholder('名').fill('名前');
  await page.getByPlaceholder('123-456-789').fill('1111111');
  await page.getByPlaceholder('123-4567').fill('1111111');
  await page.getByPlaceholder('example@example.com').fill('example@email.com');
  await page.getByPlaceholder('○県△市□町１−２−３ Kハイツ ○号室').fill('住所');
  await page.getByLabel('静岡県内').click();
  await page.getByLabel('クレジットカード').click();
  await page.locator('textarea[name="voice"]').fill('');
  await page.getByRole('button', { name: '注文内容確認' }).click();

  // Check the order
  await expect(page.getByRole('cell', { name: '2810円' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'クレジットカード' })).toBeVisible();
  await expect(page.getByRole('row', { name: '郵便番号' }).getByRole('cell')).toBeVisible();
  await expect(page.getByRole('cell', { name: '住所' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '名字 名前' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'example@email.com' })).toBeVisible();
  await expect(page.getByRole('row', { name: '電話番号' }).getByRole('cell')).toBeVisible();
  await expect(page.getByRole('cell', { name: '0円', exact: true })).toBeVisible();

  // iframe 読み込みを待つ
  await sleep(1000);
  const frames = page.frames();
  // stripe の input 要素の親のiframeが識別不可能なため、順番で判断している
  const stripeFrames = frames.filter((frame) => frame.name().startsWith('__privateStripeFrame'));
  const cardNumberFrame = stripeFrames[0];
  const cardExpiryFrame = stripeFrames[1];
  const cardCvcFrame = stripeFrames[2];

  await cardNumberFrame.fill('[data-elements-stable-field-name="cardNumber"]', '4242424242424242');
  await cardExpiryFrame.fill('[data-elements-stable-field-name="cardExpiry"]', '04/41');
  await cardCvcFrame.fill('[data-elements-stable-field-name="cardCvc"]', '333');

  await page.getByRole('button', { name: '注文確定' }).click();

  // Check the completion
  await expect(page.getByRole('heading', { name: 'ご注文ありがとうございました' })).toBeVisible();
});
