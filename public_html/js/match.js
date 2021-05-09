/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

if (urlParams.has("match")) {
    var url = "https://lol.fandom.com/api.php?format=json&tables=MatchScheduleGame=MSG&limit=100&action=cargoquery&fields=MSG.MatchHistory&where=MSG.MatchID=\"" + urlParams.get("match") + "\"&origin=*";

    $.getJSON(url, function (data) {
        console.log(JSON.stringify(data));

        $.each(data.cargoquery, function (k, v) {
            var matchh = v.title.MatchHistory.split("#match-details/");
            var urlhistory = "https://acs.leagueoflegends.com/v1/stats/game/" + matchh[1] + "&origin=*&callback=parseResponse";
            console.log(JSON.stringify(urlhistory));

            $.getJSON(urlhistory, function (history) {
            });
        });
    });
} else {
    console.log("No match parameter");
}
