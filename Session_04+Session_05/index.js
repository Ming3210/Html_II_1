export function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

   if(day<10){
    var currentDay = "0"+day
   }else currentDay = day

   if(month<10){
    var currentMonth = "0"+month
   }else currentMonth = month

   return currentDay + "/" + currentMonth + "/" + year;
}



