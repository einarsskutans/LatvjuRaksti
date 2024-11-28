var SYMBOLLIST = [
    ["Akas zīme", "dieva un pasaules", 0, "Kā četrvienība simbolizē stabilitāti, pilnību, veselumu, četrus gadalaikus, debespuses un pamatelementus (2, 40).", "akaszime.svg"],
    ["Apcirptais krusts", "citas", 3, "Simbolizē apturētu kustību, beigas (2, 135).", "apcirptaiskrusts.svg"],
    ["Apgrieztais Jumis", "citas", 3, "Simbolizē nāvi, postošo spēku. Pretējs Jumim (2, 134).", "apgrieztaisjumis.svg"],
    ["Astoņnītis", "visums un laika viļņa ciklu	", 2, "Simbolizē bezgalību, laika ciklus (2, 112). Veidots no zalkša zīmēm, līkločiem (1, 220).", "astonitis.svg"],
    ["Auseklis", "dieva un pasaules	", 0, "Simbolizē Gaismas koku un gaismas uzvaru cīņā pret tumsu (2, 47).", "auseklis.svg	"],
    ["Austras koks", "dieva un pasaules", 0, "Saknes simbolizē pagātni - pazemi, stumbrs tagadni - cilvēkus, lapotne nākotni – debesis (2, 30).", "austraskoks.svg"],
    ["Dievaine", "dieva un pasaules", 0, "Simbolizē robežsituāciju starp pasaulēm (2, 116).	", "dievaine.svg"],
    ["Dievs", "dieva un pasaules", 0, "Simbolizē aizsardzību, svētību, uzraudzību, aizstāvību. Tiek salīdzināts ar jumtu (2, 21).", "dievs.svg"],
    ["Jānis", "dieva un pasaules", 0, "Attēlo 3 Saules, ko raksturo vasaras saulgrieži. Tās simbolizē ceļu, kas sākas Ziemassvētkos, gaismas kulmināciju – Jāņus un rudeni – tumsu (2, 92).", "janis.svg"],
    ["Jumis", "dieva un pasaules", 0, "Divdabīgs, simbolizē labklājību un auglību, bet arī nāvi un pabeigtību. Saistīta ar cikla posmiem un enerģiju (2, 65-66). Zīmei mēdz būt kuplojumi (1, 182).", "jumis.svg"],
    ["Kāpnes", "visums un laika viļņa ciklu	", 2, "Savieno elli, cilvēku pasauli un debesis. Simbolizē cilvēka mūžu un dvēseles ceļu (2, 117).", "kapnes.svg"],
    ["Krupītis", "dieva un pasaules	", 0, "Simbolizē zemapziņu un intuīciju. Saistās ar neredzamo pasauli (2, 95). Saukta arī par Mēness zīmi (1, 161).", "krupitis.svg"],
    ["Krusta zalktis", "laika un likteņa", 1, "Krusts raksturo dinamiskumu un kustību (2, 87).", "krustazalktis.svg"],
    ["Laimas grābeklītis", "laika un likteņa", 1, "Grabeklītis raksturo nevēlamā attīrīšanu un vēlamā piesaistīšanu (2, 122).", "laimasgrabeklitis.svg"],
    ["Laimas krusts	", "laika un likteņa", 1, "Simbolizē likteni un svētību. Krusts attēlo Dievu centrā un pasaules spēkus tās atzarojumos (2, 81).", "laimaskrusts.svg"],
    ["Laimas skujiņa", "laika un likteņa", 1, "Skujiņa raksturo cilvēka mūžu un laika plūdumu (2, 80). Līdzīga egles zaru skujām.", "laimasskujina.svg"],
    ["Laimas slotiņa", "laika un likteņa", 1, "Slotiņa simbolizē laika plūsmu. Tā vidus nozīmē tagadni. Slotiņa attēlo slieksni (2, 80).", "laimasslotina.svg"],
    ["Laipa	", "laika un likteņa", 1, "Simbolizē līdzsvaru (2, 80).", "laipa.svg"],
    ["Māras līklocis", "dieva un pasaules", 0, "Simbolizē cikliskumu, dzīvību un nāvi (2, 35). Sauc arī par Māras ūdeņiem, salīdzina ar viļņiem. (1, 167).", "marasliklocis.svg"],
    ["Māras vārti", "dieva un pasaules", 0, "Simbolizē reinkarnāciju (2, 36). Attēlota šūpošanās un viļņošanas kustība (1, 169).", "marasvarti.svg	"],
    ["Māras zeme", "dieva un pasaules", 0, "Simbolizē mieru, stabilitāti (2, 36). Arī robežu starp pasaulēm (2, 135).", "maraszeme.svg"],
    ["Māras zīme", "dieva un pasaules", 0, "Attēlo sievišķo, pretējo Dievam (2, 34).", "maraszime.svg"],
    ["Mārtiņa zīme", "dieva un pasaules	", 0, "Simbolizē pārticību. Sevī ietver simetriju un dzīvības noslēpumu (2, 99). Simbolizē auglības cikla noslēgumu, veidojas no Jumja zīmes (1, 183).", "martinazime.svg"],
    ["Meandra cilpa", "dieva un pasaules", 0, "Ūdens māte, simbolizē straumi, cikliskumu (2, 36).", "meandracilpa.svg"],
    ["Mēness krusts", "dieva un pasaules", 0, "Simbolizē dzīvību un iznīcību. Saistīta ar zemkopību. Krusts simbolizē četras Mēness fāzes (2, 74-75).", "menesskrusts.svg"],
    ["Pasaules audums", "citas", 3, "Tīklveida režģis simbolizē pasaules vienotību, sadarbību, salīdzinot to ar bišu šūnām (2, 15-16).", "pasaulesaudums.svg"],
    ["Pilna Mēness zīme	", "dieva un pasaules", 0, "Simbolizē dzīvību un iznīcību. Saistīta ar zemkopību. Nozīmē veselumu (2, 74-75).", "pilnsmeness.svg"],
    ["Punkts", "dieva un pasaules", 0, "Raksturo sākumu un beigas. Salīdzināma ar zvaigzni. Simbolizē radošo spēku (2, 109).", "punkts.svg"],
    ["Saules zīme", "dieva un pasaules", 0, "Simbolizē veselumu, mūžību, drošību, kustību. To saista ar harmoniju un dzīvību. Tā apzīmē gada galvenos notikumus – Lieldienas, Ziemassvētkus u.c. (2, 59-60)", "saule.svg"],
    ["Slīpais krusts", "dieva un pasaules", 0, "Simbolizē kustīgo, atbrīvoto enerģiju, arī kosmosu un pasaules centru (2, 24).", "slipaiskrusts.svg"],
    ["Slīpais Māras krusts", "dieva un pasaules", 0, "Simbolizē dzīves dinamiskumu, dzīvības uzplaukumu (2, 35).", "slipaismaraskrusts.svg"],
    ["Spārnotais pūķis", "laika un likteņa", 1, "Simbolizē gan postošu stihisku spēku, gan atjaunotību un dzīvības enerģiju. Izpaužas kā pūķis (2, 87). Veidojas no zalkša zīmes (1, 217).", "sparnotaispukis.svg"],
    ["Taisnais krusts", "dieva un pasaules", 0, "Nāves vai kristietības simbols. Simbolizē īslaicīgo nomiršanu un nekustīgo, arī kosmosu un pasaules centru (2, 24).", "taisnaiskrusts.svg"],
    ["Taisnais Māras krusts	", "dieva un pasaules", 0, "Simbolizē dzīves noslēgšanu, lieto bēru cimdos (2, 35).", "taisnaismaraskrusts.svg"],
    ["Taisnais Māras krusts ar atdzimšanas iespēju", "dieva un pasaules", 0, "Simbolizē ciklisku maiņu un reinkarnācijas iespējamību. Raksturo nāvi un dzīvi, gaismu un tumsu (2, 136).", "taisnaismaraskrustsaratzimsanasiespeju.svg"],
    ["Ugunskrusts", "laika un likteņa", 1, "Apzīmē aizsardzību, enerģiju, gribu, mērķtiecību. Simbolizē kustību (2, 54-55).", "ugunskrusts.svg"],
    ["Ūsiņš	", "dieva un pasaules", 0, "Spīdēt, aust. Simbolizē pavasari un gaismas atnākšanu (2, 70).", "usins.svg"],
    ["Žagariņš", "laika un likteņa", 1, "Simbolizē nepabeigtību, turpinājumu un ceļu (2, 81). Arī žagars vai slota. Skujas kuplinājums, līdzīga putna spalvai (1, 193).", "zagarins.svg"],
    ["Zalktis", "laika un likteņa", 1, "Simbolizē izmaiņas un plūsmu, līdzīgi zalkša kustībai. Raksturo līdzsvaru (2, 86-87). Radniecīga Laimai (1, 214).", "zalktis.svg"],
    ["Zvaigznes zīme", "dieva un pasaules", 0, "Simbolizē aizsardzību. Kristietībā – tikumība, bruņnieciskums, pieklājība, Dieva godāšana (2, 103).", "zvaigzneszime.svg"]
]

