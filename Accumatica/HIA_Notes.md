# EXTERNAL PLATFORM MAPPING

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
    ```
    {
        field_name0: [tab0, column0, row0, value0],
        field_name1: [tab1, column1, row1, value1],
        etc
    }

    **NOTE/HINT** List of all line items by: Daily Report Preferences > Export Template:
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
    3. Input Value:


### **Ideas!**
- `element.innerHTML();` to match field and row (less likely to break upon template changes)