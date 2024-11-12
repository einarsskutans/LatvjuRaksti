
const symbolList = [
    ["Pasaules audums", "Tīklveida režģis simbolizē pasaules vienotību, sadarbību, salīdzinot to ar bišu šūnām (1, 15-16).", "pasaulesaudums.svg", 3],
    ["Dievs", "Simbolizē aizsardzību, svētību, uzraudzību, aizstāvību. Tiek salīdzināts ar jumtu (1, 21).", "dievs.svg", 1],
    ["Taisnais krusts", "Nāves vai kristietības simbols. Simbolizē īslaicīgo nomiršanu un nekustīgo, arī kosmosu un pasaules centru (1, 24).", "taisnaiskrusts.svg", 3],
    ["Slīpais krusts", "Simbolizē kustīgo, atbrīvoto enerģiju, arī kosmosu un pasaules centru (1, 24).", "slipaiskrusts.svg", ], //
    ["Apcirptais krusts", "Simbolizē apturētu kustību, beigas (1, 135).", "apcirptaiskrusts.svg", [1, 3]],
    ["Austras koks", "Saknes simbolizē pagātni - pazemi, stumbrs tagadni - cilvēkus, lapotne nākotni - debesis (1, 30).", "austraskoks.svg", ], //
    ["Māras zīme", "Attēlo sievišķo, pretējo Dievam (1, 34).", "maraszime.svg", 0],
    ["Taisnais Māras krusts", "Simbolizē dzīves noslēgšanu, lieto bēru cimdos (1, 35).", "taisnaismaraskrusts.svg", [0, 3]],
    ["Slīpais Māras krusts", "Simbolizē dzīves dinamiskumu, dzīvības uzplaukumu (1, 35).", "slipaismaraskrusts.svg", 0],
    ["Māras līklocis", "Simbolizē cikliskumu, dzīvību un nāvi (1, 35).", "marasliklocis.svg", 0],
    ["Māras vārti", "Simbolizē reinkarnāciju (1, 36).", "marasvarti.svg", 0],
    ["Māras zeme", "Simbolizē mieru, stabilitāti (1, 36). Arī robežu starp pasaulēm (1, 135).", "maraszeme.svg", [0, 3]],
    ["Meandra cilpa", "Ūdens māte, simbolizē straumi, cikliskumu (1, 36).", "meandracilpa.svg", ], //
    ["Akas zīme", "Kā četrvienība simbolizē stabilitāti, pilnību, veselumu, četrus gadalaikus, debespuses un pamatelementus (1, 40).", "akaszime.svg", 2],
    ["Auseklis", "Simbolizē Gaismas koku un gaismas uzvaru cīņā pret tumsu (1, 47).", "auseklis.svg", ], //
    ["Ugunskrusts", "Apzīmē aizsardzību, enerģiju, gribu, mērķtiecību. Simbolizē kustību (1, 54-55).", "ugunskrusts.svg", 1],
    ["Saules zīme", "Simbolizē veselumu, mūžību, drošību, kustību. To saista ar harmoniju un dzīvību. Tā apzīmē gada galvenos notikumus - Lieldienas, Ziemassvētkus u.c. (1, 59-60).", "saule.svg", 1],
    ["Jumis", "Divdabīgs, simbolizē labklājību un auglību, bet arī nāvi un pabeigtību. Saistīta ar cikla posmiem un enerģiju (1, 65-66).", "jumis.svg", 2],
    ["Ūsiņš", "Spīdēt, aust. Simbolizē pavasari un gaismas atnākšanu (1, 70).", "usins.svg", 2],
    ["Mēness krusts", "Simbolizē dzīvību un iznīcību. Saistīta ar zemkopību. Krusts simbolizē četras Mēness fāzes (1, 74-75).", "menesskrusts.svg", 1],
    ["Pilna Mēness zīme", "Simbolizē dzīvību un iznīcību. Saistīta ar zemkopību. Nozīmē veselumu (1, 74-75).", "pilnsmeness.svg", 1],
    ["Laimas krusts", "Simbolizē likteni un svētību. Krusts attēlo Dievu centrā un pasaules spēkus tās atzarojumos (1, 81).", "laimaskrusts.svg", 0],
    ["Laimas skujiņa", "Skujiņa raksturo cilvēka mūžu un laika plūdumu (1, 80).", "laimasskujina.svg", 0],
    ["Laimas slotiņa", "Slotiņa simbolizē laika plūsmu. Tā vidus nozīmē tagadni. Slotiņa attēlo slieksni (1, 80).", "laimasslotina.svg", 0],
    ["Laimas grābeklītis", "Grabeklītis raksturo nevēlamā attīrīšanu un vēlamā piesaistīšanu (1, 122).", "laimasgrabeklitis.svg", 0],
    ["Laipa", "Simbolizē līdzsvaru (1, 80).", "laipa.svg", ], //
    ["Žagariņš", "Simbolizē nepabeigtību, turpinājumu un ceļu (1, 81).", "zagarins.svg", ], //
    ["Zalkša zīme", "Simbolizē izmaiņas un plūsmu, līdzīgi zalkša kustībai. Raksturo līdzsvaru (1, 86-87).", "zalktis.svg", ], //
    ["Spārnotais pūķis", "Simbolizē gan postošu stihisku spēku, gan atjaunotību un dzīvības enerģiju. Izpaužas kā pūķis (1, 87).", "sparnotaispukis.svg", ], //
    ["Krusta zalktis", "Krusts raksturo dinamiskumu un kustību (1, 87).", "krustazalktis.svg", ], //
    ["Jāņa zīme", "Attēlo 3 Saules, ko raksturo vasaras saulgrieži. Tās simbolizē ceļu, kas sākas Ziemassvētkos, gaismas kulmināciju - Jāņus un rudeni - tumsu (1, 92).", "janis.svg", 2],
    ["Krupītis", "Simbolizē zemapziņu un intuīciju. Saistās ar neredzamo pasauli (1, 95).", "krupitis.svg", ], //
    ["Mārtiņa zīme", "Simbolizē pārticību. Sevī ietver simetriju un dzīvības noslēpumu (1, 99).", "martinazime.svg", 2],
    ["Zvaigznes zīme", "Simbolizē aizsardzību. Kristietībā - tikumība, bruņnieciskums, pieklājība, Dieva godāšana (1, 103).", "zvaigzneszime.svg", 1],
    ["Punkts", "Raksturo sākumu un beigas. Salīdzināma ar zvaigzni. Simbolizē radošo spēku (1, 109).", "punkts.svg", 3],
    ["Astoņnītis", "Simbolizē bezgalību, laika ciklus (1, 112).", "astonitis.svg", ], //
    ["Dievaine", "Simbolizē robežsituāciju starp pasaulēm (1, 116).", "dievaine.svg", 3],
    ["Kāpnes", "Savieno elli, cilvēku pasauli un debesis. Simbolizē cilvēka mūžu un dvēseles ceļu (1, 117).", "kapnes.svg", ], //
    ["Apgrieztais Jumis", "Simbolizē nāvi, postošo spēku. Pretējs Jumim (1, 134).", "apgrieztaisjumis.svg", [2, 3]],
    ["Taisnais Māras krusts ar atdzimšanas iespēju", "Simbolizē ciklisku maiņu un reinkarnācijas iespējamību. Raksturo nāvi un dzīvi, gaismu un tumsu (1, 136).", "taisnaismaraskrustsaratzimsanasiespeju.svg", [0, 3]]
]

