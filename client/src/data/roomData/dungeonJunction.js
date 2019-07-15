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

export const dungeonJunction = {
  name: "Dungeon junction",
  level: "70",
  price: "7500",
  type: "dungeon",
  hotSpots: [
    {
      name: "Door 1",
      builds: [
        {
          name: "Oak door",
          level: "74",
          materials: [{ name: OAK_PLANK, quantity: 10 }]
        },
        {
          name: "Oak door",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 10 }
          ]
        },
        {
          name: "Marble door",
          level: "94",
          materials: [{ name: MARBLE_BLOCK, quantity: 4 }]
        }
      ]
    },
    {
      name: "Door 2",
      builds: [
        {
          name: "Oak door",
          level: "74",
          materials: [{ name: OAK_PLANK, quantity: 10 }]
        },
        {
          name: "Oak door",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 10 }
          ]
        },
        {
          name: "Marble door",
          level: "94",
          materials: [{ name: MARBLE_BLOCK, quantity: 4 }]
        }
      ]
    },
    {
      name: "Trap 1",
      builds: [
        {
          name: "Spike trap",
          level: "72",
          materials: [{ name: COINS, quantity: 50000 }]
        },
        {
          name: "Man trap",
          level: "76",
          materials: [{ name: COINS, quantity: 75000 }]
        },
        {
          name: "Tangle vine",
          level: "80",
          materials: [{ name: COINS, quantity: 100000 }]
        },
        {
          name: "Marble trap",
          level: "84",
          materials: [{ name: COINS, quantity: 150000 }]
        },
        {
          name: "Teleport trap",
          level: "88",
          materials: [{ name: COINS, quantity: 200000 }]
        }
      ]
    },
    {
      name: "Trap 2",
      builds: [
        {
          name: "Spike trap",
          level: "72",
          materials: [{ name: COINS, quantity: 50000 }]
        },
        {
          name: "Man trap",
          level: "76",
          materials: [{ name: COINS, quantity: 75000 }]
        },
        {
          name: "Tangle vine",
          level: "80",
          materials: [{ name: COINS, quantity: 100000 }]
        },
        {
          name: "Marble trap",
          level: "84",
          materials: [{ name: COINS, quantity: 150000 }]
        },
        {
          name: "Teleport trap",
          level: "88",
          materials: [{ name: COINS, quantity: 200000 }]
        }
      ]
    },
    {
      name: "Guard",
      builds: [
        {
          name: "Skeleton guard",
          level: "70",
          materials: [{ name: COINS, quantity: 50000 }]
        },
        {
          name: "Guard dog",
          level: "74",
          materials: [{ name: COINS, quantity: 75000 }]
        },
        {
          name: "Hobgoblin",
          level: "78",
          materials: [{ name: COINS, quantity: 100000 }]
        },
        {
          name: "Baby red dragon",
          level: "82",
          materials: [{ name: COINS, quantity: 150000 }]
        },
        {
          name: "Huge spider",
          level: "86",
          materials: [{ name: COINS, quantity: 200000 }]
        },
        {
          name: "Troll guard",
          level: "90",
          materials: [{ name: COINS, quantity: 1000000 }]
        },
        {
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
          name: "Decorative blood",
          level: "72",
          materials: [{ name: RED_DYE, quantity: 4 }]
        },
        {
          name: "Decorative pipe",
          level: "83",
          materials: [{ name: STEEL_BAR, quantity: 6 }]
        },
        {
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
          name: "Candle",
          level: "72",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: CANDLE, quantity: 4 }
          ]
        },
        {
          name: "Torch",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TORCH, quantity: 4 }
          ]
        },
        {
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
