## I. Tools Used

    - $ npm install
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0
    - $ npm install --save mysql2
    - $ npm install --save sequelize
    - $ npm install --save mongodb
    - $ npm install --save mongoose
    - $ npm install --save express-session
    - $ npm install --save connect-mongodb-session
    - $ npm install --save bcryptjs
    - $ npm install --save csurf
    - $ npm install --save connect-flash
    - $ npm install --save nodemailer
    - $ npm install --save express-validator

    full docs on express validator:
    https://express-validator.github.io/docs/

## II. Core Concepts:

    1. Application flow with validation:
        https://drive.google.com/file/d/19_Mn9UoiHPKuJB3mEpLZM13DWz6AE09J/view?usp=sharing

    2. How to Validate:
        https://drive.google.com/file/d/14TZtbX0xL7-QCIgQ0uCN-YkTpvvZA-Ip/view?usp=sharing

    3. Sanitize input:
        - make sure input doesn't include some unwanted characters such as:
            white space, /, etc.
        - This depends on the requirements
        - See III. Module Notes, 3. Sanitize Data for practical sanitization

## III. Module Notes:

    1. Setting up validation:
        - Code in 2nd Commit
        - install express-validator
        - ./routes/auth.js: passing middleware into post
        sign up controller
        - ./controllers/auth.js: validating for email sign up
        post request

    2. Other Features:
        a. Customize Validator:
            - Code in 3rd Commit
            - ./routes/auth.js:
                +, Custom error message, see the use of withMessage()
                +, Custom validator, see the use of custom()

        b. Password Validator:
            - Code in 4th Commit
            - ./routes/auth.js:
                +, See post request handler for '/signup'

        c. Checking if email already exists (using express validator)
            (Async Validation):
            - Code in 5th Commit
            - ./routes/auth.js:
                +, See post request handler for '/signup'

        d. Validate login:
            - Code in 6th Commit

        e. Keeping user inputs after a failed requests:
            - Code in 7th Commit
            - See oldInput in getLogin() and postLogin() in
            ./controllers/auth.js
            - See ./views/auth/signup.js for how to get the values

        f. red box border validation for invalid input:
            - Code in 8th Commit
            - ./controllers/auth.js: see 'validationErrors' in
                getLogin(), getSignUp(), postLogin() and postSignUp()
            - ./view/auth/login.ejs, signup.ejs: see 'validationErrors'

        g. Validation for Product Addition and Product Editing:
            - Code in 10th Commit
            - See ./routes/admin.js and ./controllers/admin.js for
                the code

        3. Sanitizing Data:
            - Code in 9th Commit
            - ./routes/auth.js: see post sign up and sign in
            - Now try sign up with email having a capital letter
                > see the result


## IV. Other Notes:

    What's in this module ?
        - Why validate ?
        - How to validate ?
