while (true) {
    var liczba = parseInt(prompt("Podaj procent (0-100)"));
    if (!isNaN(liczba) && liczba <= 100 && liczba >= 0) {
        break;
    }
}

document.write(`
    <style>
        .bar1 {
            background-color: green;
            width: ${liczba}%;
            height: 10px;
            border: none;
        }
        .bar2 {
            background-color: red;
            width: ${100-liczba}%;
            height: 10px;
            border: none;
        }
    </style>
`);

for (let i = 0; i<100; i++) {
    if (i <= liczba && liczba !== 0) {
        document.write('<span style="color: green; font-size: 22px;">|</span>');
    }
    if (i > liczba) {
        document.write('<span style="color: red; font-size: 22px;">|</span>')
    }
}

document.write(`<p> = ${liczba}%</p>`);