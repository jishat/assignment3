// https://github.com/jishat/assignment3
/**---------------------------------------------
 * Convert Kilometer into meter
 -----------------------------------------------*/
function kilometerToMeter(km){
    if(0 <= km && Number(km) === km ){
        let result = km * 1000;
        return result; //output
    }else{
        return "Invalid number"; //output       
    }
}//end function



/**---------------------------------------------
 * Calculate the budget
 -----------------------------------------------*/
function budgetCalculator(watch, phone, laptop){
    if(0 <= watch && 0 <= phone && 0 <= laptop && Number(watch) === watch &&  Number(phone) === phone && Number(laptop) === laptop && watch % 1 === 0 && phone % 1 === 0 && laptop % 1 === 0){ //if start
        const watchPrice = 50;
        const phonePrice = 100;
        const laptopPrice = 500;
        let result = (watchPrice * watch) + (phonePrice * phone) + (laptopPrice * laptop); //calculate total price
        return result; //output
    }else{
        return "Invalid quantity"; //output        
    }
} //end function



/**---------------------------------------------
 * Calculate Hotel Cost
 -----------------------------------------------*/
 function hotelCost(day){
    const firstDurationPrice = 100;
    const secondDurationPrice = 80;
    const thirdDurationPrice = 50;
    let totalCost = "";
    if(0 < day && Number(day) === day &&  day % 1 === 0){
        if(day <= 10){
            totalCost = 100 * day;
        }else if(day <= 20){
            let getSecondDuration = day - 10;
            let firstDurationCost =  100 * 10;
            let secondDurationCost =  80 * getSecondDuration;
            totalCost = firstDurationCost + secondDurationCost;
        }else{
            let getThirdDuration = day - 20;

            let firstDurationCost =  100 * 10;
            let secondDurationCost =  80 * 10;
            let thirdDurationCost =  50 * getThirdDuration;
            
            totalCost = firstDurationCost + secondDurationCost + thirdDurationCost;
        }
        return totalCost; //output
    }else{
        return "Invalid day"; //output        
    }
 }//end function


/**---------------------------------------------
 * finding the big string from the array
 -----------------------------------------------*/
function megaFriend(inputArray){

    if(typeof(inputArray) == 'object'){

        let max=inputArray[0].length;
        for(let i=1;i<inputArray.length;i++)
        {
            let stringLength = inputArray[i].length;
            if(max < stringLength)
            {
                max = stringLength;
            }
        }
        return max; //output
    }
    else{
        return "Invalid input"; //output
    }
} //end function
