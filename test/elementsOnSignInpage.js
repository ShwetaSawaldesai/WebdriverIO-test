const expect = require('chai').expect;
const signinPage = require('../PageObjects/signin.page');

describe('signinPage', () => {
    it('Verify elements on siginpage', () => {
        browser.url('/');
        // verify the logo on the page.
        expect(signinPage.logo.isVisible()).to.be.true;

        //Verify the header aceinvoice on the page.
        expect(signinPage.headerOfThePage.isVisible()).to.be.true;
    
        //Verify the text below the header on the page.
        expect(signinPage.subHeader.isVisible()).to.be.true;

        //Verify the sign in label.
        expect(signinPage.signInHeader.isVisible()).to.be.true;

        //Verify the email text box.
        expect(signinPage.emailTextBox.isVisible()).to.be.true;
    
        //Verify the password textbox.
        expect(signinPage.passwordTextBox.isVisible()).to.be.true;
    
        //Verify the remember me checkbox.
        expect(signinPage.remeberMeCheckbox.isVisible()).to.be.true;

        //Verify the submit button.
        expect(signinPage.submitButton.isVisible()).to.be.true;

        //Verify the forgot password link.
        expect(signinPage.forgotPassLink.isVisible()).to.be.true;
    
        //Verify the sign up link.
        expect(signinPage.signUpLink.isVisible()).to.be.true;

        //Verify the text below sign up link.
        expect(signinPage.signUpLink.getText()).to.be.equal('Don\'t have an account? Sign Up');
    });
});


