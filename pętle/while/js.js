/*
Przerwanie pętli: break
Wymuszenie kolejnej pętli: continue
 */

// --- Pętla while ---

/*
while(warunek) {
    instrukcje;
}

liczba powtórzeń jest nieznana
*/

let i = 0;
while (i<10) {
    document.write("Pętla while i = " + i + "</br>");
    i++;
}
// Można też while(i++<10) ...

// --- Pętla do while ---

/*
do {
    instrukcje;
    break;
    continue;
} while (warunek);
*/

let j = 0;
do {
    document.write("Pętla do ... while " + j + "<br/>");
    j++
} while (j < 10);

