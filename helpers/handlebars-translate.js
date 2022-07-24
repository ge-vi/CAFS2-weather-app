/**
 * Translates given string.
 * If given string *not* found last string from strings list is returned.
 */

module.exports = function(stringToTranslate) {

  const stringsLt = [];

  stringsLt.push('clear', 'giedra');
  stringsLt.push('isolated-clouds', 'mažai debesuota');
  stringsLt.push('scattered-clouds', 'debesuota su pragiedruliais');
  stringsLt.push('overcast', 'debesuota');
  stringsLt.push('light-rain', 'nedidelis lietus');
  stringsLt.push('moderate-rain', 'lietus');
  stringsLt.push('heavy-rain', 'smarkus lietus');
  stringsLt.push('sleet', 'šlapdriba');
  stringsLt.push('light-snow', 'nedidelis sniegas');
  stringsLt.push('moderate-snow', 'smarkus sniegas');
  stringsLt.push('fog', 'rūkas');
  stringsLt.push('na', 'oro sąlygos nenustatytos');

  let index = stringsLt.findIndex(value => value === stringToTranslate);
  return index === -1 ? stringsLt[stringsLt.length - 1] : stringsLt[++index];
};