let symbolsGenerated = false
let symbolsSelected = -1; // Default, load all symbols

let symbolCategoryList = [[], [], [], []]

function initializeSymbols() {
    symbolCategoryList = [[], [], [], []]
    for (list of symbolList) {
        symbolCategoryList[list[3]].push(list)
    }
    console.log(symbolCategoryList)
    generateSymbols()
}

function generateSymbols() {
    let divtable = document.getElementsByClassName("divtable")[0]
    divtable.innerHTML = ''

    switch (symbolsSelected) {
        case -1:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Visas zīmes</h3></div><div class="categorylist"></div></section>'
            break
        case 0:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Debešu zīmes</h3></div><div class="categorylist"></div></section>'
            break
        case 1:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Gadskārtu zīmes</h3></div><div class="categorylist"></div></section>'
            break
        case 2:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Dievību zīmes</h3></div><div class="categorylist"></div></section>'
            break
        case 3:
            divtable.innerHTML += '<section class="category"><div class="h3bar"><h3>Citas zīmes</h3></div><div class="categorylist"></div></section>'
            break
        default:
            break
    }
    let parent = document.getElementsByClassName("categorylist")[0]
    if (symbolsSelected !== -1) {
        for (list of symbolCategoryList[symbolsSelected]) {
            parent.innerHTML += '<div class="cardzime"><img src="LatvjuZimesAssets/'+ list[2] +'"><p>' + list[0] + '</p></div>'
        } 
    }
    if (symbolsSelected === -1) {
        for (list of symbolList) {
            parent.innerHTML += '<div class="cardzime"><img src="LatvjuZimesAssets/'+ list[2] +'"><p>' + list[0] + '</p></div>'
        }
    }
}
function setSelection(symbol) {
    symbolsSelected = symbol
    generateSymbols()
}

document.addEventListener("DOMContentLoaded", initializeSymbols)
