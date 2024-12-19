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

  ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, userInfo.zip, userInfo.est, new Date()]);

  // Logger.log(name + " clicked the Button");
}

function getCost(zipCode) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Estimate");
  var data = ws.getRange(1,1,ws.getLastRow(),2).getValues();
  var zipCodeList = data.map(function(r){return r[0];});
  var costList = data.map(function(r){return r[1];});
  var position = zipCodeList.indexOf(zipCode)
  if(position > -1) {
    return "$" + costList[position].toFixed(2);
  } else {
    return "Unavailble"
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}