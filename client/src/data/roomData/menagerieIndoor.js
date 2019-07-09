import {
  OAK_PLANK,
  TEAK_PLANK,
  BOLT_OF_CLOTH,
  LIMESTONE_BRICK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  ROPE,
  BUCKET_OF_MILK,
  MAGIC_STONE,
  BUCKET_OF_WATER,
  SUPERCOMPOST,
  PAPYRUS
} from "../itemData/itemConstatnts";

export const menagerieIndoor = {
  name: "Menagerie (indoor)",
  level: "37",
  price: "30000",
  type: "indoor",
  hotSpots: [
    {
      name: "Scratching post",
      builds: [
        {
          name: "Oak scratching post",
          level: "39",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: ROPE, quantity: 2 }
          ]
        },
        {
          name: "Teak scratching post",
          level: "49",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: ROPE, quantity: 1 },
            { name: LIMESTONE_BRICK, quantity: 1 }
          ]
        },
        {
          name: "Mahogany scratching post",
          level: "59",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: ROPE, quantity: 1 },
            { name: LIMESTONE_BRICK, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Pet feeder",
      builds: [
        {
          name: "Oak feeder",
          level: "37",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: BUCKET_OF_MILK, quantity: 1 }
          ]
        },
        {
          name: "Teak feeder",
          level: "48",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: BUCKET_OF_MILK, quantity: 1 }
          ]
        },
        {
          name: "Mahogany feeder",
          level: "59",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: BUCKET_OF_MILK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Pet house",
      builds: [
        {
          name: "Oak house",
          level: "37",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Teak house",
          level: "48",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TEAK_PLANK, quantity: 4 }
          ]
        },
        {
          name: "Mahogany house",
          level: "59",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TEAK_PLANK, quantity: 4 },
            { name: MAHOGANY_PLANK, quantity: 4 }
          ]
        },
        {
          name: "Consecrated house",
          level: "70",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TEAK_PLANK, quantity: 4 },
            { name: MAHOGANY_PLANK, quantity: 8 },
            { name: MAGIC_STONE, quantity: 1 }
          ]
        },
        {
          name: "Desecrated house",
          level: "81",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TEAK_PLANK, quantity: 4 },
            { name: MAHOGANY_PLANK, quantity: 9 },
            { name: MAGIC_STONE, quantity: 1 },
            { name: LIMESTONE_BRICK, quantity: 1 }
          ]
        },
        {
          name: "Nature house",
          level: "92",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TEAK_PLANK, quantity: 4 },
            { name: MAHOGANY_PLANK, quantity: 10 },
            { name: MAGIC_STONE, quantity: 1 },
            { name: LIMESTONE_BRICK, quantity: 1 },
            { name: BUCKET_OF_WATER, quantity: 2 },
            { name: SUPERCOMPOST, quantity: 3 }
          ]
        }
      ]
    },
    {
      name: "Arena",
      builds: [
        {
          name: "Simple arena",
          level: "63",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: ROPE, quantity: 1 }
          ]
        },
        {
          name: "Advanced arena",
          level: "73",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: ROPE, quantity: 1 }
          ]
        },
        {
          name: "Glorious arena",
          level: "63",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: ROPE, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Pet list",
      builds: [
        {
          name: "Torn curtains",
          level: "38",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: PAPYRUS, quantity: 1 }
          ]
        }
      ]
    }
  ]
};
