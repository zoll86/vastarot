/* ============================================================
   ANUBISZ VASKAPUJA — TARTALMI ADATBÁZIS
   Minden, ami az oldalon szöveg. A logika az app.js-ben van.
   ============================================================ */

var KEPMAPPA = 'kepek/web/';
var KEPKITERJESZTES = '.jpg'; var ZODMAPPA = 'kepek/zodiak/web/'; var ZODKITERJESZTES = '.jpg';

/* ---------- TICKER ---------- */
var TICKER = [
  'Rontáslevétel sikeres: Tükör-dzsinn, Budapest XIII. kerület',
  'Kvantum-fehérje készlet feltöltve (0 g, 100% információ)',
  'Telihold előtt két nappal PR-ablak nyílik — melegíts be lelkileg is',
  'A Rontásfelvételi Főosztály ma a szauna felső padján fogad',
  'Új tárcsa-numerológiai rekord: 37,5 = XV. Az Ego',
  'Figyelem: a lehúzógép ley-vonala eltolódott 40 cm-rel balra',
  'Ma ismét 0 klinikai vizsgálat igazolta módszereinket',
  'Mind meg fogjuk csinálni. A vas ezt nem ígéri, mi viszont igen',
  'Beavatottjaink száma átlépte a következő szent számot',
  'A Kapuőr üzeni: hajnali ötkor is ő dönti el, ki jut be'
];

/* ---------- AHOGY LÁTHATTAD ---------- */
var PRESS = ['Vasvilág Magazin','Ezoterikus Kondi Szemle','Quantum Fitness Journal','Shaker & Sors','Holdfázis Havilap','A Tárcsa Hangja'];

