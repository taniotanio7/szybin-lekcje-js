while (true) {
    var liczba = parseInt(prompt("Podaj liczbę (0-100)"));
    if (!isNaN(liczba) && liczba < 100 && liczba >= 0) {
        break;
    }
}

for (let i = 0; i<=liczba; i++) {
    document.write("Odliczanie " + i + "<br/>");
}

// Sprawdzenie czy NIE JEST liczbą: isNaN();
// Zwraca true / false