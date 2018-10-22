// Korzystając z pętli while napisz skrypt wyświetlający na ekranie liczby
// od 1 do 20 niepodzielne przez 2

let i = 0;
while (i++ < 20) {
    if (i % 2 !== 0) {
        document.write(i + "<br>");
    }
}