/* ---------- VASTAROT PAKLI (22 lap) ---------- */
var LAPOK=[
{r:'0',s:'🚪',n:'A Belépő',k:['kezdet','tétovaság','friss aura'],
 u:'A Kapu kinyílt, és te beléptél rajta — még nem tudod, mi a különbség a Smith-gép és a squat rack között, és pont ez az ártatlanság a legerősebb védelem a rontás ellen. A tapasztalt emelő már rossz szokásokat hord, te még csak egy táskát.',
 d:'Bemelegítés nélkül, terv nélkül, ismeret nélkül sétáltál be. A Kapu így is beengedett, de a Kapuőr feljegyezte. Nézd meg, mi van a rúdon, mielőtt alá fekszel — a meglepetés nem edzésmódszer, hanem rontás.',
 rit:'Az első gépnél, amit nem ismersz, kérdezz meg valakit. A kérdés maga a szertartás.',
 el:'Levegő',cr:'Hegyikristály (a szekrénykulcson)'},
{r:'I',s:'⚗️',n:'A Shaker Mestere',k:['eszköz','tudás','önámítás'],
 u:'Nálad van minden: öv, csuklópánt, két shaker, három alkalmazás és egy kreatinos doboz, amelyen még rajta a fólia. A Mester nem attól mester, hogy birtokolja az eszközöket, hanem hogy tudja, melyik hármat nem kell soha használnia.',
 d:'A táskád nehezebb, mint amit felemelsz belőle. Ez üzenet. A por nem edzés, a shaker nem gyakorlat, az alkalmazás nem edző — a Mester fordítva lóg, és a fóliát még mindig nem szedte le.',
 rit:'Vegyél ki egy tárgyat a táskából. Bármelyiket. Ne vidd be egy hétig.',
 el:'Föld',cr:'Réz (a shaker kupakjában)'},
{r:'II',s:'📜',n:'A Titkos Program',k:['terv','türelem','rejtett tudás'],
 u:'A Program működik, csak még nem hallatszik. A negyedik héten szólal meg, mint a régi orgona a szentély alatt. Addig unalmas, ismétlődő és tökéletes — ez a jó jel. A rejtett tudás nem sziporkázik, csak dolgozik.',
 d:'Megint programot cseréltél. Egyik sem volt rossz. A váltogatás volt a rontás. A Titkos Program fordítva azt jelenti: már te sem tudod, mit csinálsz kedden, és a rúd ezt pontosan érzi.',
 rit:'Írd fel papírra a következő négy hét gyakorlatait. Ne nézd meg. Csináld.',
 el:'Víz',cr:'Lápisz lazuli (a jegyzetfüzet spirálján)'},
{r:'III',s:'🍚',n:'A Bőség Anyja',k:['táplálék','növekedés','többlet'],
 u:'Eszel eleget, és ez meglátszik a rúdon. A Bőség Anyja megáldotta a rizsedet, a tojásodat és — ne tagadd — a második adagot is. A növekedés ma hivatalosan engedélyezett; a kalória szent, ha a súly követi.',
 d:'A Bőség átcsapott fölöslegbe. A tömegelés nem varázsszó, amitől a harmadik pizza is izommá válik. Az Anya fordítva ül, és a nadrággombod tudja, miért.',
 rit:'Ma az első falat előtt mondd ki halkan: „ez üzemanyag”. A harmadik adag előtt már ne mondd.',
 el:'Föld',cr:'Citrin (a konyhában, a mérleg mellett)'},
{r:'IV',s:'🏛️',n:'A Terem Ura',k:['rend','fegyelem','merevség'],
 u:'A rutin ma a szövetségesed. Ugyanaz a hely, ugyanaz az idő, ugyanaz a sorozat — ettől lesz a könnyűből egyszer nehéz, a nehézből egyszer könnyű. A Terem Ura nem kreatív. Ezért uralkodik.',
 d:'Annyira szabályos vagy, hogy már nem fejlődsz. Az Úr fordítva a zsarnok: ugyanaz a hat gyakorlat két éve, ugyanaz a súly, ugyanaz a panasz. Egy lépés oldalra nem árulás, hanem periodizáció.',
 rit:'Cserélj ki egyetlen gyakorlatot — de csak egyet. A rend ennyit elbír.',
 el:'Tűz',cr:'Hematit (az övcsaton)'},
{r:'V',s:'🧔',n:'A Vén Edző',k:['hagyomány','tanítás','dogma'],
 u:'Hallgass arra, aki húsz éve csinálja. Az alapok azért unalmasak, mert működnek, és azért működnek, mert unalmasak. A Vén Edző nem tud angolul, nem nézett videót, és mégis több ismétlést látott, mint az algoritmus.',
 d:'Valaki tekintélyből mond neked butaságot. Attól, hogy nagyobb nálad, még nem élettankönyv. A Vén Edző fordítva a dogma: „mi annak idején” — igen, és annak idején hogy volt a térdetek?',
 rit:'Kérdezz meg egy idősebb emelőt bármiről. Aztán csak a felét fogadd meg — ez a hagyomány.',
 el:'Tűz',cr:'Tigrisszem (egy régi csuklópántban)'},
{r:'VI',s:'🤝',n:'A Páros Sorozat',k:['társ','döntés','felelősség'],
 u:'Edzőtárssal ma többet bírsz. A biztosítás nem gyengeség, hanem kétszemélyes bátorság. A Páros Sorozat a legrégibb szövetség a szentélyben: egyikőtök hazudik a súlyról, a másik elhiszi, és a rúd mégis felmegy.',
 d:'Bent vagytok, de csak beszélgettek. Negyven perc, két sorozat, kilenc téma. A Páros Sorozat fordítva a kávézó: az edzőtárs nem az, akivel beszélgetsz, hanem az, akivel hallgatsz.',
 rit:'Egy sorozat szó nélkül. Ha az edzőtárs megszólal, az ő sorozata nem számít.',
 el:'Levegő',cr:'Rózsakvarc (közös kulcstartón)'},
{r:'VII',s:'🛞',n:'A Tárcsás Szekér',k:['lendület','irány','erőltetés'],
 u:'Megy a szekér. Ma nem tervezni kell, hanem hajtani — a tárcsák maguktól gurulnak a rúdra, és nem kérdezik, honnan jött az erő. Ezt a napot a szentély „nyílt kapu”-napnak hívja.',
 d:'Sebességed van, irányod nincs. Négy hónapja gyorsulsz ugyanabban a körben, és a szekér már saját maga mögött fut. A Tárcsás Szekér fordítva a plateau: sok mozgás, nulla elmozdulás.',
 rit:'Írd le, mit emeltél ma. Ha nem tudod, az a fordított szekér.',
 el:'Tűz',cr:'Gránát (a kerekek alatt)'},
{r:'VIII',s:'🦁',n:'A Nyers Erő',k:['erő','önuralom','szelídítés'],
 u:'Az erő ma engedelmes. Nem letéped a rudat, hanem irányítod — ez a különbség a súly és a teljesítmény között, és az Oroszlán nem ordít, ha nem kell. A szelíd erő a legveszélyesebb: hangtalanul rak fel húsz kilót.',
 d:'Erőből viszed, amit technikából kellene. A derekad most csendben van, de jegyzetel, és csütörtökön felolvassa. A Nyers Erő fordítva a sérülés előszobája — díszes, de huzatos.',
 rit:'Vegyél le tíz kilót, és csináld meg úgy, hogy senki ne hallja. Ez a szelídítés.',
 el:'Tűz',cr:'Vörös jáspis (a derékövön)'},
{r:'IX',s:'🕯️',n:'A Hajnali Remete',k:['magány','csend','elzárkózás'],
 u:'Üres terem, hatkor, senki nem szól hozzád. A Remete gyertyája a lámpa a mennyezeten, amelyet a Kapuőr csak neked kapcsolt fel. Ma senkire nincs szükséged, és pont ez a jó benne: a csend a legjobb pre-workout.',
 d:'Túl régóta edzel egyedül. Valaki két másodperc alatt kijavítana valamit, amit te két éve nem veszel észre — de te fejhallgatóval jársz, és a Remete fordítva nem bölcs, hanem csak süket.',
 rit:'Vedd le a fülhallgatót egy sorozatra. Hallgasd meg a termet. Nem ítél, csak zörög.',
 el:'Föld',cr:'Obszidián (zsebben, senkinek nem mutatva)'},
{r:'X',s:'☸️',n:'A Ciklus Kereke',k:['periodizáció','fordulat','véletlen'],
 u:'A mélypont után jön a felfelé ív. A rossz hetek nem hibák, hanem a ciklus fizetős része, mint a tagdíj. A Kerék forog: aki most lent van, hamarosan a rúd alatt lesz — a jó értelemben.',
 d:'Minden hónapban ugyanoda érkezel vissza. A kör csak akkor lesz spirál, ha viszel bele terhelést; a Kerék fordítva a mókuskerék, és a mókus is csak azt hiszi, hogy halad.',
 rit:'Nézd meg egy hónappal ezelőtti bejegyzésedet. Ha ugyanaz, forgasd meg a kereket: adj hozzá 2,5 kilót.',
 el:'Víz',cr:'Ametiszt (a naptáron)'},
{r:'XI',s:'⚖️',n:'A Mérleg',k:['egyensúly','igazság','elszámolás'],
 u:'Amit beletettél, ma visszakapod. Se többet, se kevesebbet — a vas nem tud hízelegni, és nem tud hazudni sem. A Mérleg nem a fürdőszobai; az csak egy szám. Ez az igazi elszámolás: húzás és nyomás, alvás és sorozat.',
 d:'Húzol is, nyomsz is, de csak az egyiket szereted. A tested könyvelése pontosabb, mint a tiéd, és a Mérleg fordítva a vállad előreesését jelenti: a tükör előtti izmok nyertek, a tükör mögöttiek pert indítanak.',
 rit:'Számold össze a heti húzó és nyomó sorozatokat. Ha nem egyezik, a különbséget hétfőn törleszted.',
 el:'Levegő',cr:'Jáde (mindkét zsebben, egyformán)'},
{r:'XII',s:'🙃',n:'A Húzódzkodó',k:['függés','új nézőpont','várakozás'],
 u:'A rúdon lógva más a világ. Ma nem haladni kell, hanem kibírni — és a kibírás maga a haladás, csak lassított felvételen. A Húzódzkodó nem mozdul, mégis erősödik: ez a szentély egyik legmélyebb titka.',
 d:'Beragadtál egy pozícióba, és vársz, hogy valaki levegyen. A várakozás nem terv, csak kényelmesebb annál. Fordítva a Húzódzkodó az a lap, ahol az ember három hónapja „majd jövő héten kezdi” a húzódzkodást.',
 rit:'Lógj a rúdon harminc másodpercig. Ne csinálj semmit. Ez a nézőpont-váltás.',
 el:'Víz',cr:'Holdkő (a húzódzkodó rúd fölött)'},
{r:'XIII',s:'🕳️',n:'A Deload',k:['lezárás','újrakezdés','félelem'],
 u:'Valaminek vége: egy programnak, egy szokásnak, egy súlynak. Engedd el — a következő már az ajtóban toporog, és a Csontváz a trónon nem a halál, hanem a pihenőhét, amit mindenki fél kivenni, és mindenki utána nő.',
 d:'Félsz visszavenni, mert azt hiszed, elveszíted. Pont fordítva működik: a pihenés nem visszalépés, hanem a rontás kifüstölése. Aki sosem deloadol, annak a Csontváz nem lapon, hanem az ízületeiben jelenik meg.',
 rit:'Egy héten át a súlyok hatvan százaléka. Ha szégyelled, csináld hajnalban.',
 el:'Föld',cr:'Fekete turmalin (a pihenőnapokon viselve)'},
{r:'XIV',s:'🥄',n:'A Makró',k:['mérték','arány','türelem'],
 u:'A jó arány ma többet ér, mint a nagy szám. Egy apró kiigazítás — egy kanál, egy tojás, egy óra alvás —, és két hét múlva más ember vagy. A Makró angyala nem tilt, csak mér, és a mérés a legősibb varázslat.',
 d:'Vagy mindent tiltasz, vagy semmit. A közép sosem volt látványos, mégis mindig az nyer. Fordítva a Makró a hétfői fogadalom és a szerdai pizza között lakik, és mindkettőről tud.',
 rit:'Mérj le egyetlen adagot ma. Ne változtass rajta. Csak tudd.',
 el:'Víz',cr:'Akvamarin (a konyhai mérlegen)'},
{r:'XV',s:'😈',n:'Az Ego',k:['hiúság','kényszer','lánc'],
 u:'Van benned ma egy egészséges adag dac. Használd — de te tartsd pórázon, ne fordítva. Az Ego a szentély legveszélyesebb és leghasznosabb démona: ő rakja fel a húsz kilót, és ő is az, aki nem veszi le.',
 d:'Húsz kilóval többet tettél fel, mert néztek. A rúd nem tud imponálni helyetted, csak megmondani az igazat — általában a második ismétlésnél. Az Ego fordítva a láncra vert emelő, aki a láncot súlynak hiszi.',
 rit:'Következő sorozat: pontosan az, ami a naplóban áll. Egy grammal sem több, akárki néz.',
 el:'Tűz',cr:'Pirit (a tükör mögött)'},
{r:'XVI',s:'🗼',n:'Az Összeomlott Sorozat',k:['kudarc','összeomlás','tisztulás'],
 u:'Ledőlt valami, és ez jó hír: ami maradt, az bírja a terhelést. A Torony nem büntetés, hanem építészeti vélemény — a tested megmondta, hol volt hibás az alap. Most újra lehet rakni, ezúttal a fenekétől.',
 d:'Elszállt egy sorozat, és most az egész életedet felülvizsgálod. Egy rossz nap nem ítélet, csak egy rossz nap; a Torony fordítva a dráma, ahol az ember három nem sikerült ismétlésből karrierdöntést hoz.',
 rit:'Amelyik sorozat összeomlott, csináld meg még egyszer harminc százalékkal kevesebbel. Ez a takarítás.',
 el:'Tűz',cr:'Füstkvarc (a leszakadt tárcsa mellett)'},
{r:'XVII',s:'⭐',n:'A Személyi Csúcs',k:['remény','csúcs','vékony jég'],
 u:'Ma megvan az a nap, amikor rámehetsz. A Csillag lefelé nézi a rudat, és bólint. Melegíts fel rendesen, aztán vidd el — de csak egyszer, mert a Csillag egyszer nyílik ki, és a második kísérlet már a Torony.',
 d:'Csúcsot hajszolsz alvás és étel nélkül. A Csillag nem világít üres tankba, és a fordított Csúcs nem PR, hanem a videó, amit senkinek nem mutatsz, mert a harmadik ismétlésnél összecsuklott.',
 rit:'Ma egyetlen nehéz sorozat, tanú előtt. Utána haza. Ne kísérts.',
 el:'Levegő',cr:'Labradorit (a tárcsa alatt)'},
{r:'XVIII',s:'🌙',n:'A Hajnali Éhség',k:['illúzió','ösztön','zavar'],
 u:'A tested jelez, és ma érdemes hallgatni rá. Ne magyarázd túl: egyél. A Hold alatt minden nagyobb — az éhség, a fáradtság, a súly is —, de a Hajnali Éhség egyenes állásban egyszerűen csak azt jelenti: kell a kalória, adj neki.',
 d:'Este hős vagy, hajnalban filozófus. A rontás a szundi gombban lakik, nem benned. A Hold fordítva az illúzió: „holnap kétszer edzek” — a Hold ezt hallotta már, és nem szólt semmit, mert a Hold sosem szól.',
 rit:'Készítsd elő a reggelit este. A rontás nem tud főzni.',
 el:'Víz',cr:'Szelenit (az éjjeliszekrényen)'},
{r:'XIX',s:'☀️',n:'A Pumpa',k:['siker','öröm','önelégültség'],
 u:'Minden megy. Élvezd — az ilyen napokból élsz majd a rossz heteken. A Nap alatt a bicepsz megnő, a póló szűkül, és a tükör-dzsinn is csak bólogat. A Pumpa egyenes állásban tiszta öröm, és az öröm is adaptáció.',
 d:'Jól érzed magad, de nem terhelsz. A pumpa látvány, nem növekedés; a Nap fordítva a szoláriumbarna, amely alatt ugyanaz a súly van, mint tavaly. Húsz ismétlés rózsaszín súlyzóval nem ünnep, hanem bemelegítés.',
 rit:'Amelyik izmot ma jól érzed, holnap ne edzd. A Nap is lemegy.',
 el:'Tűz',cr:'Napkő (az öltözői tükör alatt)'},
{r:'XX',s:'📯',n:'A Visszatérés',k:['számvetés','újrakezdés','ébredés'],
 u:'Vége az ünnepnek, és te elindultál. A Harsona a Kapuőr ébresztője: aki visszatér, azt a szentély nem kérdezi, hol volt. A visszatérés nehezebb, mint a kezdés, és többet is ér — ezért fizet érte az ember izomlázzal.',
 d:'Már háromszor tértél vissza idén. A fa mindig útban van, mindig más ürüggyel. A Harsona fordítva a „hétfőtől biztosan” mondat, amelyet a szentély falai már kívülről tudnak.',
 rit:'Az első visszatérő edzésen a súlyok fele. A büszkeség fele is.',
 el:'Levegő',cr:'Karneol (a bérlet mellett)'},
{r:'XXI',s:'🌍',n:'A Teljes Test',k:['egész','befejezés','integráció'],
 u:'Összeáll a kép: alvás, étel, terhelés, pihenés. Ez a hét lezár valamit, méghozzá jó értelemben. A Világ lapja a szentély legritkább vetése — az az ember, akinek a vádlija és a bicepsze ugyanabban az évszázadban él.',
 d:'Egy testrészt évek óta kihagysz. A világ nem kerek fél lábbal — és a nadrág sem áll jól. A Teljes Test fordítva az az emelő, aki felülről gyönyörű, alulról pedig két gyufaszálon áll, és csodálkozik, hogy fúj a szél.',
 rit:'Amelyik izomcsoportot legrégebben edzetted, az a mai nap. Igen, az.',
 el:'Föld',cr:'Mind a négy elem — vagy egy lábnap'}
];

