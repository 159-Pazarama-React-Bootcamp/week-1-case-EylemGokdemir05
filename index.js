const isCreditCardNumberValid = () => {

    var cardNumber = document.getElementById("cardNumber").value;
    var sum=0;
    var cardNumberAsNumberType = Number(cardNumber);
    
    while(cardNumberAsNumberType){
        sum+=cardNumberAsNumberType%10;
        cardNumberAsNumberType=Math.floor(cardNumberAsNumberType/10);
    }

    var lastnumber=cardNumber.split('').pop();

    var isDifference=true;
    for(let i=1; i<cardNumber.length; i++){
        isDifference=checkDifferences(cardNumber[0],cardNumber[i]);
        if(isDifference) break;
    }
    
    var result;
    if(cardNumber.length == 16 && sum>16 && typeof(cardNumberAsNumberType)=='number' && lastnumber%2==0 && isDifference){
        result = true;
    } else {
        result = false;
    }

    document.getElementById("result").innerHTML = result;
}

function checkDifferences(first,number){
    return first!=number;
}
