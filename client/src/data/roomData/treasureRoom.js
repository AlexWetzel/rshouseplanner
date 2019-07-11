import {
  COINS,
  RED_DYE,
  STEEL_BAR,
  BONES,
  SKULL,
  CANDLE,
  OAK_PLANK,
  TORCH,
  MARBLE_BLOCK,
  PLANK,
  STEEL_NAILS,
  TEAK_PLANK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  MAGIC_STONE
} from "../itemData/itemConstatnts";

export const treasureRoom = {
  name: "Treasure room",
  level: "75",
  price: "200000",
  type: "dungeon",
  hotSpots: [
    {
      name: "Guardian",
      builds: [
        {
          name: "Demon",
          level: "75",
          materials: [{ name: COINS, quantity: 500000 }]
        },
        {
          name: "Kalphite soldier",
          level: "80",
          materials: [{ name: COINS, quantity: 750000 }]
        },
        {
          name: "Tok-xil",
          level: "85",
          materials: [{ name: COINS, quantity: 5000000 }]
        },
        {
          name: "Dagannoth",
          level: "90",
          materials: [{ name: COINS, quantity: 7500000 }]
        },
        {
          name: "Steel dragon",
          level: "95",
          materials: [{ name: COINS, quantity: 10000000 }]
        },
        {
          name: "Rune dragon",
          level: "99",
          materials: [{ name: COINS, quantity: 25000000 }]
        }
      ]
    },
    {
      name: "Treasure",
      builds: [
        {
          name: "Wooden crate",
          level: "75",
          materials: [
            { name: PLANK, quantity: 5 },
            { name: STEEL_NAILS, quantity: 5 }
          ]
        },
        {
          name: "Oak chest",
          level: "79",
          materials: [
            { name: OAK_PLANK, quantity: 5 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          name: "Teak chest",
          level: "83",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          name: "Mahogany chest",
          level: "87",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Magic chest",
          level: "91",
          materials: [{ name: MAGIC_STONE, quantity: 1 }]
        }
      ]
    },
    {
      name: "Door",
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
      name: "Decoration 1",
      builds: [
        {
          name: "Round shield",
          level: "66",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Square shield",
          level: "76",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Kite shield",
          level: "86",
          materials: [{ name: MAHOGANY_PLANK, quantity: 6 }]
        }
      ]
    },
    {
      name: "Decoration 2",
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