// index.html -> Loading symbols
let symbolsGenerated = false
let symbolsSelected = 4 // Default, load all symbols
let symbolCategoryList = [[], [], [], []]
let symbolListHTML = ["", "", "", "", ""]

function intializeSymbolsHTML() {
    initializeSymbols()
    for (let i = 0; i < 4; i++) { // Turn each category into an HTML string
        for (list of symbolCategoryList[i]) {
            symbolListHTML[i] += `<div class="cardzime"><img src="LatvjuZimesAssets/${list[4]}"><p class="cardzimetitle">${list[0]}</p><p class="cardzimeinfo">${list[3]}</p></div>`
        }
    }
    for (list of SYMBOLLIST) { // Turn all symbols into an HTML string
        symbolListHTML[4] += `<div class="cardzime"><img src="LatvjuZimesAssets/${list[4]}"><p class="cardzimetitle">${list[0]}</p><p class="cardzimeinfo">${list[3]}</p></div>`
    }
    generateSymbols()
}

function initializeSymbols() {
    symbolCategoryList = [[], [], [], []]
    for (list of SYMBOLLIST) {
        symbolCategoryList[list[2]].push(list)
    }
}
function generateSymbols() {
    let divtable = document.getElementsByClassName("divtable")[0]
    let categorylist
    divtable.innerHTML = ''
    
    switch (symbolsSelected) {
        case 4:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Visas zīmes</h3></div><div class="categorylist"></div></section>'
            categorylist = document.getElementsByClassName("categorylist")[0]
            categorylist.innerHTML = symbolListHTML[4]
            break
        case 0:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Dieva un pasaules zīmes</h3></div><div class="categorylist"></div></section>'
            categorylist = document.getElementsByClassName("categorylist")[0]
            categorylist.innerHTML = symbolListHTML[0]
            break
        case 1:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Laika un likteņa zīmes</h3></div><div class="categorylist"></div></section>'
            categorylist = document.getElementsByClassName("categorylist")[0]
            categorylist.innerHTML = symbolListHTML[1]
            break
        case 2:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Visums un laika viļņu cikla zīmes</h3></div><div class="categorylist"></div></section>'
            categorylist = document.getElementsByClassName("categorylist")[0]
            categorylist.innerHTML = symbolListHTML[2]
            break
        case 3:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Citas z 3,īmes</h3></div><div class="categorylist"></div></section>'
            categorylist = document.getElementsByClassName("categorylist")[0]
            categorylist.innerHTML = symbolListHTML[3]
            break
        default:
            break
    }
}
function setSelection(symbol) {
    symbolsSelected = symbol
    generateSymbols()
}
document.addEventListener("DOMContentLoaded", intializeSymbolsHTML)
