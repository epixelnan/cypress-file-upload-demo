This project contains:

1) A basic Web application to upload and check the mimetype of a file
2) A Cypress test suit to test this app

To run the Web server:
  nodejs index.js

To run the cypress tests:
  npx cypress run --headless --spec "cypress/integration/upload.spec.js"

cypress-file-upload
===================
- Installed using `npm install cypress-file-upload`
- Added to cypress/support/command.js
