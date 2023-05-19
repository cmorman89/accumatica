# Accumatica Notes

## PMS and POS Data:
### Configuration:
1. Daily Report > Daily Report Preferences
- Items broken into tabs and rows
- "DAILY REPORT MANAGEMENT" tab manages individual line items

### Input:
1. Daily Report > Daily Entry
    - Values stored in grid of fields
    - Grids are separated by tabs
    - Input fields only appear upon clicking
    - Input fields seem to have same name on a given tab

### Process:
1. Create a {key: [array]} object mapping:

    `var daily_report = `
    ```
    {field_name0: [tab0, column0, row0, value0],
    field_name1: [tab1, column1, row1, value1],
    etc};
    ```
    **NOTE/HINT** List of all line items by: Daily Report Preferences > Export Template:
        ```
        - Col A - Tab Number
        - Col B - Tab Label
        - Col C - Section ID (function unknown)
        - Col D - Field Name
        ```
2. Select:
    1. Hotel
    2. Date
3. Input Values:
    1. Select Tab:
    2. Click Item:
        `document.querySelector("#ctl00_phG_tab_t3_gridTab3_row_1 > td:nth-child(4)").click();`
    3. Input Value:
        `document.querySelector("#ctl00_phG_tab_t3_gridTab3_row_1 > td:nth-child(4)").value = **value**;`


### **Ideas!**
- `element.innerHTML();` to match field and with object key (less likely to break upon template changes)

### Daily Entry Targets
1. Form (maybe)
    - `document.querySelector("#aspnetForm")`
Date
    - `document.querySelector("#ctl00_phF_form_edDate_text")`<- no
    - `document.querySelector("#ctl00_phF_form_edDate_text.au-target.editor").value`
    ```
    <form name="aspnetForm" method="post" action="./HI999999.aspx?timeStamp=c2990115d59d1cf5150516412103924129F6B700&amp;unum=0&amp;HideScript=On" id="aspnetForm" autocomplete="off" enctype="multipart/form-data">
    Form Extract:
    Method: Post
    REquest URl: https://profitguide5.hotelinvestorapps.com/Pages/HIA/HI999999.aspx?unum=0&HideScript=On
    Encoded ctl00%24phF%24form%24edDate%24text: 4%2F17%2F2023
    Decoded ctl00$phF$form$edDate$text: 4/17/2023
    ```