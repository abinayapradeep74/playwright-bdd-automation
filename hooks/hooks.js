import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test-fixtures.js';
import  logger from '../utils/logger.cjs';

const { Before, After } = createBdd(test);

Before(async ({$testInfo}) => {
    logger.info('========== SCENARIO START ==========');
    logger.info(`Scenario: ${$testInfo.title}`);
    logger.info('====================================');
});

After(async ({ page, $testInfo}) => {
    logger.info('========== SCENARIO END ==========');
    logger.info(`Scenario: ${$testInfo.title}`);
    logger.info(`Status: ${$testInfo.status.toUpperCase()}`);
    logger.info('==================================');
if($testInfo.status!==$testInfo.expectedStatus)
{

    const screenshot = await page.screenshot();
    await $testInfo.attach('Failure screenshot', {body:screenshot, contentType:'image/png'});
    logger.info('Failure screenshot attached');


}
logger.info('==================================');

});