/* ---------- KÁRTYAHÁT ---------- */
var HATRAJZ = '<svg class="backart" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">'+
 '<defs><radialGradient id="bg1" cx="50%" cy="50%"><stop offset="0%" stop-color="#3a2b52"/>'+
 '<stop offset="100%" stop-color="#150e26"/></radialGradient></defs>'+
 '<rect width="100" height="160" fill="url(#bg1)"/>'+
 '<g stroke="#d4af5a" fill="none" stroke-width="1.1" opacity=".85">'+
 '<circle cx="50" cy="80" r="30"/><circle cx="50" cy="80" r="22" opacity=".6"/><circle cx="50" cy="80" r="12" opacity=".4"/>'+
 '<line x1="24" y1="66" x2="76" y2="94"/><line x1="24" y1="94" x2="76" y2="66"/>'+
 '<circle cx="24" cy="66" r="4"/><circle cx="76" cy="94" r="4"/><circle cx="24" cy="94" r="4"/><circle cx="76" cy="66" r="4"/>'+
 '<rect x="8" y="8" width="84" height="144" rx="3" opacity=".5"/><rect x="12" y="12" width="76" height="136" rx="2" opacity=".3"/></g>'+
 '<text x="50" y="87" font-size="20" text-anchor="middle" fill="#f3dfa0" opacity=".9">&#9765;</text></svg>';

/* ---------- VETÉS: EGYÜTTÁLLÁSOK ---------- */
var EGYUTT = [
 {a:'Az Ego',b:'Az Összeomlott Sorozat',v:'Az Ego és a Torony egy vetésben a szentély legrégebbi figyelmeztetése: a héten olyan súlyt akarsz feltenni, amit nem a tested kért, hanem a büszkeséged. Vedd le róla a tárcsát, mielőtt az élet veszi le — az élet nem rakja vissza a helyére.'},
 {a:'A Deload',b:'A Személyi Csúcs',v:'Lezárás és csúcs egyszerre. Valamit be kell fejezned ahhoz, hogy a rekord megszülethessen — általában egy szokást, nem egy gyakorlatot. A Csontváz és a Csillag együtt: pihenj most, hogy ragyoghass kedden.'},
 {a:'A Titkos Program',b:'A Ciklus Kereke',v:'A terv és a kerék együtt azt mondja: nem programot kell váltanod, hanem kivárnod. A negyedik hét előtt semmi nem dől el; aki hamarabb dönt, az nem dönt, csak menekül.'},
 {a:'A Shaker Mestere',b:'A Bőség Anyja',v:'A Mester és az Anya együtt a konyhai rontás klasszikusa: minden por, minden adag, minden alkalmazás megvan, csak az alvás hiányzik. A vetés szerint a legerősebb kiegészítőd nyolc órán át tart, és nem kapható.'},
 {a:'A Tükör',b:'A Pumpa',v:'A tükör és a nap: ma gyönyörű leszel, és semmit nem tanulsz. A vetés nem tiltja, csak jegyzi.'},
 {a:'A Hajnali Remete',b:'A Páros Sorozat',v:'Egyedül vagy társsal? A vetés mindkettőt kihúzta — ez a szentélyben azt jelenti, hogy nem az edzőtárs hiányzik, hanem az, hogy te legyél az valakinek.'},
 {a:'A Vén Edző',b:'A Belépő',v:'A Vén Edző és a Belépő egy vetésben: valaki tanítani fog, és nem biztos, hogy ő tudja jobban. A hagyomány szent, a térdvédő szentebb.'},
 {a:'A Húzódzkodó',b:'A Visszatérés',v:'Lógsz és visszatérsz — ez a vetés egy hónapja tartó szünetet lát, és egy szégyenlős újrakezdést. A szentély nem kérdez, a bérlet nem jár le, a rúd nem haragszik.'}
];
var VEGSZO = [
 'A három lap együtt azt mondja: kevesebb újítás, több ismétlés. Ez a hét nem a kísérletezésé, hanem a rezgésé.',
 'A vetés lefelé indul és felfelé zár. Ha a hétfő döcög, ne temesd el az egész hetet kedden — a vas ciklikus, a naptár lineáris, és a kettő közül a vas az idősebb.',
 'A lapok szerint egy dolgot csinálsz jól, kettőt hanyagul. A jót ne bántsd, a másik kettőből válassz egyet — nem hármat. Az Intézet ezt hívja szakrális periodizációnak.',
 'A középső lap a legerősebb. Ami most van, az fontosabb, mint amitől félsz vagy amit remélsz; a jelen idő az egyetlen, amelyben tárcsát lehet rakni a rúdra.',
 'A vetés türelmet ír elő. A számok nem hetekben mozdulnak, hanem holdciklusokban, és nem szólnak előre. Aki sürgeti őket, annak a Torony válaszol.',
 'A hét kulcsa nem a teremben dől el, hanem a konyhában és az ágyban. A rúd csak aláírja, amit ott elhatároztál.',
 'A lapok szerint pontosan tudod, mit kellene tenned. A vetés nem hozott új információt, csak tanút — és a tanú a szentélyben többet ér, mint a bizonyíték.',
 'Három lap, egy üzenet: ne akard behozni egy hét alatt azt, amit három hónap alatt hagytál el. A vas emlékszik, de nem sértődik.',
 'A vetés aurája aranyszínű, enyhén zöldes beütéssel, ami a szentélyben a „menni fog, csak ne siess” állapotot jelenti.',
 'A három lap között feszültség van, és a feszültség maga a program. Aki laza vetést akar, az jógázzon — mi itt vasat kérdezünk.'
];

/* ---------- ORÁKULUM (Chopra-elvű mondatgenerátor) ---------- */
var ORAKULUM = {
 al:['A guggolás','A kozmikus fehérje','A rúd','A negyedik sorozat','Az alkarod aurája','A kihagyott lábnap','A szentelt kréta','A tárcsa-karma','A tükör','A szauna felső padja','A pihenőidő','A kreatin','Az ismétlés','A csípőd','A shaker','A pumpa','A Kapuőr tekintete','A bemelegítés','Az izomláz','A Hold','A lehúzógép','A hétfői mellnap','A deload','A magnéziapor','A fülhallgatód'],
 ige:['meghatározza','átrezegteti','tükrözi','feloldja','magához vonzza','újraírja','megkérdőjelezi','beteljesíti','kvantum-összefonja','kalibrálja','felszabadítja','átszellemíti','megjósolja','kiegyensúlyozza','manifesztálja','lehorgonyozza','átprogramozza','megtisztítja'],
 tgy:['a tudatosság rejtett szimmetriáját','az izomrostok emlékezetét','a végtelen ismétlések geometriáját','a Nílus kozmikus áradását','a fehérjeszintézis csendjét','a végtelenség kilogrammjait','az ősök nyers vasát','a lábnap eltemetett igazságát','a bicepsz és a Hold közti feszültséget','a hiány testtudatát','a tárcsák szent aritmetikáját','a szekrénykulcs rezgésszámát','a verejték szakrális pH-ját','az edzőtárs be nem vallott súlyait','a Csontváz trónjának hűvösét','a pihenőnap kvantumállapotát','a squat rack alatti ley-vonalat','az elhagyott tárcsa szellemét','a fordított lap árnyékát','a második adag sorsát'],
 zar:['— és ez nem vélemény, hanem rezgés.','Ezt az ősök is tudták, csak nem volt hozzá övük.','A többi csak periodizáció.','Aki ezt nem érti, az még nem melegített be.','Ezért fáj hétfőn a csuklód.','A Kapuőr ezt régóta tudja.','Ne kérdezd, miért: emelj.','Ez a szentély negyedik törvénye, és a negyedik sorozaté is.','A vas hallgat, de jegyzetel.','A válasz a rúdon van, csak fordítva.','Mind meg fogjuk csinálni.','A Hold ezt látta, és nem szólt semmit.']
};
var FORRAS = ['Vas-Akasha Krónika, IV. kötet','Szaunapadi Jegyzőkönyv, 1351','A Kapuőr szóbeli hagyománya','Anubisz Lábnapló, 3. tekercs','Tárcsa-numerológiai Kódex','A Fősúlyzómester hétfői homíliája','Kvantum Fitness Journal (visszavont különszám)','A Shaker Mestere titkos naplója'];

