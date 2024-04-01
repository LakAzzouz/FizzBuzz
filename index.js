const number = "Hello" //Donner une valeur à number


if (isNaN(number)){ //Si number n'est pas un chiffre
    console.log("Veuillez inserez un chiffre !") //Alors on affiche "Veuillez inserez un chiffre !"
}
else if (number % 3 == 0 && number % 5 == 0){ //Si number est divisible par 3 & 5 
    console.log("FizzBuzz") //Alors on affiche FizzBuzz
}
else if (number % 3 == 0){ //Si number est divisible par 3
    console.log("Fizz") //Alors on affiche Fizz
}
else if (number % 5 == 0){ //Si number est divisible par 5 
    console.log("Buzz") //Alors on affiche Buzz
}
else { //Sinon on affiche le résultat de number
    console.log(number) 
}