import {
  IRON_BAR,
  LIMESTONE_BRICK,
  SOFT_CLAY,
  MARBLE_BLOCK,
  BAGGED_DEAD_TREE,
  WATERING_CAN,
  BAGGED_NICE_TREE,
  BAGGED_OAK_TREE,
  BAGGED_WILLOW_TREE,
  BAGGED_MAPLE_TREE,
  BAGGED_YEW_TREE,
  BAGGED_MAGIC_TREE,
  BAGGED_PLANT_1,
  BAGGED_PLANT_2,
  BAGGED_PLANT_3,
  MAHOGANY_PLANK,
  MOLTEN_GLASS,
  GOLD_LEAF,
  PLATINUM_TOKEN
} from "../itemData/itemConstatnts";

// {
//   name: "",
//   builds: [
//     {
//       name: "",
//       level: "",
//       materials: [{ name: "", quantity: }]
//     }
//   ]
// }

export const garden = {
  name: "Garden",
  level: "1",
  price: "1000",
  type: "outdoor",
  hotSpots: [
    {
      name: "Centrepiece",
      builds: [
        {
          name: "Exit portal",
          level: "1",
          materials: [{ name: IRON_BAR, quantity: 10 }]
        },
        {
          name: "Decorative rock",
          level: "5",
          materials: [{ name: LIMESTONE_BRICK, quantity: 5 }]
        },
        {
          name: "Pond",
          level: "10",
          materials: [{ name: SOFT_CLAY, quantity: 10 }]
        },
        {
          name: "Imp statue",
          level: "15",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 5 },
            { name: SOFT_CLAY, quantity: 5 }
          ]
        },
        {
          name: "Dungeon entrance",
          level: "70",
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        }
      ]
    },
    {
      name: "Tree 1",
      builds: [
        {
          name: "Tree",
          level: "5",
          materials: [
            { name: BAGGED_DEAD_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Nice tree",
          level: "10",
          materials: [
            { name: BAGGED_NICE_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Oak tree",
          level: "15",
          materials: [
            { name: BAGGED_OAK_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Willow Tree",
          level: "30",
          materials: [
            { name: BAGGED_WILLOW_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Maple tree",
          level: "45",
          materials: [
            { name: BAGGED_MAPLE_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Yew tree",
          level: "60",
          materials: [
            { name: BAGGED_YEW_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Magic tree",
          level: "75",
          materials: [
            { name: BAGGED_MAGIC_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Tree 2",
      builds: [
        {
          name: "Tree",
          level: "5",
          materials: [
            { name: BAGGED_DEAD_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Nice tree",
          level: "10",
          materials: [
            { name: BAGGED_NICE_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Oak tree",
          level: "15",
          materials: [
            { name: BAGGED_OAK_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Willow Tree",
          level: "30",
          materials: [
            { name: BAGGED_WILLOW_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Maple tree",
          level: "45",
          materials: [
            { name: BAGGED_MAPLE_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Yew tree",
          level: "60",
          materials: [
            { name: BAGGED_YEW_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Magic tree",
          level: "75",
          materials: [
            { name: BAGGED_MAGIC_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Small plant 1",
      builds: [
        {
          name: "Plant",
          level: "1",
          materials: [
            { name: BAGGED_PLANT_1, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Small fern",
          level: "6",
          materials: [
            { name: BAGGED_PLANT_2, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Fern",
          level: "12",
          materials: [
            { name: BAGGED_PLANT_3, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Small plant 2",
      builds: [
        {
          name: "Dock leaf",
          level: "1",
          materials: [
            { name: BAGGED_PLANT_1, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Thistle",
          level: "6",
          materials: [
            { name: BAGGED_PLANT_2, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Reeds",
          level: "12",
          materials: [
            { name: BAGGED_PLANT_3, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Big plant 1",
      builds: [
        {
          name: "Fern",
          level: "1",
          materials: [
            { name: BAGGED_PLANT_1, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Bush",
          level: "6",
          materials: [
            { name: BAGGED_PLANT_2, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Tall plant",
          level: "12",
          materials: [
            { name: BAGGED_PLANT_3, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Big plant 2",
      builds: [
        {
          name: "Short Plant",
          level: "1",
          materials: [
            { name: BAGGED_PLANT_1, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Large leaf bush",
          level: "6",
          materials: [
            { name: BAGGED_PLANT_2, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Huge plant",
          level: "11",
          materials: [
            { name: BAGGED_PLANT_3, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Tip jar",
      builds: [
        {
          name: "Tip jar",
          level: "40",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: PLATINUM_TOKEN, quantity: 5 }
          ]
        }
      ]
    }
  ]
};
