// Функція reverser(str) приймає рядок str і повертає його у зворотному порядку.
function reverser(str) {
    return str.split('').reverse().join('');
    // split('') - перетворює рядок на масив символів.
    // reverse() - перевертає порядок символів у масиві.
    // join('') - об'єднує перевернутий масив назад у рядок.
}

// Функція showReversed() обробляє введений користувачем текст і показує його на сторінці.
function showReversed() {
    // Отримуємо значення, яке ввів користувач у поле input з id="inputText"
    let inputText = document.getElementById("inputText").value;

    // Викликаємо функцію reverser(), щоб перевернути текст
    let reversedText = reverser(inputText);

    // Вставляємо перевернутий текст у елемент <span id="output">
    document.getElementById("output").innerText = reversedText;
}