/* ---------- ERŐHOROSZKÓP ---------- */
var ZOD=[
{s:'♈',n:'Kos',k:'kos',d:'03.21–04.19',el:'Tűz',bo:'Mars',iz:'Csuklyás izom (a nyakad, amivel bólogatsz a tükörben)',
 t:'A Kos most mindent kétszer akar feltenni, és a bemelegítést nullaszor. A csillagok szerint a rúd nem verseng veled, csak van — és amikor a Kos ezt megérti, nyer tíz kilót és egy térdet.',
 g:'Fekvenyomás segítővel. A segítő kérése nem gyengeség, hanem előrelátás — az Intézet ezt hívja szociális periodizációnak.',
 b:'A tükör előtti Smith-gép, ahol a Kos a saját arcát nézi az utolsó két ismétlés helyett.',
 l:'A negyedik lyuk az övön.',ta:'22,5',m:'+2,5 kg'},
{s:'♉',n:'Bika',k:'bika',d:'04.20–05.20',el:'Föld',bo:'Vénusz',iz:'Farizom (a Bika trónja)',
 t:'A Bika a héten húz, nyom, majd eszik. A csillagok szerint ez a helyes sorrend, és a Bika ezt születése óta tudja — a rontás nála nem az étvágyban, hanem a kanapé mágneses mezejében lakik.',
 g:'Felhúzás: nehéz, lassú, elégedett. Utána rizs, még lassabban.',
 b:'Az öltözőpad. Ha leülsz, ott maradsz, és ott már nem edzés van, hanem lakóhely.',
 l:'Bármi, ami barna és sült.',ta:'40',m:'+5 kg'},
{s:'♊',n:'Ikrek',k:'ikrek',d:'05.21–06.21',el:'Levegő',bo:'Merkúr',iz:'Alkar (két különböző programhoz két különböző markolat)',
 t:'Két edzésterved van, és egyiket sem csinálod. Ez a héten csillagászati tény, nem vélemény. Az Ikrek egyik fele már a következő programot olvassa, míg a másik a jelenlegit sem fejezte be.',
 g:'Egy terv. Egy. Akármelyik. A csillagok nem választanak helyetted, csak megunták.',
 b:'A harmadik videó a bemelegítésről, amelyet a lehúzógépen ülve nézel.',
 l:'A jegyzetfüzet — de csak egy.',ta:'15',m:'+0 kg (nem tudtuk eldönteni)'},
{s:'♋',n:'Rák',k:'rak',d:'06.22–07.22',el:'Víz',bo:'Hold',iz:'Hasizom (a Rák páncélja, amelyet a pizza alatt hord)',
 t:'A Rák érzelmileg készül a lábnapra, ami hosszabb, mint maga a lábnap. Az Intézet szerint a Rák a legérzékenyebb a holdfázisra: teliholdkor guggol, újholdkor sír a gépnél, és mindkettő számít edzésnek.',
 g:'Guggolás, gondolkodás nélkül. A gondolkodás a Rák bemelegítése, és negyven percig tart.',
 b:'A szauna, ahol a Rák mások hangulatát olvassa a saját sorozata helyett.',
 l:'Meleg víz edzés után, hideg zuhany előtt — a sorrend szent.',ta:'10',m:'+1,25 kg (holdfüggő)'},
{s:'♌',n:'Oroszlán',k:'oroszlan',d:'07.23–08.22',el:'Tűz',bo:'Nap',iz:'Mellizom (természetesen)',
 t:'Az Oroszlán ma nézőközönség nélkül is jól teljesít — ez a hét nagy próbatétele. A csillagok szerint a tükör-dzsinn az Oroszlán fülében lakik, és onnan súgja: „még egy videót”.',
 g:'Vállnap, tükör nélkül, telefon a szekrényben. Az Oroszlán így megtudja, mekkora is valójában.',
 b:'A tükör. Végig. Minden tükör. Az öltözői is.',
 l:'Egy edzőtárs, aki nem tapsol, csak biztosít.',ta:'20',m:'+2,5 kg (ha senki nem nézi: +5)'},
{s:'♍',n:'Szűz',k:'szuz',d:'08.23–09.22',el:'Föld',bo:'Merkúr',iz:'Vádli (a tökéletes program lábjegyzete)',
 t:'A Szűz táblázata gyönyörű. A táblázat viszont nem edz helyette. A Szűz a héten újraszámolja a makrókat, a sorozatokat és a pihenőidőt, aztán kimarad az edzés, mert nem volt benne a naptárban.',
 g:'Ismétlésszám növelése, ceruza letéve. A ceruza a Szűz rontása.',
 b:'A tökéletes program keresése. Nincs. Ez a program.',
 l:'A stopper, de csak a pihenőidőhöz.',ta:'2,5',m:'+2,5 kg (pontosan)'},
{s:'♎',n:'Mérleg',k:'merleg',d:'09.23–10.22',el:'Levegő',bo:'Vénusz',iz:'Hátizom (amit a Mérleg sosem lát, ezért kiegyensúlyozatlan)',
 t:'A Mérleg egyensúlyoz kardió és vas között, és közben megáll középen. Középen nincs eredmény, csak egy szép elliptikus gép. A csillagok szerint a Mérleg akkor nő, ha egyszer végre nem dönt jól, csak dönt.',
 g:'Válassz egyet ma, holnap a másikat. A Mérleg így mindkettőt megkapja, és nem kell választania — ez az Intézet Mérleg-kompromisszuma.',
 b:'A „majd eldöntöm” mondat, és a gép, amelyen ezt kimondod.',
 l:'Egy fix időpont. Bármelyik. Írd be.',ta:'12,5',m:'+1,25 kg mindkét oldalon'},
{s:'♏',n:'Skorpió',k:'skorpio',d:'10.23–11.21',el:'Víz',bo:'Plútó',iz:'Comb hátsó része (rejtve, erősen, senkinek nem mutatva)',
 t:'A Skorpió titokban erősebb, mint amit bevall. A szentély látja a naplót, és tudja, hogy a „csak bemelegítés” kilencven kiló volt. A csillagok szerint a Skorpió akkor tör ki, ha egyszer tanú előtt emel.',
 g:'Maximumteszt tanú előtt. A tanú nem beszél, csak lát — ezt a Skorpió is elviseli.',
 b:'A titkolózás. Senki nem nevet ki, sőt: valaki felír.',
 l:'A sötét terem hajnalban, egyetlen lámpával.',ta:'25',m:'+5 kg (tanú előtt)'},
{s:'♐',n:'Nyilas',k:'nyilas',d:'11.22–12.21',el:'Tűz',bo:'Jupiter',iz:'Váll (a Nyilas nyíllal céloz, és mindig más célra)',
 t:'A Nyilas új sportágat akar kezdeni. A régi még nincs kész. A csillagok szerint a Nyilas a héten megnéz egy boulder-videót, beiratkozik egy kettlebell-tanfolyamra, és kihagyja a hátnapot.',
 g:'A meglévő terv befejezése — ez a Nyilas számára a legegzotikusabb kaland.',
 b:'A boulderterem hirdetése, amelyet a lehúzógépen olvasol.',
 l:'A hosszú futás, amely után mégis bemész a terembe.',ta:'5',m:'+2,5 kg (ha ugyanazt csinálod)'},
{s:'♑',n:'Bak',k:'bak',d:'12.22–01.19',el:'Föld',bo:'Szaturnusz',iz:'Alsó hát (a Bak hordja a fegyelem súlyát, meg a mások tárcsáit)',
 t:'A Bak túl fogja edzeni magát, és büszke lesz rá. A pihenőnap is edzés, csak nem hiszed el — a csillagok szerint a Bak a szentély egyetlen jegye, akinek a rontása a szorgalom, és ez a legnehezebben kezelhető.',
 g:'Egy teljes szabadnap. Ülve. A Bak számára ez a maximumteszt.',
 b:'A hatodik edzésnap, amelyet „aktív pihenésnek” hívsz.',
 l:'Az alvás. Igen, az. Nyolc óra, nem hat.',ta:'20',m:'+2,5 kg (pihenés után +5)'},
{s:'♒',n:'Vízöntő',k:'vizonto',d:'01.20–02.18',el:'Levegő',bo:'Uránusz',iz:'Csípőhajlító (a különleges gyakorlatok testrésze)',
 t:'A Vízöntő valami furcsa gyakorlatot talált egy videóban. Működni fog, csak nem úgy, ahogy gondolod. A csillagok szerint a Vízöntő a héten egy gumiszalaggal és egy bosu-labdával akar felhúzást csinálni, és a Kapuőr csak néz.',
 g:'Alapgyakorlat, unalmasan. A Vízöntőnek ez a legavantgárdabb döntés.',
 b:'A gumiszalagos hétlépéses szertartás a squat rackben, amíg hárman várnak.',
 l:'A klasszikus felhúzás, amely minden csillagjegy alatt ugyanaz.',ta:'1,25',m:'+2,5 kg (ha hagyományosan)'},
{s:'♓',n:'Halak',k:'halak',d:'02.19–03.20',el:'Víz',bo:'Neptunusz',iz:'Bicepsz (a Halak álmodik róla, és néha meg is edzi)',
 t:'A Halak úsznak az árral, egyenesen haza. A terem ma két megállóval arrébb van, mint tegnap — a csillagok szerint ez a Halak legjellemzőbb rontása: a kapuig mindig eljut, a Kapun már nem.',
 g:'A táska előre bepakolása, este, az ajtó elé. A Halak így reggel belebotlik a döntésbe.',
 b:'A kanapé, első ránézésre. Második ránézésre is.',
 l:'A zene, jó hangosan — a Halak a hangra ébred, nem a tervre.',ta:'10',m:'+1,25 kg (ha odaért)'}];

