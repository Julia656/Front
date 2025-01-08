let number = prompt("Введіть п'ятизначне число:");
if (number.length === 5 && !isNaN(number)) {
    let result = number.split("").join(" ");
    console.log(result);
    alert(result);
} else {
    console.error("Помилка: введіть саме п'ятизначне число.");
    alert("Помилка: введіть саме п'ятизначне число.");
}