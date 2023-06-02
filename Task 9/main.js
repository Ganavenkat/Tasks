let raceNumber=Math.floor(Math.random()*1000);
const registeredearly=true;
let runnerage=18;
if(runnerage>=18&&registeredearly==true)
{
    raceNumber+=1000;
}
if(runnerage>18&&registeredearly==true)
{
    console.log(`Your race will start at 9:30 am and Your race number is ${raceNumber}.`);

}
else if(runnerage>18&&registeredearly==false)
{
    console.log(`Your race will start at 11:00 am and Your racenumber is ${raceNumber}.`);
}
else if(runnerage<18)
{
    console.log(`Your race will start at 12:30 pm and Your race number is ${raceNumber}.`);
}
else 
{
    console.log("Please visit the registration desk.")
}