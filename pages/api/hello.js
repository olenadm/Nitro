import { DUMMY_DATA } from "@/data/data";
import "core-js/actual/";

export function getAllData() {
  return DUMMY_DATA;
}

export function getCategoryMap(filter) {
  //The callback function should return a value indicating the group of the associated element. 
  const groupByCategory = Map.groupBy(DUMMY_DATA, (post) => {
    return post[filter];
  });

  return Array.from(groupByCategory);
}

export function getCategoryMapF(arr, filter) {
  //The callback function should return a value indicating the group of the associated element. 
  const groupByCategory = Map.groupBy(arr, (post) => {
    const week = weekNumber(post.time);
    post["week"] = "Post Week " + week;

    if (filter === "time") {
      return post.week;
    }
    return post[filter];
  });
//create array from map
  return Array.from(groupByCategory);
}

function weekNumber(time) {
 // const date = new Date(time * 1000);

 /*Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
  var dayOfYear = ((today - onejan + 86400000)/86400000);
  return Math.ceil(dayOfYear/7)
};
*/
  
  // Converts timestamp into Date Object
  //Unix timestamp format, representing the number of seconds since January 1, 1970, 00:00:00 UTC. 
  //To convert a Unix timestamp to a JavaScript timestamp, 
  //we can multiply it by 1,000 to convert it to milliseconds.
  const dt = new Date(time * 1000);
    
  // January 1 
  var week1 = new Date(dt.getFullYear(), 0, 1);
  //count number of weeks from date to week1
  //dividing result by the total milliseconds in a day gives difference between dates in days
  //then divide by 7
  var dayOfYear = ((dt - week1 + 86400000)/86400000);
  return Math.ceil(dayOfYear/7)
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  //return ( 1 + Math.round( ((dt.getTime() - week1.getTime()) / 86400000 -  3 + ((week1.getDay() + 6) % 7)) /  7
  //  )
  //);
}
