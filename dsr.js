// JavaScript Document
// https://skytouchhos.com/pms/ReportViewStart.init
//Login

function auto_login() {
	var username = "aautomat";
	var password = "Clarendon2023"
	//Fill Credentials
	document.querySelector('input[name="j_username"]').value = username;
	document.querySelector('input[name="j_password"]').value = password;
	//Login
	document.querySelector('#greenButton').click();
}


// Date Variables
	// Get Date
	var date		= 	new Date();

	// Set Yesterday
	var day			= 	date.getDate(); date.get
	var yesterday	= 	new Date();
	yesterday.setDate(day-1);

	// Get Yesterday Components
	var month		= 	yesterday.getMonth();
	var year		= 	yesterday.getFullYear();

	// Set Yesterday-Last
	var last_year	=	year-1;
	var yesterday_last = new Date();
	yesterday_last.setFullYear(last_year);

	// Set MTD Start
	var mtd			=	new Date();
	mtd.setDate('1');

	// Set MTD-Last Start
	var mtd_last	=	new Date();
	mtd_last.setFullYear(last_year);

	// Set YTD Start
	var ytd			=	new Date();
	ytd.setDate('1');
	ytd.setMonth('0');

	// Set YTD-Last Start
	var ytd_last	=	new Date();
	ytd_last.setDate('1');
	ytd_last.setMonth('0');
	ytd_last.setFullYear(last_year);

// Common Functions
function submit_form() {
			document.querySelector('#doSubmit').click();
	}
function check_csv() {
	document.querySelector('input[name="CSVcheckbox"]').checked = true;
	document.querySelector('input[name="CSV"]').value = true;
}
function open_report(report) {
	document.getElementById(report).click();
}
function start_date(input_date) {
	document.querySelector('input[name="startDate"]').value = input_date.toLocaleDateString();
}
function end_date(input_date) {
	document.querySelector('input[name="endDate"]').value = input_date.toLocaleDateString();
}

//Hotel Statistics
	// Select Hotel Statistics Report
		// *****Trigger: open_report("HotelStatisticsReport");

	// Build Report
		function hotel_statistics(start) {
			// Set Report Date
			start_date(start);
			// Flag CSV
			check_csv();
			// Submit
			submit_form();
		}
		// *****Trigger: hotel_statistics(yesterday);
//Hotel Journal Summary
	// Select Hotel Journal Summary Report
		// *****Trigger: open_report("HotelJournalSummaryReport'"");

	// Build Reports
		function hotel_summary(start,end) {
			// Set Report Dates
			start_date(start);
			end_date(end);
			// Flag CSV
			check_csv();
			// Submit
			submit_form();
		}

		// Yesterday
			// *****Trigger: hotel_summary(yesterday,yesterday);
		// Yesterday-Last
			// *****Trigger: hotel_summary(yesterday_last,yesterday_last);

		// MTD
			// *****Trigger: hotel_summary(mtd,yesterday);
		// MTD-Last
			// *****Trigger: hotel_summary(mtd_last,yesterday_last);

		// YTD
			// *****Trigger: hotel_summary(ytd,yesterday);
		// YTD-Last
			// *****Trigger: hotel_summary(ytd_last,yesterday_last);
