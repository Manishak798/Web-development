function bmiCalculator(height,weight){
    var bmi=weight/(height*height);
    return bmi;
}
var height=prompt("Enter your height: ");
var weight=prompt("Enter your weight: ");
var result= bmiCalculator(height,weight);
document.write("Your BMI = "+result);
