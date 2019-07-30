import {
  COINS,
  RED_DYE,
  STEEL_BAR,
  BONES,
  SKULL,
  CANDLE,
  OAK_PLANK,
  TORCH,
  MARBLE_BLOCK
} from "../itemData/itemConstatnts";

export const dungeonStairs = {
  id: "8413",
  name: "Dungeon stairs",
  level: "70",
  price: "7500",
  type: "dungeon",
  hotSpots: [
    {
      name: "Door 1",
      builds: [
        {
          id: "8122",
          name: "Oak door",
          level: "74",
          materials: [{ name: OAK_PLANK, quantity: 10 }]
        },
        {
          id: "8123",
          name: "Oak door",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 10 }
          ]
        },
        {
          id: "8124",
          name: "Marble door",
          level: "94",
          materials: [{ name: MARBLE_BLOCK, quantity: 4 }]
        }
      ]
    },
    {
      name: "Door 1",
      builds: [
        {
          id: "8122",
          name: "Oak door",
          level: "74",
          materials: [{ name: OAK_PLANK, quantity: 10 }]
        },
        {
          id: "8123",
          name: "Oak door",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 10 }
          ]
        },
        {
          id: "8124",
          name: "Marble door",
          level: "94",
          materials: [{ name: MARBLE_BLOCK, quantity: 4 }]
        }
      ]
    },
    {
      name: "Guard 1",
      builds: [
        {
          id: "8131",
          name: "Skeleton guard",
          level: "70",
          materials: [{ name: COINS, quantity: 50000 }]
        },
        {
          id: "8132",
          name: "Guard dog",
          level: "74",
          materials: [{ name: COINS, quantity: 75000 }]
        },
        {
          id: "8133",
          name: "Hobgoblin",
          level: "78",
          materials: [{ name: COINS, quantity: 100000 }]
        },
        {
          id: "8134",
          name: "Baby red dragon",
          level: "82",
          materials: [{ name: COINS, quantity: 150000 }]
        },
        {
          id: "8135",
          name: "Huge spider",
          level: "86",
          materials: [{ name: COINS, quantity: 200000 }]
        },
        {
          id: "8136",
          name: "Troll guard",
          level: "90",
          materials: [{ name: COINS, quantity: 1000000 }]
        },
        {
          id: "8137",
          name: "Hellhound",
          level: "94",
          materials: [{ name: COINS, quantity: 5000000 }]
        }
      ]
    },
    {
      name: "Guard 2",
      builds: [
        {
          id: "8131",
          name: "Skeleton guard",
          level: "70",
          materials: [{ name: COINS, quantity: 50000 }]
        },
        {
          id: "8132",
          name: "Guard dog",
          level: "74",
          materials: [{ name: COINS, quantity: 75000 }]
        },
        {
          id: "8133",
          name: "Hobgoblin",
          level: "78",
          materials: [{ name: COINS, quantity: 100000 }]
        },
        {
          id: "8134",
          name: "Baby red dragon",
          level: "82",
          materials: [{ name: COINS, quantity: 150000 }]
        },
        {
          id: "8135",
          name: "Huge spider",
          level: "86",
          materials: [{ name: COINS, quantity: 200000 }]
        },
        {
          id: "8136",
          name: "Troll guard",
          level: "90",
          materials: [{ name: COINS, quantity: 1000000 }]
        },
        {
          id: "8137",
          name: "Hellhound",
          level: "94",
          materials: [{ name: COINS, quantity: 5000000 }]
        }
      ]
    },

    {
      name: "Decoration",
      builds: [
        {
          id: "8125",
          name: "Decorative blood",
          level: "72",
          materials: [{ name: RED_DYE, quantity: 4 }]
        },
        {
          id: "8126",
          name: "Decorative pipe",
          level: "83",
          materials: [{ name: STEEL_BAR, quantity: 6 }]
        },
        {
          id: "8127",
          name: "Hanging skeleton",
          level: "94",
          materials: [
            { name: SKULL, quantity: 2 },
            { name: BONES, quantity: 6 }
          ]
        }
      ]
    },
    {
      name: "Lighting",
      builds: [
        {
          id: "8128",
          name: "Candle",
          level: "72",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: CANDLE, quantity: 4 }
          ]
        },
        {
          id: "8129",
          name: "Torch",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TORCH, quantity: 4 }
          ]
        },
        {
          id: "8130",
          name: "Skull torch",
          level: "94",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TORCH, quantity: 4 },
            { name: SKULL, quantity: 4 }
          ]
        }
      ]
    }
  ]
};
