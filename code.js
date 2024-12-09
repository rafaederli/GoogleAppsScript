function doGet() {
  return HtmlService.createTemplateFromFile("page").evaluate();
  // return HtmlService.createHtmlOutputFromFile("page");
}

function userClicked(userInfo) {
  var url = "https://docs.google.com/spreadsheets/d/1cpt1IWMsd06lVaGumjMo7phc_B17wxsVAHf7ujOGTfo/edit?gid=0#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, new Date()]);

  // Logger.log(name + " clicked the Button");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}