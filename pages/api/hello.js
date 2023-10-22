import { DUMMY_DATA } from "@/data/data";
import "core-js/actual/";

export function getAllData() {
  return DUMMY_DATA;
}

export function getCategoryMap(filter) {
  const groupByCategory = Map.groupBy(DUMMY_DATA, (post) => {
    return post[filter];
  });

  return Array.from(groupByCategory);
}

export function getCategoryMapF(arr, filter) {
  const groupByCategory = Map.groupBy(arr, (post) => {
    const week = weekNumber(post.time);
    post["week"] = "Post Week " + week;

    if (filter === "time") {
      return post.week;
    }
    return post[filter];
  });

  return Array.from(groupByCategory);
}

function weekNumber(time) {
  const date = new Date(time * 1000);
  // Converts timestamp into Date Object
  const dt = new Date(date);
  
  // January 4 is always in week 1.
  var week1 = new Date(dt.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((dt.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}
