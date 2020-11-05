
describe('Smoke test', () => {
    it.skip('ducks should be alive', () => {
        browser.url('/')
        expect(browser).toHaveTitle('Ducks Store | Online Store');
    })
})