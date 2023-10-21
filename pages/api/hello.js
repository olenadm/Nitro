import { DUMMY_DATA } from "@/data/data";

import "core-js/actual/";

export function getAllData() {
  
  return DUMMY_DATA;
}

export function getCategoryMap(filter) {
  console.log(`Filter in getCategoryMap ${filter}`);

  const groupByCategory = Map.groupBy(DUMMY_DATA, (product) => {
    return product[filter];
  });

  return Array.from(groupByCategory);
}

export function getCategoryMapF(arr, filter) {
  console.log(`Filter in getCategoryMap ${filter}`);

  const groupByCategory = Map.groupBy(arr, (product) => {
    return product[filter];
  });

  return Array.from(groupByCategory);
}

export function getDataById(id) {
  const allItems = getAllData();
  return allItems.find((challenge) => challenge.id === id);
}
export default function handler(req, res) {
  if (req.method === "POST") {
    const { author } = req.body; // our responsibility to include these properties exactly
    console.log(`POST REQUEST : Item  author - ${author}`);
    try {
      const dataFilteredByTime = getCategoryMap("time");

      res.status(201).json({ message: "Changed" });
    } catch (error) {
      res.status(500).json({ message: "Failed" });
    }
  } else {
    //const allItems = getAllData();
    res.status(200).json({ message: "Success" });
  }
}