/* ---------- RONTÁSOK ---------- */
var CURSES=[
{n:'A harmadik sorozat átka',s:'Közepes ártás',d:'A kettőig minden rendben, a harmadikra hirtelen eszedbe jut, hogy van otthon mosogatás. Klasszikus Kapuőr-rontás, a szentély legrégebbi bejegyzése.',c:'Három mély kilégzés a rúd fölött, majd a súlyt nem teszed le, csak lassan gondolsz rá. A mosogatás megvár; a sorozat nem.',ix:61},
{n:'Anubisz haragja (kihagyott lábnap)',s:'Súlyos ártás',d:'A sakálfejű isten számolja a lábnapokat. Nem szól, csak jegyzetel. Amikor a füzet betelik, a nadrág nem áll jól, és ezt hívják a szentélyben ítéletnek.',c:'Egy őszinte guggolás üres rúddal, hangosan kimondva: „jövő héten sem hazudok magamnak”. Anubisz a hangot hallja, nem a kilót.',ix:88},
{n:'Tükör-dzsinn megszállás',s:'Enyhe, de krónikus',d:'Bementél nyolc sorozatra, kijöttél negyvenhat fotóval és kettővel. A dzsinn a tükör mögött lakik, és hízeleg; minden „még egyet” az ő hangja.',c:'A telefon a szekrénybe, a talizmán a zsebbe. A dzsinn nem bírja a képernyő nélküli csendet, húsz perc után visszamászik az üvegbe.',ix:44},
{n:'Elhagyott súlytárcsa szelleme',s:'Terjedő ártás',d:'Valaki nem tette vissza a tárcsát, és a szelleme most rád ragadt. Innen a rossz hangulat, a hirtelen kislábujj-fájdalom és a rúd, amelyen ma mindig eggyel több tárcsa van a bal oldalon.',c:'Két idegen tárcsa visszapakolása. A karma azonnal és hangosan könyvel — a második tárcsánál már hallani, ahogy a szellem elenged.',ix:57},
{n:'Szaunapadi ártó tekintet',s:'Közepes ártás',d:'Valaki a felső padról szemmel vert, miközben te a homokórát nézted. A gőz felerősíti a rezgést, a törölköző pedig nem véd.',c:'Hideg zuhany, közben Ízisz nevének háromszori elmormolása. Ízisz a hideget kedveli, a felső padot nem.',ix:52},
{n:'Fehérje-shaker penészdémon',s:'Biológiai ártás',d:'A shaker három napja a táskában. Ez már nem rontás, ez ökoszisztéma. Saját akarata van, és a táska cipzárja már nem a tiéd.',c:'Kidobás. Nem mosogatás. Kidobás. A démonnal nem alkuszunk, és a démon nem fér a mosogatógépbe.',ix:93},
{n:'Gépfoglaló fantom',s:'Társadalmi ártás',d:'Törölköző a gépen, gazdája sehol. A fantom nyolc perce nincs jelen, mégis birtokol. A szentély szerint ez a legnehezebben bizonyítható rontás, mert a fantom mindig „csak egy kört ment”.',c:'Udvarias kérdés egy idegentől. A fantom nem bírja a szemkontaktust, és három másodperc alatt testet ölt vagy lelép.',ix:49},
{n:'Ego-emelés vasátka',s:'Kritikus ártás',d:'Húsz kilóval többet tettél fel, mert néztek. A rúd tudja. A derekad is tudni fogja, csütörtökön. Az átok a tárcsában lakik, de a szemedben született.',c:'Húsz kiló le, öt ismétlés fel. A csí a technikában lakik, nem a tárcsában — és a technika nem néz körül, mielőtt emel.',ix:97},
{n:'Csirkemell-monotónia rontás',s:'Lassú sorvasztás',d:'Kilencvenkét egyforma ebéd. A lélek elszürkül, a makró viszont stimmel. Ez a legalattomosabb, mert a mérleg nem látja, csak a szemed.',c:'Fűszer. Bármilyen. A monotónia rontását a kömény és a csípős paprika töri meg, a szentély receptkönyve szerint tíz nap alatt.',ix:38},
{n:'Deload-átok',s:'Álcázott ártás',d:'Két hete deloadolsz, és mindkét hét véletlenül sikerült. A pihenés szelleme átvette az irányítást, és már ő tervezi a következő hetet is — pihenéssel.',c:'Egy nehéz sorozat, szemtanú előtt. A szellem tanúk előtt visszavonul, mert a pihenés csak sötétben mer parancsolni.',ix:66},
{n:'Bemelegítés-tagadó szélszellem',s:'Közepes ártás',d:'Beestél a terembe, egyből fekvenyomás. A szélszellem sietteti az embert, aztán elszalad, és a válladat otthagyja a padon.',c:'Nyolc perc kerékpár. Unalmas, mint minden működő varázslat — a szélszellem a nyolcadik percben elalszik.',ix:71},
{n:'Hajnali ébresztő-rontás',s:'Ismétlődő ártás',d:'Este hős vagy, hajnali ötkor filozófus. A rontás a szundi gombban lakik, nem benned; ötpercenként újjászületik, mint egy olcsó démon.',c:'A telefon az előszobába. A rontás nem tud járni — ez a legrégebbi ismert gyengesége.',ix:59},
{n:'Kreatin-vízvisszatartás mítoszdémon',s:'Információs ártás',d:'Egy haver mondta, hogy a kreatintól „vizes leszel”. A démon ezzel a mondattal terjed, kizárólag öltözőkben, és eddig még senki nem látta, csak hallotta.',c:'A démont nem lehet kiűzni, csak túlélni. Igyál vizet, emelj, és ne válaszolj a havernak — a démon a válaszból táplálkozik.',ix:33},
{n:'Squat rack-ben bicepszező kísértet',s:'Kapitális ártás',d:'Valaki a squat rackben bicepszezik, és ez most rád is rárezgett. A kísértet 12 kilós rúddal dolgozik a 200 kilós állványon, és nem érti, miért néznek.',c:'Az egyetlen ismert ellenszer a hangos, tiszta, kérés nélküli guggolás a szomszéd állványon. A kísértet ilyenkor elpárolog, vagy elkezd guggolni — mindkettő gyógyulás.',ix:99},
{n:'„Csak bemelegítő súly” hazugságszellem',s:'Enyhe ártás',d:'Valakinek azt mondtad, a hatvan kiló „csak bemelegítés”. Nem az volt. A szellem a mondat után költözik be, és minden újabb mondatnál nő.',c:'Mondd ki egyszer hangosan a valódi munkasúlyt egy másik embernek. A szellem az őszinteségtől aznap kimúlik, másnap újjászületik — ezért kell naponta.',ix:41},
{n:'Fülhallgató-burok elszigetelés',s:'Krónikus ártás',d:'Három éve nem hallottad a terem hangját. A burok mögött nincs tanács, nincs „szabad a gép?”, nincs „szép sorozat”. Csak a lejátszási lista, amely szintén elhagyott.',c:'Egy edzés fülhallgató nélkül. Kellemetlen lesz, mint minden gyógyulás. A terem zörög, de nem harap.',ix:47}
];
var SCANMSG=['Szkarabeusz-rezgés kalibrálása…','Felkar-aura beolvasása…','Csí-vezeték átjárhatóság mérése…','Nílus-index egyeztetése…','Ley-vonal helyzet: lekérdezés…','Tárcsa-karma szinkronizálása…','Szentélyi adatbázis kérdezése…','Rontás azonosítása…'];

/* ---------- ERŐCSAKRÁK ---------- */
var CHAKRA=[
{n:'Gyökér',m:'Vádli',c:'#c23b2e',ic:'🦵',t:'A vádli a gyökér. Senki nem edzi, ezért mindenki bajban van. Blokkolt vádli-csakránál az ember magas szárú cipőben jár a strandon is.',cure:'Lábujjhegyre állás a lépcsőn, minden emeleten. A lift a gyökér-csakra ellensége.'},
{n:'Szakrális',m:'Farizom / comb',c:'#e07a2f',ic:'🍑',t:'A lábnap csakrája. Aki átugorja, annak az egész energiarendszere két gyufaszálon áll, és csodálkozik, hogy fúj a szél.',cure:'Guggolás, üres rúddal, hangosan számolva. A szakrális csakra a számolástól nyílik.'},
{n:'Napfonat',m:'Hasizom',c:'#e6c02e',ic:'🔥',t:'Az akarat és az étvágy közös háza. Blokkolva a napfonat a második adag pizza alá temetkezik, és onnan üzen, hogy holnap.',cure:'Plank, amíg a napfonat rezegni kezd. Utána egy tojás, nem három.'},
{n:'Szív',m:'Mellizom',c:'#4fae8c',ic:'💚',t:'Hétfő a szív-csakra napja az egész bolygón. Ez nem véletlen, hanem kozmikus szinkron — minden fekvenyomó pad ugyanabba az irányba rezeg.',cure:'Mellnap után hátnap. A szív csak akkor nyílik, ha a lapocka is.'},
{n:'Torok',m:'Trapéz / nyak',c:'#3f8fd6',ic:'🗣️',t:'A shaker rázásának és a „szabad a gép?” kérdésnek a csakrája. Blokkolva az ember a fülhallgató mögé bújik, és nyolc percig vár egy törölközőre.',cure:'Kérdezz meg valakit, hány sorozata van még. A torok-csakra egy mondattól kinyílik.'},
{n:'Harmadik szem',m:'Elülső delta',c:'#6e58b8',ic:'👁️',t:'A tükörbe nézés csakrája. Túl nyitva a tükör-dzsinn költözik be; túl zárva az ember nem látja, hogy a válla előreesett.',cure:'Egy sorozat háttal a tükörnek. Amit nem látsz, azt érzed — ez a harmadik szem.'},
{n:'Korona',m:'Bicepsz',c:'#f3dfa0',ic:'👑',t:'A korona. Minden út ide vezet, és minden kezdő innen indul. A bicepsz a szentély legszentebb és legfölöslegesebb izma egyszerre.',cure:'Nincs. A korona-csakra sosem blokkolt, csak mindig túl nyitott. Csinálj egy hátnapot, és ne beszélj róla.'}
];

