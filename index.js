let userName = prompt("Введіть ваше ім'я:");
if (userName) {
    console.log(`Привіт, ${userName}!`);
    alert(`Привіт, ${userName}!`);
} else {
    console.log("Ви не ввели ім'я.");
    alert("Ви не ввели ім'я.");
}









let userName = prompt("Введіть ваше ім'я:");
if (userName && userName.trim() !== "") {
    alert(`Hello, ${userName}! How are you?`);
} else {
    alert("Помилка: ім'я не введено. Використовую [noname].");
    alert("Hello, [noname]! How are you?");
}