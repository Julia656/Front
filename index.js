function checkNumber(num) {
    
    num = num.trim();

    
    if (!/^[-]?\d{3}$/.test(num)) {
        return "Помилка: введіть коректне тризначне число!";
    }

  
    let digits = num.replace('-', '').split('');


    const allSame = digits.every(digit => digit === digits[0]);
    if (allSame) {
        return "Усі цифри однакові.";
    }

   
    const hasDuplicates = new Set(digits).size !== digits.length;
    if (hasDuplicates) {
        return "Є однакові цифри.";
    }

    return "Цифри всі різні.";
}


console.log(checkNumber('   123  '));  
console.log(checkNumber('000456'));   
console.log(checkNumber('-0621'));     
console.log(checkNumber(' 3.2 '));    