/* ---------- A 9 ŐSI VASTÖRVÉNY ---------- */
var TENETS=[
{ic:'🌑',n:'Aludj',t:'Az ősök is aludtak a barlangban, csak ott nem volt telefon, ami hajnali kettőkor bemutatta volna nekik a kreatin új ízeit. Nyolc óra. Nem hat. Nem „majd hétvégén”.',law:'Aki nem alszik, az nem edz, csak fáradt helyszínen tartózkodik.'},
{ic:'🥩',n:'Egyél',t:'Az egész állatot. A shaker az nem állat. A csirkemell-monotónia rontás elleni egyetlen védelem a máj, a szív és a nagymama receptje — sorrendben.',law:'A kalória szent, ha a súly követi. Ha nem követi, csak kalória.'},
{ic:'🏋️',n:'Emelj',t:'Az ősök köveket emeltek, mi tárcsát. A különbség csak a gravírozás. Aki nem emel, annak a teste nem tudja, hogy miért van — és a test ilyenkor kérdez, általában a derékon keresztül.',law:'A rúd nem verseng veled. Csak van. Te vagy, aki jön.'},
{ic:'🧂',n:'Krétázz',t:'A szentelt magnézia nem a markolatot, hanem a szándékot rögzíti. Az ős, aki nem krétázott, elcsúszott a mamuton. Tanulj a történelemből.',law:'Krétázz előtte, mosd fel utána. A második a fontosabb.'},
{ic:'❄️',n:'Hűlj le',t:'Jégfürdő, hideg zuhany, hideg fehérjeturmix, hideg tekintet a squat rackben bicepszezőre. A hideg nem gyógyít semmit, de mindenki komolyabbnak néz ki tőle.',law:'A hidegben a rontás lassul. Az ember is, de az másodlagos.'},
{ic:'☀️',n:'Nézz a fénybe',t:'Az ősök a napba néztek. Mi a terem mennyezeti lámpájába, guggolás közben, mert a nyak nem hajolhat előre. A fény ugyanaz; a D-vitamin kevesebb.',law:'Emelj napkeltekor, vagy legalább mondd, hogy úgy szoktad.'},
{ic:'⚔️',n:'Harcolj',t:'A gépfoglaló fantommal, az ego-emeléssel, a „hétfőtől biztosan” mondattal. Az ős a kardfogú tigrissel harcolt; mi a mosogatással, ami a harmadik sorozatnál jut eszünkbe.',law:'A legnehezebb ellenfél a második sorozat utáni gondolat.'},
{ic:'🤝',n:'Köss szövetséget',t:'Az edzőtárs az ősi törzs. Nem az, akivel beszélgetsz, hanem az, akivel hallgatsz, és aki tudja, hogy a hatvan nem bemelegítés volt.',law:'Egy biztosító többet ér, mint tíz lájk. A lájk nem nyúl a rúd alá.'},
{ic:'🔱',n:'Áldozz',t:'Tegyél vissza egy idegen tárcsát. Ez az áldozat. Nem a tiéd, nem a te rontásod, mégis te viszed vissza — és a szentély mérlege ezt jegyzi a leghangosabban.',law:'A visszatett tárcsa a leghangosabb ima a teremben.'}
];

/* ---------- AURA-FŐKÖNYV ---------- */
var AURA=[
{t:'Visszatetted a saját tárcsádat',v:50},
{t:'Visszatettél egy idegen tárcsát',v:200},
{t:'Visszatettél egy idegen tárcsát, és senki nem látta',v:500},
{t:'Néma fejbólintás egy másik emelőnek',v:150},
{t:'Biztosítottál valakit, és nem nyúltál a rúdhoz, csak ordítottál',v:2000},
{t:'Lábnap',v:300},
{t:'Lábnap szombaton',v:700},
{t:'Fülhallgató nélkül edzettél egy teljes edzést',v:400},
{t:'Azonnal elmostad a shakert',v:100},
{t:'Krétáztál, aztán feltakarítottad',v:1500},
{t:'Halk felhúzás, letéve, nem ledobva',v:250},
{t:'Őszinte „szép sorozat” egy idegennek',v:50},
{t:'Deloadoltál, pedig senki nem kérte',v:600},
{t:'Telefonoztál a gépen ülve',v:-300},
{t:'Bicepszeztél a squat rackben',v:-1000},
{t:'Négyszer megkérdezted ugyanattól, hány sorozata van még',v:-500},
{t:'Tükrös videó a sorozatról',v:-150},
{t:'A videón más is látszik',v:-2500},
{t:'Kimondtad: „ez csak bemelegítő súly”',v:-800},
{t:'A shaker három napja a táskában van',v:-600},
{t:'Pre-workout után rátüsszentettél a rúdra',v:-400},
{t:'Leejtettél 40 kilót egy 40 kilós felhúzásnál',v:-700},
{t:'Elmondtad valakinek, mit hallottál a kreatinról',v:-9999},
{t:'Törölközőt hagytál a gépen, és elmentél „egy körre”',v:-900},
{t:'Húsz kilóval többet tettél fel, mert néztek',v:-1200}
];
var RANK=[
{min:-Infinity,n:'Rontásgazda',d:'Az aurád nem hiányzik, hanem negatív. A Kapuőr feljegyezte. Kezdd egy visszatett tárcsával — nem a tiéddel.'},
{min:0,n:'Kezdő Lélek',d:'Az aura éppen csak pislákol. Ez nem baj: minden Vasszent innen indult, és a legtöbb itt is maradt.'},
{min:500,n:'Vasnovícius',d:'Az aurád már látszik a szauna gőzében. A felső pad még nem a tiéd, de már nem néznek rád rosszul.'},
{min:2000,n:'Tárcsa-lovag',d:'Rendezett aura, halk felhúzás, tiszta shaker. A szentély ilyen emberből épít támfalat.'},
{min:5000,n:'Vasszent',d:'A rontások megkerülnek. A gépfoglaló fantom leveszi a törölközőt, mielőtt odaérsz. A Kapuőr köszön.'},
{min:9000,n:'Anubisz Kiválasztottja',d:'Ilyen aurát az Intézet eddig háromszor mért, és mindháromszor mérési hibának bizonyult. Gratulálunk.'}
];

/* ---------- VASAKADÉMIA ---------- */
var COURSES=[
{ic:'🔮',n:'Okleveles Rúdmédium',b:'Alapképzés',h:'120 óra · 3 holdciklus',dij:'Egy visszatett tárcsa / óra',
 t:'Megtanulod érezni, mit akar a rúd. Általában semmit — de ezt érezni is tudni kell. A képzés része a tárcsa-olvasás, a squat rack ley-vonalainak felmérése és a „szabad a gép?” kérdés hat rezgésszintje.'},
{ic:'🎓',n:'Bro-science Doktorátus (PhD)',b:'Posztgraduális',h:'Amíg egy haver meg nem cáfol',dij:'Egy shaker, elmosva',
 t:'Disszertációtéma: „A kreatin vízvisszatartó mítoszának holisztikus cáfolata egy haver szerint”. A védés az öltözőben zajlik, a bizottság három tag, akik mind hallottak valamit valakitől.'},
{ic:'🔢',n:'Tárcsa-numerológia mesterkurzus',b:'Haladó',h:'22 alkalom, egy minden lapra',dij:'2,5 kg tárcsa, gravírozva',
 t:'2,5 + 5 + 10 + 20 = 37,5, ami 3 + 7 + 5 = 15 = XV. Az Ego. A kurzuson megtanulod, miért fáj a csuklód, ha a rúdon lévő tárcsák számjegyösszege Torony. Kötelező segédeszköz: számológép, amely nem tud osztani.'},
{ic:'🧖',n:'Szaunapadi Látnok',b:'Szakosító',h:'Felső pad, amíg bírod',dij:'Törölköző, saját',
 t:'Felső pad, szem lehunyva, mások életének megítélése kizárólag a légzésük alapján. A vizsga: felismerni a gőzben, ki hagyta ki a lábnapot. A végzettek a Rontásfelvételi Főosztály munkatársai lehetnek — ha ott ülnek.'}
];

/* ---------- SZENTÉLYBOLT ---------- */
var PROD=[
{s:'🔑',n:'Anubisz Kulcstalizmán',d:'Sárgaréz, sakálfejjel. Szekrénykulcsra fűzve viseld — a rontás a zárnál lép be a leggyakrabban. Telihold előtti éjszakán töltve, rúdra fektetve.',p:'8 900 Ft',o:'11 900 Ft',st:'Raktáron: 4 db',low:true,r:5,rc:213,rb:'Legkeresettebb',rbc:''},
{s:'⚛️',n:'Kvantum-Fehérje™',d:'0 g fehérje, 100% információ. A tested nem az anyagot kapja meg, hanem az elvet — és az elv nem hízlal. Minden adag egyszerre van a shakerben és nincs, amíg meg nem iszod.',p:'14 900 Ft',o:'',st:'Végtelen készlet (szuperpozícióban)',low:false,r:5,rc:412,rb:'Új',rbc:'gold'},
{s:'💧',n:'Homeopátiás Kreatin C30',d:'Egyetlen molekula sincs benne, ezért végtelenül erős. Minden hígítással nő a rezgés; a harmincadiknál már a víz emlékszik a guggolásra helyetted.',p:'6 490 Ft',o:'',st:'Raktáron (nem látható)',low:false,r:4,rc:88,rb:'',rbc:''},
{s:'🏺',n:'Holdfényben Szitált Magnézia',d:'Kézzel áldott krétapor, telihold előtt szitálva. A markolat és a szándék közti súrlódást növeli; a takarítónő és a szándék közti súrlódást nem csökkenti.',p:'5 490 Ft',o:'',st:'Raktáron',low:false,r:4,rc:141,rb:'',rbc:''},
{s:'🗺️',n:'Ley-vonal Teremtérkép',d:'Kézzel rajzolt térkép arról, hol futnak a földenergiák a squat rack alatt. Minden teremhez egyedi. Egyik sem stimmel, de a rontás ezt nem tudja.',p:'19 900 Ft',o:'',st:'Rendelésre (hold szerint)',low:false,r:5,rc:37,rb:'Egyedi',rbc:''},
{s:'📿',n:'Csí-töltő Vaskarkötő',d:'Hematit és réz. Az alkar energiavezetését hangolja, hogy a húzás ne a hüvelykujjnál akadjon el. Mellékhatás: zöld csík a csuklón, amelyet az Intézet aurának tekint.',p:'12 900 Ft',o:'15 900 Ft',st:'Raktáron: 2 db',low:true,r:4,rc:141,rb:'Akció',rbc:''},
{s:'🔺',n:'Tömegelő Szekrény-piramis',d:'Alumínium regenerációs piramis az öltözőszekrénybe. Edzés alatt a ruháid pihennek, utána te. A piramis csúcsa észak felé álljon, különben a zokni hízik.',p:'24 900 Ft',o:'',st:'Előrendelhető',low:false,r:5,rc:37,rb:'',rbc:''},
{s:'🕯️',n:'„Bulk Nº7” Tömegelő Füstölő',d:'Fahéj, birsalma és izzadt bőr jegyei. A konyhában égetve az étvágyat a helyes irányba tereli. A rossz irányt is az étvágy választja, de már füstölő mellett.',p:'3 290 Ft',o:'',st:'Raktáron',low:false,r:4,rc:64,rb:'',rbc:''},
{s:'👁️',n:'Hórusz-szemű Övcsat',d:'Emelőövre csatolható lapka. A hátsó láncot védi az ártó tekintettől, főleg nyilvános maximumnál. A saját tekinteted ellen nem véd; arra ott a XV. lap.',p:'15 900 Ft',o:'',st:'Utolsó darab',low:true,r:5,rc:29,rb:'',rbc:''},
{s:'🐂',n:'Ős-Máj Kapszula (a bölény emléke)',d:'Nem máj van benne, hanem annak emléke: a kapszula egy bölény mellett állt egy fotón. Az ősi tenetek szerint ez elég. A tudomány szerint nem, de a tudomány nem emel.',p:'21 900 Ft',o:'',st:'Raktáron',low:false,r:5,rc:77,rb:'Ancestrális',rbc:''},
{s:'🧿',n:'Pszichikai Gépfoglaló-riasztó Spray',d:'Reiki, hanghullám, holdfény és egy csepp szeretet. A gépre fújva a fantom nyolc percen belül visszatér a törölközőjéért, vagy örökre elengedi. Tesztelve: 0 esetben.',p:'9 900 Ft',o:'',st:'Raktáron',low:false,r:4,rc:58,rb:'',rbc:''},
{s:'🕊️',n:'Távrontáslevétel sorozatok között',d:'90 másodperces szertartás telefonon keresztül, a pihenőidő alatt. A Főmagnéziás a szauna felső padjáról hangolja rád a rúdat. Nem hívható vissza, mert a pad nem hív vissza.',p:'4 900 Ft / sorozat',o:'',st:'Szolgáltatás',low:false,r:5,rc:166,rb:'Szolgáltatás',rbc:'gold'}
];

