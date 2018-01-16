function displayFlavors(iceCreams) {
  iceCreams.forEach(function(flavor) {
    $("ul#icecream").append("<li>"+ flavor + "</li>");
  });
}

$(document).ready (function() {
    var flavors = ['vanilla bean', 'chocholate chip cookiedough', 'turkish coffee', 'neopolitan', 'cookies and cream'];
    displayFlavors(flavors);

});
