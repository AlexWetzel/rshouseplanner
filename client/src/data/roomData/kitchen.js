import {
  PLANK,
  STEEL_NAILS,
  OAK_PLANK,
  TEAK_PLANK,
  BOLT_OF_CLOTH,
  SOFT_CLAY,
  GOLD_LEAF,
  CIDER,
  ASGARNIAN_ALE,
  GREENMANS_ALE,
  DRAGON_BITTER,
  CHEFS_DELIGHT,
  STEEL_BAR,
  WOOL
} from "../itemData/itemConstatnts";

export const kitchen = {
  name: "Kitchen",
  level: "5",
  price: "5000",
  type: "indoor",
  hotSpots: [
    {
      name: "Barrel",
      builds: [
        {
          name: "Beer",
          level: "7",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Cider",
          level: "12",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 },
            { name: CIDER, quantity: 8 }
          ]
        },
        {
          name: "Asgarnian ale",
          level: "18",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: ASGARNIAN_ALE, quantity: 8 }
          ]
        },
        {
          name: "Greenman's ale",
          level: "26",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: GREENMANS_ALE, quantity: 8 },
          ]
        },
        {
          name: "Dragon Bitter",
          level: "36",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: DRAGON_BITTER, quantity: 8 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          name: "Chef's Delight",
          level: "48",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: CHEFS_DELIGHT, quantity: 8 },
            { name: STEEL_BAR, quantity: 2 },
          ]
        }
      ]
    },
    {
      name: "Table",
      builds: [
        {
          name: "Kitchen table",
          level: "12",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Oak kitchen table",
          level: "32",
          materials: [
            { name: OAK_PLANK, quantity: 3 }
          ]
        },
        {
          name: "Teak kitchen table",
          level: "52",
          materials: [
            { name: TEAK_PLANK, quantity: 3 }
          ]
        }
      ]
    },
    {
      name: "Stove",
      builds: [
        {
          name: "Firepit",
          level: "5",
          materials: [
            { name: STEEL_BAR, quantity: 1 },
            { name: SOFT_CLAY, quantity: 2 }
          ]
        },
        {
          name: "Firepit with hook",
          level: "11",
          materials: [
            { name: STEEL_BAR, quantity: 2 },
            { name: SOFT_CLAY, quantity: 2 }
          ]
        },
        {
          name: "Firepit with pot",
          level: "17",
          materials: [
            { name: STEEL_BAR, quantity: 3 },
            { name: SOFT_CLAY, quantity: 2 }
          ]
        },
        {
          name: "Small oven",
          level: "24",
          materials: [{ name: STEEL_BAR, quantity: 4 }]
        },
        {
          name: "Large oven",
          level: "29",
          materials: [{ name: STEEL_BAR, quantity: 5 }]
        },
        {
          name: "Steel range",
          level: "34",
          materials: [{ name: STEEL_BAR, quantity: 6 }]
        },
        {
          name: "Fancy range",
          level: "42",
          materials: [{ name: STEEL_BAR, quantity: 8 }]
        }
      ]
    },
    {
      name: "Larder",
      builds: [
        {
          name: "Wooden larder",
          level: "9",
          materials: [
            { name: PLANK, quantity: 8 },
            { name: STEEL_NAILS, quantity: 8 }
          ]
        },
        {
          name: "Oak larder",
          level: "33",
          materials: [
            { name: OAK_PLANK, quantity: 8 },
          ]
        },
        {
          name: "Teak larder",
          level: "43",
          materials: [
            { name: TEAK_PLANK, quantity: 8 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        }
      ]
    },
    {
      name: "Shelf",
      builds: [
        {
          name: "Wooden shelves 1",
          level: "6",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Wooden shelves 2",
          level: "12",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 },
            { name: SOFT_CLAY, quantity: 6 }
          ]
        },
        {
          name: "Oak shelves 1",
          level: "34",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: SOFT_CLAY, quantity: 6 }
          ]
        },
        {
          name: "Oak shelves 2",
          level: "45",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: SOFT_CLAY, quantity: 6 }
          ]
        },
        {
          name: "Teak shelves 1",
          level: "56",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: SOFT_CLAY, quantity: 6 }
          ]
        },
        {
          name: "Teak shelves 2",
          level: "67",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 2 },
            { name: SOFT_CLAY, quantity: 6 }
          ]
        },
      ]
    },
    {
      name: "Sink",
      builds: [
        {
          name: "Pump and drain",
          level: "7",
          materials: [
            {name: STEEL_BAR, quantity: 5}
          ]
        },
        {
          name: "Pump and tub",
          level: "27",
          materials: [
            {name: STEEL_BAR, quantity: 10}
          ]
        },
        {
          name: "Sink",
          level: "47",
          materials: [
            {name: STEEL_BAR, quantity: 15}
          ]
        }
      ]
    },
    {
      name: "Basket",
      builds: [
        {
          name: "Cat blanket",
          level: "5",
          materials: [
            {name: BOLT_OF_CLOTH, quantity: 1}
          ]
        },
        {
          name: "Cat basket",
          level: "19",
          materials: [
            {name: PLANK, quantity:2},
            {name: STEEL_NAILS, quantity:2},
          ]
        },
        {
          name: "Cushioned basket",
          level: "3",
          materials: [
            {name: PLANK, quantity: 2},
            {name: STEEL_NAILS, quantity: 2},
            {name: WOOL, quantity: 2}
          ]
        }
      ]
    }
  ]
} 