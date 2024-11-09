
const symbolList = [
    ["Pasaules audums", "Tīklveida režģis simbolizē pasaules vienotību, sadarbību, salīdzinot to ar bišu šūnām (1, 15-16).", "pasaulesaudums.svg"],
    ["Dievs", "Simbolizē aizsardzību, svētību, uzraudzību, aizstāvību. Tiek salīdzināts ar jumtu (1, 21).", "dievs.svg"],
    ["Taisnais krusts", "Nāves vai kristietības simbols. Simbolizē īslaicīgo nomiršanu un nekustīgo, arī kosmosu un pasaules centru (1, 24).", "taisnaiskrusts.svg"],
    ["Slīpais krusts", "Simbolizē kustīgo, atbrīvoto enerģiju, arī kosmosu un pasaules centru (1, 24).", "slipaiskrusts.svg"],
    ["Apcirptais krusts", "Simbolizē apturētu kustību, beigas (1, 135).", "apcirptaiskrusts.svg"],
    ["Austras koks", "Saknes simbolizē pagātni - pazemi, stumbrs tagadni - cilvēkus, lapotne nākotni - debesis (1, 30).", "austraskoks.svg"],
    ["Māras zīme", "Attēlo sievišķo, pretējo Dievam (1, 34).", "maraszime.svg"],
    ["Taisnais Māras krusts", "Simbolizē dzīves noslēgšanu, lieto bēru cimdos (1, 35).", "taisnaismaraskrusts.svg"],
    ["Slīpais Māras krusts", "Simbolizē dzīves dinamiskumu, dzīvības uzplaukumu (1, 35).", "slipaismaraskrusts.svg"],
    ["Māras līklocis", "Simbolizē cikliskumu, dzīvību un nāvi (1, 35).", "marasliklocis.svg"],
    ["Māras vārti", "Simbolizē reinkarnāciju (1, 36).", "marasvarti.svg"],
    ["Māras zeme", "Simbolizē mieru, stabilitāti (1, 36). Arī robežu starp pasaulēm (1, 135).", "maraszeme.svg"],
    ["Meandra cilpa", "Ūdens māte, simbolizē straumi, cikliskumu (1, 36).", "meandracilpa.svg"],
    ["Akas zīme", "Kā četrvienība simbolizē stabilitāti, pilnību, veselumu, četrus gadalaikus, debespuses un pamatelementus (1, 40).", "akaszime.svg"],
    ["Auseklis", "Simbolizē Gaismas koku un gaismas uzvaru cīņā pret tumsu (1, 47).", "auseklis.svg"],
    ["Ugunskrusts", "Apzīmē aizsardzību, enerģiju, gribu, mērķtiecību. Simbolizē kustību (1, 54-55).", "ugunskrusts.svg"],
    ["Saules zīme", "Simbolizē veselumu, mūžību, drošību, kustību. To saista ar harmoniju un dzīvību. Tā apzīmē gada galvenos notikumus - Lieldienas, Ziemassvētkus u.c. (1, 59-60).", "saule.svg"],
    ["Jumis", "Divdabīgs, simbolizē labklājību un auglību, bet arī nāvi un pabeigtību. Saistīta ar cikla posmiem un enerģiju (1, 65-66).", "jumis.svg"],
    ["Ūsiņš", "Spīdēt, aust. Simbolizē pavasari un gaismas atnākšanu (1, 70).", "usins.svg"],
    ["Mēness krusts", "Simbolizē dzīvību un iznīcību. Saistīta ar zemkopību. Krusts simbolizē četras Mēness fāzes (1, 74-75).", "menesskrusts.svg"],
    ["Pilna Mēness zīme", "Simbolizē dzīvību un iznīcību. Saistīta ar zemkopību. Nozīmē veselumu (1, 74-75).", "pilnsmeness.svg"],
    ["Laimas krusts", "Simbolizē likteni un svētību. Krusts attēlo Dievu centrā un pasaules spēkus tās atzarojumos (1, 81).", "laimaskrusts.svg"],
    ["Laimas skujiņa", "Skujiņa raksturo cilvēka mūžu un laika plūdumu (1, 80).", "laimasskujina.svg"],
    ["Laimas slotiņa", "Slotiņa simbolizē laika plūsmu. Tā vidus nozīmē tagadni. Slotiņa attēlo slieksni (1, 80).", "laimasslotina.svg"],
    ["Laimas grābeklītis", "Grabeklītis raksturo nevēlamā attīrīšanu un vēlamā piesaistīšanu (1, 122).", "laimasgrabeklitis.svg"],
    ["Laipa", "Simbolizē līdzsvaru (1, 80).", "laipa.svg"],
    ["Žagariņš", "Simbolizē nepabeigtību, turpinājumu un ceļu (1, 81).", "zagarins.svg"],
    ["Zalkša zīme", "Simbolizē izmaiņas un plūsmu, līdzīgi zalkša kustībai. Raksturo līdzsvaru (1, 86-87).", "zalktis.svg"],
    ["Spārnotais pūķis", "Simbolizē gan postošu stihisku spēku, gan atjaunotību un dzīvības enerģiju. Izpaužas kā pūķis (1, 87).", "sparnotaispukis.svg"],
    ["Krusta zalktis", "Krusts raksturo dinamiskumu un kustību (1, 87).", "krustazalktis.svg"],
    ["Jāņa zīme", "Attēlo 3 Saules, ko raksturo vasaras saulgrieži. Tās simbolizē ceļu, kas sākas Ziemassvētkos, gaismas kulmināciju - Jāņus un rudeni - tumsu (1, 92).", "janis.svg"],
    ["Krupītis", "Simbolizē zemapziņu un intuīciju. Saistās ar neredzamo pasauli (1, 95).", "krupitis.svg"],
    ["Mārtiņa zīme", "Simbolizē pārticību. Sevī ietver simetriju un dzīvības noslēpumu (1, 99).", "martinazime.svg"],
    ["Zvaigznes zīme", "Simbolizē aizsardzību. Kristietībā - tikumība, bruņnieciskums, pieklājība, Dieva godāšana (1, 103).", "zvaigzneszime.svg"],
    ["Punkts", "Raksturo sākumu un beigas. Salīdzināma ar zvaigzni. Simbolizē radošo spēku (1, 109).", "punkts.svg"],
    ["Astoņnītis", "Simbolizē bezgalību, laika ciklus (1, 112).", "astonitis.svg"],
    ["Dievaine", "Simbolizē robežsituāciju starp pasaulēm (1, 116).", "dievaine.svg"],
    ["Kāpnes", "Savieno elli, cilvēku pasauli un debesis. Simbolizē cilvēka mūžu un dvēseles ceļu (1, 117).", "kapnes.svg"],
    ["Apgrieztais Jumis", "Simbolizē nāvi, postošo spēku. Pretējs Jumim (1, 134).", "apgrieztaisjumis.svg"],
    ["Taisnais Māras krusts ar atdzimšanas iespēju", "Simbolizē ciklisku maiņu un reinkarnācijas iespējamību. Raksturo nāvi un dzīvi, gaismu un tumsu (1, 136).", "taisnaismaraskrustsaratzimsanasiespeju.svg"]
]

symbolsGenerated = false

function insertCard() {
    let parent = document.getElementsByClassName("categorylist")[0]

    if (!symbolsGenerated) {
        for (list of symbolList) {
            console.log(list[0])
            parent.innerHTML += '<div class="cardzime"><img src="LatvjuZimesAssets/'+ list[2] +'"><p>' + list[0] + '</p></div>'
        }
    }
    symbolsGenerated = true
}

function insertCardDescription() {
    let parent = document.getElementsByClassName("cardzime")
    parent.innerHTML += '<h1>TEST</h1>'
}

document.addEventListener("DOMContentLoaded", insertCard)
