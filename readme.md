
# BOUTON PANIST

Le "bouton PANIST" est une extension à installer dans un navigateur, Chrome ou Firefox. Une fois installé dans votre navigateur, il analysera l'ensemble des pages visitées à la recherche d'identifiants documentaires (DOI, PII, PMID, COinS...) et ajoutera des boutons cliquables « PANIST » d’accès au plein-texte PDF lorsque le document est disponible dans la plateforme PANIST.

Installez le en vous rendant sur  [**https://addons.panist.fr**](https://addons.panist.fr/)

Voici à quoi ressembleront les boutons PANIST cliquables qui apparaîtront dans les pages web au plus près des références bibliographiques :

![](./assets/btn_panist.png)

Le bouton « PANIST » peut s’activer notamment sur les pages  [Wikipédia](https://fr.wikipedia.org/wiki/Virus_Zika), Scopus, ou même HAL augmentant ainsi la visibilité et la diffusion des ressources PANIST sans avoir à proposer un nouveau portail documentaire à l'utilisateur final.

Comme pour tous les autres modes d’accès au PDF ([widgets](https://widgets.panist.fr/)…) il est limité aux ayants droit PANIST, c'est-à-dire les personnels de l'Enseignement Supérieur et de la Recherche.

En tâche de fond, cette extension fait un usage intensif du  [**service de résolution OpenURL de l’API PANIST**](https://doc.istex.fr/api/openurl/).

Vous trouverez ci-dessous comment l'installer étape par étape pour les différents navigateurs web.

## Firefox ou Chrome

=> La recherche sur Wikipédia d’[**« Parkinson's disease »**](https://en.wikipedia.org/wiki/Parkinson%27s_disease)  donne la bibliographie suivante :

![](./assets/wikipedia_screenshot_nobtn.png)

=> Aller sur  [**https://addons.panist.fr**](https://addons.panist.fr/).
=> Cliquer sur « Ajouter l’extension à Firefox » (ou Chrome).
=> Autoriser l’installation.
_Retrouver l’extension dans « Ouvrir le menu/Modules/Extensions »_
=> Un écran demande la sélection d'un établissement dans une liste déroulante.

![](./assets/config_page.png)

=> Choisir votre établissement et cliquer sur «Enregistrer ».
=> Recharger la page de Wikipédia « Ctrl + F5 ».
=> Si un indicateur vert s'affiche sur l'extension de l'icône c'est a dire que la page contient des boutons Panist.
![](./assets/icon_with_notif.png)


![](./assets/wikipedia_screenshot.png)


=> En cliquant sur le bouton Panist tu peux accéder au fichier plein-texte PDF 
![](./src/img.png)
