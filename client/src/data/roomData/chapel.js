import {
  PLANK,
  STEEL_NAILS,
  OAK_PLANK,
  TEAK_PLANK,
  BOLT_OF_CLOTH,
  LIMESTONE_BRICK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  STEEL_BAR,
  CANDLE,
  GOLD_BAR,
  MOLTEN_GLASS
} from "../itemData/itemConstatnts";

export const chapel = {
  id: "8405",
  name: "Chapel",
  level: "45",
  price: "50000",
  type: "indoor",
  hotSpots: [
    {
      name: "Altar",
      builds: [
        {
          id: "8062",
          name: "Oak altar",
          level: "45",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
          ]
        },
        {
          id: "8063",
          name: "Teak altar",
          level: "50",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
          ]
        },
        {
          id: "8064",
          name: "Cloth altar",
          level: "56",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: BOLT_OF_CLOTH, quantity: 2 },
          ]
        },
        {
          id: "8065",
          name: "Mahogany altar",
          level: "60",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: BOLT_OF_CLOTH, quantity: 2 },
          ]
        },
        {
          id: "8066",
          name: "Limestone altar",
          level: "64",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 6 },
            { name: BOLT_OF_CLOTH, quantity: 2 },
            { name: LIMESTONE_BRICK, quantity: 2 },
          ]
        },
        {
          id: "8067",
          name: "Marble altar",
          level: "70",
          materials: [
            { name: MARBLE_BLOCK, quantity: 2 },
            { name: BOLT_OF_CLOTH, quantity: 2 },
          ]
        },
        {
          id: "8068",
          name: "Gilded altar",
          level: "75",
          materials: [
            { name: MARBLE_BLOCK, quantity: 2 },
            { name: BOLT_OF_CLOTH, quantity: 2 },
            { name: GOLD_LEAF, quantity: 4 },
          ]
        },
        
      ]
    },
    {
      name: "Lamp",
      builds: [
        {
          id: "8069",
          name: "Steel torches",
          level: "45",
          materials: [
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          id: "8070",
          name: "Wooden torches",
          level: "49",
          materials: [
            { name: PLANK, quantity: 2 },
            { name: STEEL_NAILS, quantity: 2 }
          ]
        },
        {
          id: "8071",
          name: "Steel candlesticks",
          level: "53",
          materials: [
            { name: STEEL_BAR, quantity: 6 },
            { name: CANDLE, quantity: 6 }
          ]
        },
        {
          id: "8072",
          name: "Gold candlesticks",
          level: "57",
          materials: [
            { name: GOLD_BAR, quantity: 6 },
            { name: CANDLE, quantity: 6 }
          ]
        },
        {
          id: "8073",
          name: "Incense burners",
          level: "61",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          id: "8074",
          name: "Mahogany burners",
          level: "65",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          id: "8075",
          name: "Marble burners",
          level: "69",
          materials: [
            { name: MARBLE_BLOCK, quantity: 2 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
       
      ]
    },
    {
      name: "Icon",
      builds: [

        {
          id: "8055",
          name: "Saradomin symbol",
          level: "48",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
          ]
        },
        {
          id: "8056",
          name: "Zamorak symbol",
          level: "48",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
          ]
        },
        {
          id: "8057",
          name: "Guthix symbol",
          level: "48",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
          ]
        },
 
        {
          id: "8058",
          name: "Saradomin icon",
          level: "59",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 2 },
          ]
        },
        {
          id: "8059",
          name: "Zamorak icon",
          level: "59",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 2 },
          ]
        },
        {
          id: "8060",
          name: "Guthix icon",
          level: "59",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 2 },
          ]
        },
        {
          id: "8061",
          name: "Icon of Bob",
          level: "71",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 2 },
          ]
        },
        
      ]
    },

    {
      name: "Musical",
      builds: [
        {
          id: "8079",
          name: "Windchimes",
          level: "49",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: STEEL_NAILS, quantity: 4 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          id: "8080",
          name: "Bells",
          level: "58",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: STEEL_BAR, quantity: 6 },
          ]
        },
        {
          id: "8081",
          name: "Organ",
          level: "69",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: STEEL_BAR, quantity: 6 },
          ]
        },

      ]
    },
    {
      name: "Statues",
      builds: [
        {
          id: "8082",
          name: "Small statue",
          level: "49",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 2 },
          ]
        },
        {
          id: "8083",
          name: "Medium statue",
          level: "69",
          materials: [
            { name: MARBLE_BLOCK, quantity: 1 },
          ]
        },
        {
          id: "8084",
          name: "Large statue",
          level: "89",
          materials: [
            { name: MARBLE_BLOCK, quantity: 3 },
          ]
        },
       
      ]
    },
    {
      name: "Windows",
      builds: [
        {
          id: "8076",
          name: "Shuttered window",
          level: "49",
          materials: [
            { name: PLANK, quantity: 8 },
            { name: STEEL_NAILS, quantity: 8 }
          ]
        },
        {
          id: "8077",
          name: "Decorative window",
          level: "69",
          materials: [{ name: MOLTEN_GLASS, quantity: 8 }]
        },
        {
          id: "8078",
          name: "Stained glass",
          level: "89",
          materials: [{ name: MOLTEN_GLASS, quantity: 16 }]
        }
      ]
    },
    {
      name: "Rug",
      builds: [
        {
          id: "8316",
          name: "Brown rug",
          level: "2",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 2 }]
        },
        {
          id: "8317",
          name: "Rug",
          level: "13",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 4 }]
        },
        {
          id: "8318",
          name: "Opulent rug",
          level: "65",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 4 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    },
  ]
};