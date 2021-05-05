

var url = "https://lol.fandom.com/api.php?format=json&tables=MatchSchedule=MS&limit=10&action=cargoquery&fields=MS.Team1,MS.Team2&*"

$.getJSON(url, function(error, data){
    if (error !== null) {
        alert("Um erro inesperado aconteceu, tente novamente.");
    } else {
        console.log(data);
    }
});