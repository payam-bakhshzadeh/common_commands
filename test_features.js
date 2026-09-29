const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const filePath = 'file://' + path.resolve('common_commands.html');
    await page.goto(filePath);

    console.log('1. Testing ESC key in editor modal...');
    // Open modal via Ctrl+I
    await page.keyboard.press('Control+i');
    let isModalVisible = await page.isVisible('#editor-modal');
    console.log('Modal visible after Ctrl+I:', isModalVisible);
    if (!isModalVisible) throw new Error('Modal failed to open');

    // Press Escape
    await page.keyboard.press('Escape');
    isModalVisible = await page.isVisible('#editor-modal');
    console.log('Modal visible after Escape:', isModalVisible);
    if (isModalVisible) throw new Error('Modal failed to close on Escape');

    console.log('\n2. Testing #ID + TAB focus...');
    // Type #3 in search input
    await page.fill('#search-input', '#3');
    await page.keyboard.press('Tab');

    // Check active element
    const activeClass = await page.evaluate(() => document.activeElement.className);
    const activeRowId = await page.evaluate(() => {
        const row = document.activeElement.closest('.cmd-row');
        return row ? row.getAttribute('data-command-id') : null;
    });
    console.log('Active element class:', activeClass, '| Row ID:', activeRowId);
    if (activeRowId !== '3') throw new Error('Focus did not shift to command ID 3');

    console.log('\n3. Testing focus preservation after edit/cancel modal...');
    // Focus command ID 3 copy-btn and press Ctrl+E
    await page.keyboard.press('Control+e');
    isModalVisible = await page.isVisible('#editor-modal');
    console.log('Edit modal visible after Ctrl+E:', isModalVisible);

    // Cancel modal via Escape
    await page.keyboard.press('Escape');
    const restoredRowId = await page.evaluate(() => {
        const row = document.activeElement.closest('.cmd-row');
        return row ? row.getAttribute('data-command-id') : null;
    });
    console.log('Restored focus row ID after Escape:', restoredRowId);
    if (restoredRowId !== '3') throw new Error('Focus was not preserved on command ID 3 after closing modal');

    console.log('\n4. Testing Ctrl+Up / Ctrl+Down scroll in search input...');
    await page.focus('#search-input');
    const scrollYInitial = await page.evaluate(() => window.scrollY);
    await page.keyboard.press('Control+ArrowDown');
    await page.waitForTimeout(300);
    const scrollYAfterDown = await page.evaluate(() => window.scrollY);
    console.log('Initial scrollY:', scrollYInitial, '| After Ctrl+Down scrollY:', scrollYAfterDown);
    if (scrollYAfterDown <= scrollYInitial) throw new Error('Ctrl+ArrowDown did not scroll page down');

    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(300);
    const scrollYAfterUp = await page.evaluate(() => window.scrollY);
    console.log('After Ctrl+Up scrollY:', scrollYAfterUp);
    if (scrollYAfterUp >= scrollYAfterDown) throw new Error('Ctrl+ArrowUp did not scroll page up');

    await page.screenshot({ path: 'verification.png' });
    console.log('\nALL VERIFICATION TESTS PASSED!');

    await browser.close();
})();
