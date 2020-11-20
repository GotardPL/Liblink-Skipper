(function() {
    'use strict';
var masterString = document.body.innerHTML;
var subStr = masterString.match(">(.*)</span>"); //
open(location, '_self').close();
window.open(subStr[1])

})();