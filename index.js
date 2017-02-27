var _ = require("lodash");
var excel2json = require("node-excel-to-json");
var path = require("path");

console.info(_.add(4, 6));

console.log(path.resolve(__dirname, "birth_years.xlsx"));

excel2json(path.resolve(__dirname, "birth_years.xlsx"), {convert_all_sheet: true, return_type: "Object"}, function(err, result) {
  if (err) throw err;

  console.log(result);
});