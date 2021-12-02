# FCTR_TestSuite
Factorial test suite

Test are located in cypress\integration\fctr directory and separated to feature and layout groups. Due to lack of time and environment options for proper integration with CI and TestRail all scenarios were run via Cypress desktop tool
Report is located in separate folder \report and created manually
Testing was performed exploratory and against a checklist. Layout was verified in Chrome and Firefox browsers on desktop and mobile devices, some checks also made on iOS Safari.  Found issues are represented in appropriate files in \report directory
Issues summary descriptions could be also found below. Also there is a conclusion regarding this feature

TODO: CI, TestRail integration. Replace implicit assertion with explicit to avoid unnecessary waiting. Use fixtures

Issues:
#number | Type | Severity | Summary
#1 | Bug | Critical | URLs in 'Privacy' and 'Terms and Conditions' links are mixed up on Factorial home page
#2 | Bug | Minor | Favicon is missing on Factorial home page
#3 | Bug | Critical | User is not informed well in case of Factorial result approximation \ Factorial calculation result is approximated to 'Infinity' in case value is greater or equal to 171
#4 | Bug | Critical | 500 Internal Server Error with Unwrapped/Unhandled stack trace occurs on attempt to calculate values greater or equal to 980
#5 | Bug | Critical | Negative values could pass client side validation and cause 500 Internal Server Error with Unwrapped/Unhandled stack trace on attempt to calculate its Factorial
#6 | Bug | Major | UX: Can't submit value for Factorial calculation via enter key / return button on mobile devices
#7 | Bug | Minor | UX: Factorial input field brings up text keyboard on mobile devices 
#8 | Bug | Critical | POST incorrect values directly to factorial endpoint (avoid client side validations) leads to 500 Internal Server Error with Unwrapped/Unhandled stack trace
#9 | Bug | Minor | Factorial home page header is black instead of green on iPad iOS 9.3.5 =Ъ

Conclusion: Currently feature release is prohibited by presence of Critical bugs. 25% of all tests are Failed (5 Failed / 15 Passed)