/* ============================================================
   BAFFI CAFE - MENIUL
   ------------------------------------------------------------
   Aici se schimba preparatele si preturile. Nimic altceva.

   Forma unei categorii:
     { c:'Nume categorie', img:'poza.webp' sau null, i:[ ...preparate ] }

   Forma unui preparat:
     [ 'Nume (gramaj)', pret_in_lei, 'ingrediente' ]

   Reguli:
   - pretul e numar simplu, fara ghilimele si fara „lei": 36, nu '36 lei'
   - daca un preparat n-are ingrediente, se lasa sirul gol: ''
   - apostroful dintr-un nume se scrie \' , altfel rupe randul
   - ordinea categoriilor de aici e ordinea din pagina

   Dupa orice modificare: deschide v4/index.html si verifica in meniu.
   ============================================================ */

const MENU = [
 {c:'Mic dejun', img:null, i:[
  ['Omletă Baffi (400g)',36,'2 ouă, șuncă 50g, telemea 50g, legume 30g, cartofi prăjiți 250g'],
  ['Ouă ochiuri (150g)',15,'2 ouă, sare, piper, ulei'],
  ['Omletă cu șuncă și cașcaval (350g)',29,'2 ouă, șuncă 50g, cașcaval, sare, piper'],
  ['Ouă benedict cu somon (250g)',42,'2 ouă, sos cedar, somon afumat, unt, chiflă burger, guacamole'],
  ['Ouă benedict cu creveți (250g)',45,'2 ouă, sos cedar, creveți, unt, chiflă burger, guacamole'],
  ['Ouă cu spanac & quattro formaggi (350g)',48,'2 ouă, spanac 200g, brânzeturi 50g, unt']]},
 {c:'Starter', img:null, i:[
  ['Bruschete cu roșii (200g)',22,'pâine toast, roșii, usturoi, busuioc, oregano, ulei de măsline'],
  ['Bruschete cu prosciutto crudo (200g)',30,'pâine toast, prosciutto crudo, unt'],
  ['Hummus libanez (250g)',28,'năut, pastă de susan, usturoi, ulei de măsline'],
  ['Salată de vinete (200g)',25,'vinete, maioneză, ceapă'],
  ['Fasole bătută (200g)',25,'fasole, ceapă, sare, piper, ulei']]},
 {c:'Antreuri', img:null, i:[
  ['Măsline pane (200g)',25,'măsline, ou, făină, pesmet'],
  ['Mozzarella sticks cu smântână și cartofi prăjiți (250g)',32,'mozzarella, ou, făină, pesmet, smântână, cartofi'],
  ['Ficăței lionezi cu piure de cartofi (400g)',39,'ficăței de pui, cartofi, usturoi, ceapă, unt']]},
 {c:'Ciorbe și supe', img:null, i:[
  ['Ciorbă de burtă (350g)',28,'burtă de vită, smântână, usturoi, oțet, ouă'],
  ['Ciorbă de perișoare (350g)',22,'carne tocată de porc, morcovi, țelină, ceapă, ardei, borș'],
  ['Ciorbă de văcuță (350g)',22,'carne de vită, morcovi, țelină, ceapă, ardei, borș'],
  ['Ciorbă de legume (300g)',20,'morcovi, țelină, ceapă, ardei, fasole verde, mazăre, borș'],
  ['Supă cremă de roșii cu crutoane (300g)',20,'roșii, smântână, pâine']]},
 {c:'Salate', img:null, i:[
  ['Salată Baffi (400g)',65,'mix salată, mușchi de vită 150g, roșii cherry, cipollini, parmezan, cremă aceto, toast'],
  ['Salată Caesar (400g)',45,'iceberg, piept de pui 150g, parmezan, sos caesar, crutoane'],
  ['Salată de ton (400g)',45,'mix salată, ton 200g, ceapă, porumb, roșii, castraveți, măsline, toast'],
  ['Salată grecească (400g)',42,'mix salată, roșii, castraveți, ardei, măsline, feta, oregano, ulei de măsline'],
  ['Salată burrata (400g)',45,'burrata, roșii, mix salată, sos pesto'],
  ['Salată cu creveți (350g)',49,'mix salată, roșii cherry, creveți, feta, avocado, porumb, lămâie']]},
 {c:'Preparatele casei', img:null, i:[
  ['Carcalete Baffi (450g)',45,'ceafă de porc, cârnați afumați, cartofi prăjiți, brânză, 3 ouă, unt'],
  ['Ciolan de porc stînco cu fasole (650g)',68,'fasole, ciolan afumat, ardei, sos de roșii, ceapă, cimbru'],
  ['Ciolan de porc stînco cu cartofi (650g)',63,'cartofi, ciolan afumat de porc, usturoi, pătrunjel'],
  ['Cocoșel de munte și cartofi aromatizați (900g)',65,'cocoș de munte, cartofi aromați, mujdei'],
  ['Ciolan de miel stînco și piure cu sos de trufe (650g)',139,'ciolan de miel, cartofi, sos de trufe'],
  ['Pulpă de iepure cu piure (500g)',65,'pulpă de iepure, ierburi aromatice, cartofi'],
  ['Pui gorgonzola în foietaj (700g)',85,'piept de pui, foietaj, roșii cherry, gorgonzola, unt, usturoi'],
  ['Pulpă de rață confiată cu varză călită (500g)',59,'pulpă de rață confiată, varză'],
  ['Piept de rață cu portocală și orez cu parmezan (500g)',69,'piept de rață, sos de portocală, orez, unt, parmezan'],
  ['Piept de rață cu mere caramelizate și orez cu parmezan (500g)',69,'piept de rață, mere caramelizate, sos de măr, orez, parmezan']]},
 {c:'Burgeri', img:null, i:[
  ['Burger Baffi (800g)',75,'carne de vită 440g, cheddar, bacon, ou, roșii, ceapă caramelizată, murături, cartofi prăjiți'],
  ['Burger clasic (420g)',43,'carne de vită 220g, roșii, ceapă caramelizată, murături, salată, cartofi prăjiți'],
  ['Cheeseburger (420g)',49,'carne de vită 220g, cheddar, roșii, ceapă caramelizată, murături, cartofi prăjiți'],
  ['Crispy burger (450g)',45,'șnițel de pui, cheddar, sos, cartofi prăjiți'],
  ['Cheesy burger (420g)',45,'carne de vită 220g, mozzarella, cheddar, roșii, ceapă caramelizată, cartofi prăjiți'],
  ['Burger vegetarian (450g)',49,'halloumi, roșii, sos pesto, castraveți']]},
 /* Pizza NU e aici intenționat: nu se face zilnic, doar pe comandă pentru
    mese mari și evenimente. Vezi secțiunea „Evenimente private" și CFG.pizzaZilnic. */
 {c:'Preparate din pui', img:null, i:[
  ['Piept de pui la grătar cu cartofi prăjiți (450g)',42,'piept de pui 250g, cartofi prăjiți'],
  ['Pulpă dezosată de pui la grătar cu piure (500g)',42,'pulpă dezosată 300g, piure de cartofi, unt'],
  ['Șnițel de pui cu cartofi prăjiți (500g)',43,'carne de pui 200g, cartofi prăjiți, ou, făină, pesmet'],
  ['Pui Shanghai cu cartofi prăjiți (450g)',43,'carne de pui 200g, cartofi prăjiți, ou, făină'],
  ['Pui cu smântână și ciuperci, piure de cartofi (500g)',45,'carne de pui, ciuperci, smântână, piure de cartofi'],
  ['Piept de pui cu gorgonzola și piure cu sos de trufe (500g)',54,'piept de pui, gorgonzola, smântână, piure, trufe'],
  ['Pui la ceaun cu mămăligă și usturoi (800g)',43,'jumătate de pui, mămăligă, mujdei, murături']]},
 {c:'Preparate din porc', img:null, i:[
  ['Ceafă de porc la grătar cu cartofi prăjiți (500g)',42,'ceafă de porc 250g, cartofi prăjiți'],
  ['Coaste de porc cu cartofi aromați și sos BBQ (750g)',75,'coaste de porc 500g, cartofi aromatizați, sos barbecue'],
  ['Mici la grătar cu cartofi prăjiți (530g)',39,'3 mici de porc, cartofi prăjiți, muștar']]},
 {c:'Preparate din vită', img:null, i:[
  ['Mușchi de vită la grătar cu piure (450g)',119,'mușchi de vită 250g, piure de cartofi, unt'],
  ['Mușchi de vită cu sos gorgonzola și piure (500g)',150,'mușchi de vită 250g, gorgonzola, grancucina, piure'],
  ['T-Bone de vită cu piure, servit pe plită încinsă (750g)',195,'T-bone, cartofi, unt'],
  ['Tomahawk de vită cu legume la grătar, pe plită încinsă (750g)',195,'tomahawk, legume la grătar, unt']]},
 {c:'Preparate din oaie', img:null, i:[
  ['Pastramă de berbecuț cu mămăligă (500g)',65,'pastramă de berbecuț, mămăligă, unt'],
  ['Cotlete de berbecuț cu cartofi aromatizați (600g)',83,'cotlete de berbecuț, cartofi aromatizați']]},
 {c:'Platouri', img:null, i:[
  ['Platou de brânzeturi (2 pers., 700g)',170,'brie, gorgonzola, parmezan, nucă, brânză maturată, cașcaval, crackers, miere, fructe'],
  ['Platou cald (2 pers., 1500g)',170,'ceafă, piept de pui, mici, cârnați, pastramă, mămăligă, cartofi, murături, sosuri'],
  ['Platou cald (4 pers., 3000g)',320,'ceafă, piept de pui, mici, cârnați, pastramă, mămăligă, cartofi, murături, sosuri']]},
 {c:'Pește și fructe de mare', img:null, i:[
  ['Tigaie Saganaki (400g)',68,'creveți, feta, sos de roșii, ceapă roșie, peperoncino, mozzarella, parmezan'],
  ['Dorada cu legume la grătar (600g)',58,'dorada, legume la grătar'],
  ['Somon la grătar cu sparanghel (450g)',65,'file de somon, sparanghel'],
  ['Crap prăjit cu mămăliguță și mujdei (500g)',48,'crap, mălai, usturoi'],
  ['Saramură de crap cu mămăliguță (550g)',58,'crap, ardei, roșii, ceapă, ardei iute, mălai, usturoi'],
  ['Grigliata frutti di mare (1200g)',160,'4 creveți tiger, calamar tub, 4 tentacule, dorada, lămâie, sos calypso'],
  ['Creveți crocanți cu salată și sos calypso (300g)',49,'8 creveți pane, mix salată, sos calypso'],
  ['Scoici în sos de vin alb (500g)',49,'scoici, vin alb, usturoi, ardei iute, pătrunjel, roșii cherry'],
  ['Scoici în sos roșu (500g)',49,'scoici, sos de roșii, roșii cherry, usturoi, ardei iute, pătrunjel'],
  ['Inele de calamar pane și sos calypso (250g)',45,'calamar, făină, ou'],
  ['Caracatiță la tigaie cu roșii cherry și usturoi (400g)',150,'caracatiță, usturoi, roșii cherry, ardei iute, unt'],
  ['Caracatiță la grătar cu salată (200g)',120,'caracatiță, mix salată'],
  ['Tentacule de calamar cu roșii și usturoi (300g)',75,'tentacule de calamar, usturoi, roșii cherry, ardei iute, unt'],
  ['Platou fructe de mare pane (4–6 pers.)',295,'creveți pane, calamar pane, tentacule, creveți cu cartofi, scoici pane, cartofi, sosuri'],
  ['Platou Baffi cu fructe de mare la grill (4–6 pers.)',495,'creveți tiger, tentacule, calamar tub, creveți la tigaie, scoici în sos de vin, orez cu legume']]},
 {c:'Paste', img:null, i:[
  ['Baffi cu fructe de mare (350g)',55,'paste, mix fructe de mare, usturoi, sos de roșii, ardei iute, ulei de măsline'],
  ['Bologneze (350g)',43,'paste, sos ragu, carne tocată'],
  ['Tagliatelle vitello (400g)',68,'paste, vită, ciuperci porcini, sos de trufe, parmezan'],
  ['Carbonara (350g)',40,'paste, bacon, grancucina, parmezan, ou'],
  ['Siciliene al forno (500g)',48,'paste, piept de pui, ciuperci, bacon, mozzarella, parmezan, sos de roșii'],
  ['Arrabbiata (400g)',35,'paste, sos de roșii, peperoncino, ulei de măsline, busuioc'],
  ['Quattro formaggi (400g)',45,'paste, brie, gorgonzola, parmezan, grancucina']]},
 {c:'Garnituri', img:null, i:[
  ['Cartofi aromați cu usturoi și verdeață (200g)',15,''],
  ['Cartofi prăjiți (200g)',12,''],
  ['Piure de cartofi (200g)',15,''],
  ['Orez cu legume (200g)',15,''],
  ['Legume la grătar (200g)',12,''],
  ['Mămăliguță (250g)',9,''],
  ['Varză călită (250g)',12,''],
  ['Pâine pe vatră (125g)',5,'']]},
 {c:'Salate însoțitoare', img:null, i:[
  ['Salată de vară (250g)',15,''],['Salată de varză albă (250g)',15,''],
  ['Salată asortată de murături (250g)',15,''],['Salată verde cu lămâie (150g)',15,''],
  ['Salată de ceapă roșie (150g)',15,''],['Salată de ardei kapia (200g)',15,'']]},
 {c:'Desert', img:null, i:[
  ['Clătite cu dulceață sau ciocolată (250g)',24,''],
  ['Clătite brașovene (300g)',30,''],
  ['Papanași cu dulceață și smântână (400g)',35,''],
  ['Înghețată de cocos și rafaello în fruct (150g)',30,''],
  ['Lava cake cu înghețată (200g)',30,''],
  ['Tort de mere și caramel',30,''],
  ['Cheesecake cu mango și fructul pasiunii',30,''],
  ['White cake cu nuci pecan',30,'']]},
 {c:'Cafea', img:null, drink:true, i:[
  ['Espresso scurt (40ml)',12,''],['Espresso lung (80ml)',14,''],['Espresso dublu (60ml)',18,''],
  ['Espresso decofeinizat (40ml)',16,''],['Cappuccino (150ml)',16,''],['Café latte (300ml)',17,'']]},
 {c:'Băuturi calde', img:null, drink:true, i:[
  ['Ceai (200ml)',17,''],['Ciocolată caldă (200ml)',22,'']]},
 {c:'Frappe și iced coffee', img:null, drink:true, i:[
  ['Ness frappe (330ml)',25,'ness, lapte, sirop de zahăr, topping de ciocolată, frișcă'],
  ['Cafe frappe (330ml)',25,'espresso, lapte, sirop de zahăr, topping de ciocolată, frișcă'],
  ['Baffi Oreo / Snickers frappe (330ml)',30,'espresso, lapte, sirop de alune, oreo sau snickers, frișcă'],
  ['Ness Oreo / Snickers frappe (330ml)',30,'ness, lapte, sirop de alune, oreo sau snickers, frișcă'],
  ['Iced Baffi latte (200ml)',25,'espresso, lapte, gheață'],
  ['Flavoured Baffi latte (200ml)',25,'espresso, lapte, cremă de lapte, sirop de caramel sau vanilie']]},
 {c:'Limonade și shake-uri', img:null, drink:true, i:[
  ['Baffi Lemon (330ml)',25,'lămâie, fructul pasiunii, piersică, mentă'],
  ['Limonadă cu mentă și ghimbir (330ml)',25,'lămâie, mentă, ghimbir'],
  ['Baffi exotic (330ml)',25,'lămâie, fructul pasiunii, portocale, piersici'],
  ['Limonadă clasică (330ml)',25,'lămâie, sirop de zahăr sau miere'],
  ['Limonadă cu fructul pasiunii (330ml)',25,''],
  ['Limonadă cu piersică (330ml)',25,''],
  ['Fresh de portocale (330ml)',25,''],
  ['Oreo shake (450ml)',27,'sirop de vanilie, Oreo, lapte'],
  ['Vanilla shake (450ml)',25,''],['Chocolate shake (450ml)',25,'']]},
 {c:'Băuturi răcoritoare', img:null, drink:true, i:[
  ['Coca-Cola (250ml)',13,''],['Coca-Cola Zero (250ml)',13,''],['Fanta (250ml)',13,''],
  ['Sprite (250ml)',13,''],['Schweppes (250ml)',13,''],['Cappy portocale sau piersică (250ml)',15,''],
  ['Dorna plată sau minerală (330ml)',12,''],['Dorna plată sau minerală (750ml)',20,''],
  ['Burn (250ml)',15,''],['Red Bull (250ml)',20,'']]},
 {c:'Bere și cidru', img:null, drink:true, i:[
  ['Heineken (330ml)',15,''],['Heineken 0,0% (330ml)',14,''],['Birra Moretti (330ml)',14,''],
  ['Birra Moretti 0,0% (330ml)',14,''],['Ciuc Premium (330ml)',13,''],['Ciuc Radler (330ml)',13,''],
  ['Strongbow Red Berries (330ml)',13,''],['Strongbow Apple Cider (330ml)',13,''],['Corona Extra (350ml)',20,'']]},
 {c:'Cocktailuri', img:null, drink:true, i:[
  ['Pina Colada (250ml)',28,''],['Sex on the Beach (250ml)',28,''],['Mojito (250ml)',28,''],
  ['Long Island Ice Tea (250ml)',28,''],['Screwdriver (250ml)',28,''],['Daiquiri (250ml)',28,''],
  ['Cuba Libre (330ml)',28,''],['Campari Orange (250ml)',28,''],['Orgasm (250ml)',28,''],
  ['Aperol Spritz (250ml)',28,''],['Hugo (250ml)',30,''],
  ['Green Apple fără alcool (250ml)',25,''],['Baffi fără alcool (250ml)',25,''],['Fruit punch fără alcool (250ml)',25,'']]},
 {c:'Whisky și coniac', img:null, drink:true, i:[
  ['Johnnie Walker Red Label (40ml)',18,''],['Johnnie Walker Black Label (40ml)',25,''],
  ['Johnnie Walker Gold (40ml)',35,''],['Jameson (40ml)',18,''],['J&B (40ml)',18,''],
  ['Chivas Regal 12 ani (40ml)',30,''],["Jack Daniel's (40ml)",25,''],
  ['Jidvei Vinars VSOP (50ml)',20,''],['Metaxa 7* (50ml)',25,''],
  ['Brâncoveanu XO (50ml)',25,''],['Courvoisier (50ml)',20,'']]},
 {c:'Spirtoase și digestive', img:null, drink:true, i:[
  ['Țuică de Bran (50ml)',22,''],["Palincă Dom' Profesor (50ml)",25,''],['Grey Goose Vodka (50ml)',25,''],
  ['Beefeater (50ml)',18,''],['Bacardi Space (50ml)',20,''],['Bumbu XO (50ml)',18,''],['Camino (50ml)',18,''],
  ['Jägermeister (50ml)',20,''],['Amaretto Disaronno (50ml)',20,''],["Bailey's (50ml)",20,''],
  ['Campari (50ml)',18,''],['Martini Bianco (50ml)',18,''],['Martini Rosso (50ml)',18,'']]},
 {c:'Vin alb', img:null, drink:true, i:[
  ['Domeniile Averești — Diamond Zghihară, sec (750ml)',120,''],
  ['Domeniile Averești — Sole Chardonnay (750ml)',150,''],
  ['Domeniile Averești — Nocturne Chardonnay (750ml)',110,''],
  ['Domeniul Coroanei Segarcea — Principesa Margareta alb (750ml)',150,''],
  ['Domeniul Coroanei Segarcea — Marama Fetească Albă (750ml)',95,''],
  ['Domeniul Coroanei Segarcea — Marama Fetească Regală (750ml)',95,''],
  ['Domeniul Coroanei Segarcea — Marama Tămâioasă Românească (750ml)',95,''],
  ['Domeniul Coroanei Segarcea — Soiuri Rare Viognier (750ml)',110,''],
  ['Domeniul Coroanei Segarcea — Prestige Chardonnay (750ml)',95,'']]},
 {c:'Vin rosé și roșu', img:null, drink:true, i:[
  ['Domeniile Averești — Diamond Busuioacă, sec (750ml)',120,''],
  ['Recaș — Sole Chardonnay, sec (750ml)',150,''],
  ['Segarcea — Marama Tămâioasă Roză, sec (750ml)',95,''],
  ['Segarcea — Marama Fetească Neagră rosé (750ml)',95,''],
  ['Segarcea — Soiuri Rare Tămâioasă Roză, demidulce (750ml)',110,''],
  ['Domeniile Averești — Diamond Fetească Neagră, sec (750ml)',120,''],
  ['Purcari — Rară Neagră (750ml)',110,''],
  ['Segarcea — Principesa Margareta roșu (750ml)',150,''],
  ['Segarcea — Marama Fetească Neagră (750ml)',95,''],
  ['Segarcea — Soiuri Rare Marselan (750ml)',110,'']]},
 {c:'Spumant și prosecco', img:null, drink:true, i:[
  ['Purcari — Cuvée Alb Brut (750ml)',150,''],['Purcari — Cuvée Rosé Brut (750ml)',150,''],
  ['Domeniul Coroanei — Clipa Chardonnay (750ml)',130,''],['Domeniul Coroanei — Clipa Rosé (750ml)',130,'']]}
];
