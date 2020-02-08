// import { Selector } from 'testcafe';

// fixture `Test Started`
//     .page `http://localhost:3000/`;

//     test('Search Section exists', async t => {

//         const emailAddressInput = Selector('input').withAttribute('name','searchEmail');
//         const registerButton = Selector('#register');
//         const updateDetailsButton = Selector('#update');
//         const unregisterButton = Selector('#unregister');

//         await t
//             .expect(emailAddressInput.value).eql('', 'input is empty')
//             .expect(registerButton.visible).ok()
//             .expect(updateDetailsButton.visible).ok()
//             .expect(unregisterButton.visible).ok();
       
//     });

//     test('Create Test User', async t => {

//         const emailAddressInput = Selector('input').withAttribute('name','searchEmail');
//         const registerButton = Selector('#register');

//         async t => {
//             await t
//                 .typeText(emailAddressInput, 'Peter')


//         await t
//             .expect(emailAddressInput.value).eql('', 'input is empty')
//             .expect(registerButton.visible).ok()
//             .expect(updateDetailsButton.visible).ok()
//             .expect(unregisterButton.visible).ok();
//     });