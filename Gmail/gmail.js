// GMAIL FUNCTIONS
// -- CREATED BY CHARLES MORMAN
//
// Logic Structure
// -- Open HTML version of Gmail
// -- Check for secondary authentication request
// -- -- Login or bypass
// -- Compose email
// -- -- Pass report date & path
// -- Attach file
// -- Send
// Future: Log to Database?

// Variables

var gmail_passw = "Waterwall401;"
var email_to = "prohospitality@hiareports.com";
var email_subject = "SkyTouch PMS Pro Hospitality Nine, LLC 05-08-2023";
var email_body = "";




# COMPOSE
## URL
`https://mail.google.com/mail/u/0/h/m1scc1fisoig/?&cs=b&pv=tl&v=b`

## Click Choose File (Email)
`document.getElementsByName("file0")[0].click();`

## Click Send (Email)
`document.getElementsByName("nvp_bu_send")[0].click();`

## Insert `Body`
`document.getElementsByName("body")[0].value = ;`

## Insert `To`
`document.getElementsByName("to")[0].value = ;`

## Insert `Subject`
`document.getElementsByName("subject")[0].value = ;`


# AUTHENTICATION
## Logic -- If Exists, Proceed
`document.querySelector("#identifierNext")`
## Next
`document.querySelector("#identifierNext > div > button").click();`
## Enter pass
`document.querySelector('input[name="Passwd"]').value = "Waterwall401";`
## Next
`document.querySelector("#passwordNext").click();`