/* ---------- VÉLEMÉNYEK (kitalált szereplők) ---------- */
var REV=[
{w:'Kovács Bendegúz',t:'2 hete',r:5,x:'Két hete hordom a szekrénykulcson. Azóta egyszer sem felejtettem otthon a cipőt, és a fekvenyomásom is ment 2,5 kilót. A feleségem szerint azért, mert végre alszom. Nem tudja, hogy a talizmán altat.'},
{w:'Halmi Renáta',t:'3 hete',r:5,x:'Előtte minden lábnapot elhalasztottam. Most már csak minden másodikat. A Kvantum-Fehérjét is iszom, bár nem tudom, ittam-e, mert amíg nem nézem meg a shakert, mindkettő igaz.'},
{w:'B. Zsolt',t:'1 hónapja',r:4,x:'A talizmán rendben, de a karikagyűrűvel összekoccan és csörög az egész terem. Külön karikára tettem, azóta tökéletes. Egy csillag levonva a csörgésért, egy hozzáadva a rontásmentes csütörtökért.'},
{w:'Tóth-Almási Kinga',t:'1 hónapja',r:5,x:'A férjem nevetett rajta, aztán kért egyet magának is. Most ketten nevetünk, csak ő halkabban, mert a Homeopátiás Kreatin után nem mer hangosan beszélni: fél, hogy felhígítja.'},
{w:'Vincze Ottó',t:'2 hónapja',r:3,x:'Nem tudom megítélni a hatását, mert ugyanabban a hónapban kezdtem el rendesen aludni és enni. Az Intézet szerint ez a talizmán mellékhatása. Nem tudom cáfolni.'},
{w:'Sárközi Melánia',t:'2 hónapja',r:5,x:'A szaunapadi ártó tekintet ellen vettem. Azóta is néznek, de már nem zavar. A Ley-vonal Teremtérkép szerint a padom egy energiacsomóponton van, ami magyarázza, miért mindig ott ülök.'},
{w:'Nagy Krisztián',t:'3 hónapja',r:5,x:'Harmadik hete viselem, és a gépfoglaló fantom eltűnt a teremből. Kiderült, hogy elköltözött, de a talizmán ott volt, amikor történt — és a spray-t is fújtam. Nem tudni, melyik.'},
{w:'Dr. Pálinkás Ernő',t:'4 hónapja',r:5,x:'Orvosként kijelenthetem, hogy semmi ilyet nem jelenthetek ki. Magánemberként viszont a Hórusz-övcsat óta senki nem nézte a hátsó láncomat rossz szándékkal. Ellenőrizni nem tudom.'},
{w:'Czakó Vivien',t:'5 hónapja',r:4,x:'A Szekrény-piramist rossz irányba állítottam, és két hétig hízott a zoknim. Miután észak felé fordítottam, a zokni lefogyott, én pedig nem. Az ügyfélszolgálat szerint ez a piramis természete.'}
];

/* ---------- TUDOMÁNYOS HÁTTÉR ---------- */
var STUDIES=[
{h:'A holdfázis és a fekvenyomás összefüggése egy hosszmetszeti vizsgálatban',c:'Vasvári-Nílus O., Kránitz H. · Quantum Fitness Journal, 2024 (visszavont különszám) · n = 3',t:'Mindhárom résztvevő a kutató volt. Az eredmény szignifikáns, mert a kutató így érezte. A teliholdas PR-ablakot a vizsgálat igazolta, a kontrollcsoportot elfelejtettük.'},
{h:'Kettős vak vizsgálat: sem a résztvevő, sem a kutató nem tudta, mi történik',c:'B. Zsolt (haver) · Szaunapadi Jegyzőkönyv, 12. füzet · n = ?',t:'A placebo és a Kulcstalizmán közötti különbséget nem sikerült kimutatni, ami az Intézet szerint azt bizonyítja, hogy a Kulcstalizmán pontosan olyan erős, mint a placebo — vagyis működik.'},
{h:'Meta-analízis 400 Instagram-komment alapján',c:'Rontásfelvételi Főosztály · a szauna felső padja, 2025',t:'A kommentek 61%-a szerint „a talizmán megváltoztatta az életemet”, 38%-a „mi ez a hülyeség”, 1%-a a shaker fotója volt. A metodológia szerint a 38% rontás alatt állt.'}
];
var CHART=[
{l:'Placebo (üres kulcstartó)',v:12},
{l:'Anubisz Kulcstalizmán',v:12},
{l:'Kulcstalizmán + 8 óra alvás',v:41},
{l:'8 óra alvás önmagában',v:41,note:'módszertani okokból kizárva'},
{l:'Lábnap (kontrollcsoport)',v:58}
];
var TEAM=[
{ic:'🧔‍♂️',n:'Dr. Vasvári-Nílus Ottokár, PhD',t:'Placebológia tanszék · 20 éve jár terembe, ez az Intézetben magasabb képesítés'},
{ic:'👩‍🔬',n:'Prof. Kránitz Hermina',t:'Tárcsa-numerológia tanszék vezetője · 37,5 = XV. Az Ego felfedezője'},
{ic:'🧖',n:'B. Zsolt, haver',t:'Külső szakértő · Minden kutatásunk lektora, a szauna felső padjáról'}
];

/* ---------- HOLDNAPTÁR ---------- */
var VER=[
{t:'good',e:'🟢',x:'Erős nap. A csí egyenesen a rúdba folyik — tehetsz rá egy tárcsával többet, de csak az egyik oldalra ne.'},
{t:'good',e:'🟢',x:'Anubisz jóindulatú. Lábnapra kiváló, a térd ma megbocsát, a lépcső holnap nem.'},
{t:'good',e:'🟢',x:'A Nílus árad, az izomrostok is. Nagy gyakorlatok napja, kevés csevegéssel, sok rizzsel.'},
{t:'bad',e:'🔴',x:'Rontásveszély. Valaki ránéz a rúdadra, mielőtt hozzáérnél. Bemelegítés duplán, tárcsa egyszeresen.'},
{t:'bad',e:'🔴',x:'A tükör-dzsinn aktív. Telefon a szekrénybe, különben negyven perc megy el fotózásra és nulla ismétlésre.'},
{t:'bad',e:'🔴',x:'Kedvezőtlen állás. Ma ne akarj maximumot — a lapok szerint csütörtökön fájna, és csütörtök már holnapután.'},
{t:'mid',e:'⚪',x:'Semleges nap. Amit beleteszel, annyit ad vissza. Se áldás, se átok, se PR, se Torony.'},
{t:'mid',e:'⚪',x:'Langyos energiák. Jó technikagyakorlásra, rossz hősködésre, közepes szaunázásra.'},
{t:'mid',e:'⚪',x:'A szentély nem lát semmit. Ez általában jó jel, néha csak felhős.'},
{t:'good',e:'🟢',x:'Pihenőnapra ideális. A regeneráció is szertartás, csak fekve, és a Csontváz a trónon helyesel.'},
{t:'bad',e:'🔴',x:'A gépfoglaló fantom járkál. Készülj B-tervvel, vidd a spray-t, és ne vedd magadra.'},
{t:'mid',e:'⚪',x:'Kettős állás: az edzés jó lesz, az étkezés elszabadul. Vállald, a Bőség Anyja néz.'},
{t:'pr',e:'⭐',x:'PR-ABLAK. A Csillag lefelé nézi a rudat, és bólint. Egyetlen nehéz sorozat, tanú előtt, aztán haza. Ne kísérts.'}
];
var MOONS=[['🌑','Újhold','a ciklus nulladik napja — technika, nem tárcsa'],['🌒','Növekvő sarló','emeld az ismétlésszámot, ne a súlyt'],
 ['🌓','Első negyed','a technika hete, a tükör-dzsinn alszik'],['🌔','Növekvő hold','tömegelésre kedvező, a Bőség Anyja éber'],
 ['🌕','Telihold','személyi csúcsok ideje — a PR-ablak nyitva'],['🌖','Fogyó hold','szárításra kedvező, a shaker ürül'],
 ['🌗','Utolsó negyed','deload ajánlott, a Csontváz a trónon pihen'],['🌘','Fogyó sarló','pihenj, ne hősködj: a Kapuőr is alszik']];

