
let isDOBopen= false;
let dateofBirth;
const settingsCogEl= document.getElementById("settingsIcon");
const settingsContent=document.getElementById("settingsContent");
const initialTextEl= document.getElementById("initialText");
const afterDOBbtnTextEl= document.getElementById("afterDOBbtnText");
const dobOutputEl= document.getElementById("dobOutput");
const dobInputEL = document.getElementById("dobInput");

const yearEl= document.getElementById("year");
const monthEl= document.getElementById("months");
const daysEl= document.getElementById("days");
const HoursEl= document.getElementById("hours");
const minutesEl= document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const toggleDateofBirthSelector = () =>
{
    if(isDOBopen){
        settingsContent.classList.add("hide");
    }
    else{
        settingsContent.classList.remove("hide");
    }
    isDOBopen = ! isDOBopen;
    console.log('Toggle',isDOBopen);
    
};
const Updateage = () =>
    {
       const CurrentDate= new Date(); //stores todays date
        const  Datediff = CurrentDate  - dateofBirth;
        year= Math.floor(Datediff / (1000 * 60 * 60 * 24 * 365));
        months= Math.floor((Datediff / (1000 * 60 * 60 * 24 * 365)) % 12);
        days= Math.floor((Datediff / (1000 * 60 * 60 * 24)) % 30);
        hours= Math.floor((Datediff / (1000 * 60 * 60))%24);
        minutes= Math.floor((Datediff / (1000 * 60))%60);
        seconds= Math.floor((Datediff / 1000 )%60);
       console.log("difference", Datediff);
       yearEl.innerHTML= year;
       monthEl.innerHTML= months;
       daysEl.innerHTML= days;
       HoursEl.innerHTML= hours;
       minutesEl.innerHTML= minutes;
       secondsEl.innerHTML=seconds;
   }
   
const setDOBHandler = () =>
    {
    const dateString = dobInputEL.value;
    dateofBirth = dateString ? new Date(dateString) : null    //passes your actual dob to the current date. //The condition passed it=s to remove Nan null value which was displayed 
    console.log('Date of birth', dateofBirth);
    if(dateofBirth){
        initialTextEl.classList.add('hide');
          afterDOBbtnTextEl.classList.remove('hide');
            setInterval(()=> Updateage(),1000);// setInterval timer is used for seconds timer.
    }
    else{
       initialTextEl.classList.remove('hide');
        afterDOBbtnTextEl.classList.add('hide');
    }
  
};
setDOBHandler();
 
settingsCogEl.addEventListener('click',toggleDateofBirthSelector );