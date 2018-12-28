const {Page} = require('./page');

class elementsOfSigninPage extends page {
get logo(){ return $("img[src='/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg']")}
get headerOfThePage(){ return $('h2=AceInvoice');}
get subHeader(){ return $('h2=Time Tracking and Invoicing');}
get signInHeader(){ return $('h3=Sign In');}
get emailTextBox(){ return $("input[name ='email']"); }
get passwordTextBox(){return $("input[name ='password']"); }
get remeberMeCheckbox(){return $("span[class ='checkbox-heading']"); }
get submitButton(){return $("input[name ='login']"); }
get forgotPassLink(){return $("a[href='/forgot_password']");}
get signUpLink(){return $("a[class='signup-button border-radius-lg']"); }
}
module.exports = new elementsOfSigninPage()