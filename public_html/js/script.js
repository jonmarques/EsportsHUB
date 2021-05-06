
var date = new Date().toISOString().slice(0, 10);
var url = "https://lol.fandom.com/api.php?format=json&tables=MatchSchedule=MS&limit=100&action=cargoquery&where=MS.DateTime_UTC>='" + date + "'&fields=MS.Team1,MS.Team2,MS.Team1Score,MS.Team2Score,MS.BestOf,MS.ShownName,MS.DateTime_UTC&order_by=MS.DateTime_UTC&origin=*";
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Outubro', 'Setembro', 'Novembro', 'Dezembro']

$.getJSON(url, function (data) {

    var matches = '';

    var lastDate;

    $.each(data.cargoquery, function (k, v) {
        var matchDate = new Date(Date.parse(v.title["DateTime UTC"].replace(" ", "T")));
        if (lastDate === undefined || (lastDate.getYear() < matchDate.getYear() || lastDate.getMonth() < matchDate.getMonth() || lastDate.getDay() < matchDate.getDay())) {
           matches += matchDate.getDate() +  " de " + meses[matchDate.getMonth()] + " de " + matchDate.getFullYear();
        }
        matches += '<div class="matchContainer"><div class="matchDate">' + String("0" + matchDate.getHours()).slice(-2)  + ':' + String("0" + matchDate.getMinutes()).slice(-2) + '</div><div class="matchTeams"><div class="matchTeam"><div class="matchTeamName">' + v.title.Team1 + '</div><div class="matchTeamDivisor"></div><div class="matchTeamPoints">' + v.title.Team1Score + '</div></div><div class="matchTeam"><div class="matchTeamName">' + v.title.Team2 + '</div><div class="matchTeamDivisor"></div><div class="matchTeamPoints">' + v.title.Team2Score + '</div></div></div><div class="matchMDContainer"><div class="matchMD">MD' + v.title.BestOf + '</div></div><div class="matchTournament">' + v.title.ShownName + '</div></div>';
        lastDate = matchDate;
    });

    document.getElementById("container").innerHTML = matches;
});
