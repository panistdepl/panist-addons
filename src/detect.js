"use strict";

var firefoxVersion = '1.0.0';
var firefoxLink    = 'download/panist-' + firefoxVersion + '-an+fx.xpi';
const docUrl = 'https://github.com/panistdepl/panist-addons';


if (bowser.chrome || bowser.chromium) {
  $('#addingToBrowser').text('Ajouter l\'extension à Chrome');
  $('#docUsers').attr('href', docUrl + '#chrome');
  $('#addingToBrowser').attr('href','https://chrome.google.com/webstore/detail/panist/ohfemcgmkmcgcidiiaoimjphkndbeckj?hl=fr');
  $('#addingToBrowser').attr('title','Installer l\'extension depuis le Chrome Web Store');
} else 
if (bowser.firefox) {
  if (bowser.check({ firefox: "49" })) {
    $('#addingToBrowser').text('Ajouter l\'extension à Firefox');
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
