var url = "https://docs.google.com/spreadsheets/d/1cpt1IWMsd06lVaGumjMo7phc_B17wxsVAHf7ujOGTfo/edit?gid=0#gid=0";

function doGet() {
  
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var list = ws.getRange(1,1,ws.getRange("A1").getDataRegion().getLastRow(),1).getValues();
  
  var tmp = HtmlService.createTemplateFromFile("page");
  tmp.list = list.map(function(r){return r[0]});
  return tmp.evaluate();
  // return HtmlService.createHtmlOutputFromFile("page");
}

function userClicked(userInfo) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, new Date()]);

  // Logger.log(name + " clicked the Button");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}