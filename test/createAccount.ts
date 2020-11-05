import { APP } from "../page/application"

describe('User', function () {
    it('can register', function () {
        console.time('Test "can register" took')
        
        APP.CreateAccount.open();
        const email = `test${new Date().getTime() / 1000}@test.com`
        APP.CreateAccount.fillWith({
            firstname: 'Test',
            lastname: 'Test',
            countryName: 'Ukraine',
            email: email,
            phone: '+380441111111',
            password: email,
            confirmPassword: email
        })
        APP.CreateAccount.confirmRegistration()
        // browser.pause(5000)
        // browser.waitUntil(() => {
        //     return alert.isDisplayed() && alert.getText().includes(expectedText)
        // }, { timeoutMsg: 'Expected success alert to be visible and have correct text' })
        expect(APP.Home.successAlert).toBeDisplayed()
        expect(APP.Home.successAlert).toHaveTextContaining('Your customer account has been created.')
        console.timeEnd('Test "can register" took')

        // Test "can register" took: 7603.411ms
        // Test "can register" took: 2514.112ms
        // Test "can register" took: 2814.565ms
    })
})