import {
  BAGGED_SUNFLOWER,
  WATERING_CAN,
  BAGGED_MARIGOLDS,
  BAGGED_ROSES,
  BAGGED_FLOWER,
  BAGGED_DAFFODILS,
  BAGGED_BLUEBELLS,
  SOFT_CLAY,
  PLANK,
  LIMESTONE_BRICK,
  IRON_BAR,
  OAK_PLANK,
  STEEL_BAR,
  TEAK_PLANK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  MOLTEN_GLASS,
  GOLD_LEAF,
  PLATINUM_TOKEN,
  THORNY_HEDGE,
  NICE_HEDGE,
  SMALL_BOX_HEDGE,
  TOPIARY_HEDGE,
  FANCY_HEDGE,
  TALL_FANCY_HEDGE,
  TALL_BOX_HEDGE
} from "../itemData/itemConstatnts";

export const formalGarden = {
  id: "8416",
  name: "Formal garden",
  level: "55",
  price: "75000",
  type: "outdoor",
  hotSpots: [
    {
      name: "Centrepiece",
      builds: [
        {
          id: "8168",
          name: "Exit portal",
          level: "1",
          materials: [{ name: IRON_BAR, quantity: 10 }]
        },
        {
          id: "8192",
          name: "Gazebo",
          level: "65",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 8 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          id: "8172",
          name: "Dungeon entrance",
          level: "70",
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        },
        {
          id: "8193",
          name: "Small fountain",
          level: "71",
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        },
        {
          id: "8194",
          name: "Large fountain",
          level: "75",
          materials: [{ name: MARBLE_BLOCK, quantity: 2 }]
        },
        {
          id: "8195",
          name: "Posh fountain",
          level: "81",
          materials: [{ name: MARBLE_BLOCK, quantity: 3 }]
        }
      ]
    },
    {
      name: "Small Plant 1",
      builds: [
        {
          id: "8213",
          name: "Sunflower",
          level: "66",
          materials: [
            { name: BAGGED_SUNFLOWER, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8214",
          name: "Marigolds",
          level: "71",
          materials: [
            { name: BAGGED_MARIGOLDS, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8215",
          name: "Roses",
          level: "76",
          materials: [
            { name: BAGGED_ROSES, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Big Plant 1",
      builds: [
        {
          id: "8213",
          name: "Sunflower",
          level: "66",
          materials: [
            { name: BAGGED_SUNFLOWER, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8214",
          name: "Marigolds",
          level: "71",
          materials: [
            { name: BAGGED_MARIGOLDS, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8215",
          name: "Roses",
          level: "76",
          materials: [
            { name: BAGGED_ROSES, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Small Plant 2",
      builds: [
        {
          id: "8210",
          name: "Rosemary",
          level: "66",
          materials: [
            { name: BAGGED_FLOWER, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8211",
          name: "Daffodils",
          level: "71",
          materials: [
            { name: BAGGED_DAFFODILS, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8212",
          name: "Bluebells",
          level: "76",
          materials: [
            { name: BAGGED_BLUEBELLS, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Big Plant 2",
      builds: [
        {
          id: "8210",
          name: "Rosemary",
          level: "66",
          materials: [
            { name: BAGGED_FLOWER, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8211",
          name: "Daffodils",
          level: "71",
          materials: [
            { name: BAGGED_DAFFODILS, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8212",
          name: "Bluebells",
          level: "76",
          materials: [
            { name: BAGGED_BLUEBELLS, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Hedging",
      builds: [
        {
          id: "8203",
          name: "Thorny hedge",
          level: "56",
          materials: [
            { name: THORNY_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8204",
          name: "Nice hedge",
          level: "60",
          materials: [
            { name: NICE_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8205",
          name: "Small box hedge",
          level: "64",
          materials: [
            { name: SMALL_BOX_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8206",
          name: "Topiary hedge",
          level: "68",
          materials: [
            { name: TOPIARY_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8207",
          name: "Fancy hedge",
          level: "72",
          materials: [
            { name: FANCY_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8208",
          name: "Tall fancy hedge",
          level: "76",
          materials: [
            { name: TALL_FANCY_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          id: "8209",
          name: "Tall box hedge",
          level: "80",
          materials: [
            { name: TALL_BOX_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Fencing",
      builds: [
        {
          id: "8196",
          name: "Boundary stones",
          level: "55",
          materials: [{ name: SOFT_CLAY, quantity: 10 }]
        },
        {
          id: "8197",
          name: "Wooden fence",
          level: "59",
          materials: [{ name: PLANK, quantity: 10 }]
        },
        {
          id: "8198",
          name: "Stone wall",
          level: "63",
          materials: [{ name: LIMESTONE_BRICK, quantity: 10 }]
        },
        {
          id: "8199",
          name: "Iron railings",
          level: "67",
          materials: [
            { name: IRON_BAR, quantity: 10 },
            { name: LIMESTONE_BRICK, quantity: 6 }
          ]
        },
        {
          id: "8200",
          name: "Picket fence",
          level: "71",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          id: "8201",
          name: "Garden fence",
          level: "75",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          id: "8202",
          name: "Marble wall",
          level: "79",
          materials: [{ name: MARBLE_BLOCK, quantity: 8 }]
        }
      ]
    },
    {
      name: "Tip jar",
      builds: [
        {
          id: "20634",
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