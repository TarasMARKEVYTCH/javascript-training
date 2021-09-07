const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!\"$%^&*():;";
const range = document.getElementById('display-password-length');
const passOutput = document.getElementById('password-output');


const generatePassword = () => {
    let password = "";
    let data = [];
    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(number.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);
    
    if(data.length === 0) {
        alert('Veuillez selectioner des criteres!');
        return;
    } else {
        for( i=0; i < range.value; i++){
            password += data[Math.floor(Math.random() * data.length)];
        }
        passOutput.value = password;
        passOutput.select();
        document.execCommand("copy");

        generateButton.textContent = "Copié";
        setTimeout(() => {
            generateButton.textContent = "Generer MDP"
        }, 2000);
    }
}

generateButton.addEventListener('click', generatePassword);