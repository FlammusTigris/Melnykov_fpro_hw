var birthYear = prompt("Введіть свій рік народження:");
var city = prompt("Введіть місто, в якому ви живете:");
var favoriteSport = prompt("Введіть свій улюблений вид спорту:");

if (birthYear === null || city === null || favoriteSport === null) {
    alert("Шкода, що ви не захотіли ввести свою інформацію.");
} else {
    var currentYear = new Date().getFullYear();
    var age = currentYear - parseInt(birthYear);

    var message = "Ваш вік: " + age + " років\n";

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        message += "Ти живеш у столиці " + getCountryForCity(city) + "!\n";
    } else {
        message += "Ти живеш у місті " + city + "\n";
    }
    function getCountryForCity(city) {
        var capitals = {
            "Київ": "України",
            "Вашингтон": "США",
            "Лондон": "Великої Британії"
        };
    return capitals[city] || "невідомої країни";
}
        var sportsChampions = {
        "Футбол": "Мессі",
        "Теніс": "Федерером",
        "Баскетбол": "Леброном"
    };

    if (favoriteSport in sportsChampions) {
        message += "Круто! Хочеш стати " + sportsChampions[favoriteSport] + "?";
    }

    alert(message);
}


