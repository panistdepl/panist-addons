"use strict";

var firefoxVersion = '1.0.0';
var firefoxLink    = 'download/panist-' + firefoxVersion + '-an+fx.xpi';
const docUrl = 'https://github.com/panistdepl/panistdepl.github.io/tree/master/browser-extension';

/*
if (bowser.chrome || bowser.chromium) {
  $('#addingToBrowser').text('Ajouter l\'extension à Chrome');
  $('#docUsers').attr('href', docUrl + '#chrome');
  if (chrome.app.isInstalled) {
    $('#addingToBrowser').text('Extension déjà ajoutée !');
    $('#tooltip-wrapper').tooltip({
      title: 'L\'extension est déjà installée sur votre navigateur. Vous pouvez la retrouver sur l\'adresse chrome://extensions ou dans Menu, Plus d\'outils puis Extensions',
      placement: 'bottom'
    });
    $('#addingToBrowser').attr("disabled", true);
  } else {
    $('#addingToBrowser').click(function() {
      chrome.webstore.install(undefined, function() {
        $('#addingToBrowser').text('Extension bien ajoutée !');
        $('#addingToBrowser').attr("disabled", true);
      }, function(msg) {
        console.log('Error :' + msg);
      });
    });
  };
} else 
*/
if (bowser.firefox) {
  if (bowser.check({ firefox: "49" })) {
    $('#addingToBrowser').text('Ajouter l\'extension à Firefox (Demo)');
    $('#docUsers').attr('href', docUrl + '#firefox');
    $('#addingToBrowser').attr('href', firefoxLink);

  } else {
    $('#addingToBrowser').text('Version du navigateur ancienne.');
    $('.tooltip-wrapper').tooltip({
      title: 'Votre version du navigateur est trop ancienne. Veuillez mettre votre navigateur à jour (minimum en version 49) pour pouvoir bénéficier de l\'extension.',
      placement: 'bottom'
    });
    $('#addingToBrowser').attr("disabled", true);
  }
} else {
  // Not supported
  $('#addingToBrowser').text('Navigateur non supporté.');
  $('.tooltip-wrapper').tooltip({
    title: 'Votre navigateur n\'est pas supporté pour le moment. Seuls Chrome et Firefox sont disponibles. Versions Safari et Edge à venir.',
    placement: 'bottom'
  });
  $('#addingToBrowser').attr("disabled", true);
}