/* ---------- GLOSSZÁRIUM ---------- */
var GLOSS=[
{n:'Aura-gazdálkodás',t:'A terem láthatatlan könyvelése. Minden visszatett tárcsa jóváírás, minden squat rack-beli bicepsz terhelés. Lásd az Aura-Főkönyvet.'},
{n:'Mogging',t:'Amikor valaki pusztán a jelenlétével átrendezi a terem energiáját, és te hirtelen tíz kilóval kevesebbet emelsz. A rontás egyik enyhe, de gyakori formája.'},
{n:'Vasaszcendens',t:'A születési dátumból és a jelenlegi guggolásból számolt második jegy. Ez határozza meg, milyen ürüggyel nem edzel, ha a Nap-jegyed edzene.'},
{n:'Tárcsa-karma',t:'A rúdon hagyott tárcsák szelleme, amely a következő emelőre ragad. Halmozódik, örökölhető, és csak visszapakolással törleszthető.'},
{n:'PR-ablak',t:'A holdciklus azon két napja, amikor a Csillag lefelé nézi a rudat. Egyetlen kísérlet engedélyezett; a második már Torony.'},
{n:'Kozmikus 1RM-módosító',t:'Az a kilogrammérték, amelyet a heti bolygóállás a maximumodhoz ad vagy elvesz. A Kos +2,5, az Ikrek nulla, mert nem tudtuk eldönteni.'},
{n:'Szakrális periodizáció',t:'Az Intézet edzésmódszere: kevesebb újítás, több ismétlés, holdfázis szerint. Lényegében lineáris progresszió, de szertartással.'},
{n:'Mind meg fogjuk csinálni',t:'A szentély mantrája. Nem ígéret, hanem rezgés. Akkor is igaz, ha nem, mert a mantra nem a jövőről szól, hanem a következő sorozatról.'},
{n:'Bámulsz, tesó?',t:'A tükör-dzsinn kedvenc kérdése. A helyes válasz: nem, a technikádat néztem — és ez fájóbb, mint bármely rontás.'},
{n:'Kvantum-deload',t:'Amikor egyszerre pihensz és edzel, amíg valaki meg nem kérdezi, mit csinálsz. A megfigyelés pillanatában általában kiderül, hogy csak ülsz a gépen.'},
{n:'Nílus-index',t:'A terem páratartalmának és a szaunapadi tekintetek számának hányadosa. Magas indexnél a rúd csúszik, alacsonynál a hangulat.'},
{n:'Ley-vonal',t:'A squat rack alatt futó földenergia-csík, amelynek helyzete termenként változik, és a Teremtérképen sosem ott van, ahol valójában. Ez a bizonyíték, hogy létezik.'}
];

/* ---------- GYIK ---------- */
var FAQ=[
{q:'Működik?',a:'A kérdés hibás. A működés lineáris fogalom, az Intézet ciklikusan gondolkodik. A talizmán nem „működik”, hanem rezeg, és a rezgés az, ami vagy emel, vagy nem — ez már a te aurádon múlik.'},
{q:'Van rá tudományos bizonyíték?',a:'Van egy Tudományos háttér szekciónk. Ez több, mint amit a legtöbb étrend-kiegészítő fel tud mutatni, és ugyanannyit ér.'},
{q:'Miért nem növök?',a:'Mert a rontás. Lásd a Diagnosztikát. Ha a Diagnosztika szerint nincs rontás, akkor az alvás, az étel vagy a lábnap — de ez már a te felelősséged, mi csak a rontásért felelünk.'},
{q:'Mennyi fehérjét egyek?',a:'Testsúlykilogrammonként 2 grammot, plusz a holdfázis százalékos értékét grammban. Teliholdkor ez nagyjából egy csirkemell. Újholdkor is, csak akkor spirituálisan.'},
{q:'Mikor jön a lábnap?',a:'A lábnap sosem jön. A lábnaphoz menni kell. Ez az Intézet egyetlen tanítása, amelyet a tudomány is aláír.'},
{q:'Kifizethetem részletre?',a:'Nincs mit kifizetni: semmi sem eladó, ez egy vicc-oldal. Az energia viszont részletre is árad, és a következő sorozatnál esedékes.'},
{q:'Miért fáj a csuklóm hétfőn?',a:'Mert a rúdon lévő tárcsák számjegyösszege Torony volt. Tárcsa-numerológia mesterkurzusunk erről szól, de röviden: rakj fel 2,5-tel többet vagy kevesebbet, hogy a számjegyösszeg Csillag legyen.'},
{q:'Hol találom az Intézetet?',a:'A szauna felső padján, kizárólag akkor, ha a Rontásfelvételi Főosztály ott ül. Ha nem ül ott, akkor az Intézet a rúdban lakik, és a következő sorozatnál elérhető.'}
];

/* ---------- LEGOLVASOTTABB ---------- */
var TOPREAD=[
{t:'Ezt üzeni a Torony, ha lábnap előtt fordul ki',h:'#napilap',m:'3 napja · 14 210 rezgés'},
{t:'Három csillagjegy, akinek szeptemberben megjön az ereje (és egy, akinek elmegy)',h:'#horoszkop',m:'5 napja · 11 884 rezgés'},
{t:'Miért kopik meg a talizmán a szekrénykulcson? A Főmagnéziás válaszol',h:'#bolt',m:'1 hete · 9 402 rezgés'},
{t:'A tükör-dzsinn: felismerés és kiűzés hét lépésben',h:'#diagnosztika',m:'2 hete · 8 117 rezgés'},
{t:'Kvantum-Fehérje: ittam vagy nem ittam? Egy vásárló beszámolója',h:'#bolt',m:'3 hete · 7 733 rezgés'}
];

/* ---------- MELYIK LAP VAGY? (kvíz) ---------- */
var QUIZ=[
{q:'Mi az első dolgod a teremben?',a:[
 {t:'Bemelegítés. Nyolc perc kerékpár, unalmasan.',c:[4,2]},
 {t:'Egyből a rúd alá. A bemelegítés a bemelegítőknek való.',c:[8,15]},
 {t:'Tükör, telefon, story. Aztán majd valami.',c:[19,15]},
 {t:'Megkérdezem valakitől, mire való a kék kar.',c:[0]}]},
{q:'Mit iszol edzés közben?',a:[
 {t:'Vizet. Néha kreatinnal, amiről nem beszélek.',c:[14,11]},
 {t:'Három fehérjeturmixot. Egyszerre.',c:[1,3]},
 {t:'A shaker három napja a táskában van, nem nyúlok hozzá.',c:[16,18]},
 {t:'Amit az edzőtársam hozott.',c:[6]}]},
{q:'Lábnap?',a:[
 {t:'Minden héten, akkor is, ha fáj. Főleg akkor.',c:[21,4]},
 {t:'Jövő héten biztosan.',c:[20,12]},
 {t:'Mi az?',c:[19]},
 {t:'A Smith-gépen számít?',c:[0,11]}]},
{q:'Hányszor váltottál programot idén?',a:[
 {t:'Egyszer sem. Ugyanaz négy éve, és működik.',c:[4,2]},
 {t:'Kétszer, tervezetten, ciklus szerint.',c:[10,14]},
 {t:'Nem tudom megszámolni.',c:[7,12]},
 {t:'Nincs programom. Érzésre megy, hajnalban, egyedül.',c:[9,18]}]},
{q:'Valaki a squat rackben bicepszezik. Mit teszel?',a:[
 {t:'Csendben guggolok a szomszéd állványon. Hangosan.',c:[8]},
 {t:'Udvariasan megkérem, hogy adja át.',c:[6,11]},
 {t:'Lefotózom és felteszem.',c:[15,19]},
 {t:'Hazamegyek. A nap elveszett.',c:[16,13]}]},
{q:'Rekordkísérlet. Mi történik?',a:[
 {t:'Sikerül, mert kialudtam magam és ettem.',c:[17,21]},
 {t:'Nem sikerül, és ez az egész életemről szól.',c:[16]},
 {t:'Nem kísérletezem, deloadolok. Már harmadik hete.',c:[13]},
 {t:'Húsz kilóval többet rakok fel, mert néznek.',c:[15]}]},
{q:'Hajnali öt, szól az ébresztő.',a:[
 {t:'Már a teremben vagyok.',c:[9]},
 {t:'Szundi. Aztán szundi. Aztán filozófia.',c:[18,12]},
 {t:'Este bepakoltam a táskát az ajtó elé, tehát megyek.',c:[14,2]},
 {t:'Az edzőtárs hív, különben nem.',c:[6,20]}]}
];

/* ---------- OKLEVELEK ---------- */
var DIPLOMA=[
 'Okleveles Rúdmédium','Bro-science Doktor (PhD)','Tárcsa-numerológus Mester','Szaunapadi Látnok',
 'Rontáslevételi Szakreferens','A Lábnap Lovagja','Kvantum-fehérje Sommelier','Anubisz Kiválasztottja'
];
var NUM_JO=[4,8,17,19,21,3,11];
