import {
  OAK_PLANK,
  TEAK_PLANK,
  BOLT_OF_CLOTH,
  LIMESTONE_BRICK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  MOLTEN_GLASS,
  STEEL_BAR,
  DECORATIVE_BODY_GOLD,
  DECORATIVE_HELM_GOLD,
  DECORATIVE_SHIELD_GOLD,
  DECORATIVE_BODY_RED,
  DECORATIVE_HELM_RED,
  DECORATIVE_SHIELD_RED,
  DECORATIVE_BODY_WHITE,
  DECORATIVE_HELM_WHITE,
  DECORATIVE_SHIELD_WHITE,
  STUFFED_ABYSSAL_HEAD,
  STUFFED_BASILISK_HEAD,
  STUFFED_BIG_BASS,
  STUFFED_BIG_SHARK,
  STUFFED_BIG_SWORDFISH,
  STUFFED_COCKATRICE_HEAD,
  STUFFED_CRAWLING_HAND,
  STUFFED_HYDRA_HEADS,
  STUFFED_KBD_HEADS,
  STUFFED_KQ_HEAD,
  STUFFED_KURASK_HEAD,
  VORKATHS_STUFFED_HEAD,
  MITHRIL_FULL_HELM,
  MITHRIL_PLATEBODY,
  MITHRIL_PLATESKIRT,
  ADAMANT_FULL_HELM,
  ADAMANT_PLATEBODY,
  ADAMANT_PLATESKIRT,
  RUNE_FULL_HELM,
  RUNE_PLATEBODY,
  RUNE_PLATESKIRT,
  AIR_RUNE,
  EARTH_RUNE,
  FIRE_RUNE,
  WATER_RUNE,
  LAW_RUNE,
  BLOOD_RUNE,
  COSMIC_RUNE,
  BODY_RUNE,
  CHAOS_RUNE,
  NATURE_RUNE,
  DEATH_RUNE,
  SOUL_RUNE
} from "../itemData/itemConstatnts";

export const skillHall = {
  name: "Skill hall",
  level: "25",
  price: "15000",
  hotSpots: [
    {
      name: "Stairs/Rugs",
      builds: [
        {
          name: "Rug",
          level: "13",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 4 }
          ]
        },
        {
          name: "Opulent rug",
          level: "65",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Oak staircase",
          level: "27",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          name: "Teak staircase",
          level: "48",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          name: "Spirial staircase",
          level: "67",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: LIMESTONE_BRICK, quantity: 7 }
          ]
        },
        {
          name: "Marble staircase",
          level: "82",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 5 }
          ]
        },
        {
          name: "Marble spiral",
          level: "97",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: MARBLE_BLOCK, quantity: 7 },
          ]
        }
      ]
    },
    {
      name: "Castle Wars armour",
      builds: [
        {
          name: "Cw armour 1",
          level: "28",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: DECORATIVE_HELM_RED, quantity: 1 },
            { name: DECORATIVE_SHIELD_RED, quantity: 1 },
            { name: DECORATIVE_BODY_RED, quantity: 1 }
          ]
        },
        {
          name: "Cw armour 2",
          level: "28",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: DECORATIVE_HELM_WHITE, quantity: 1 },
            { name: DECORATIVE_SHIELD_WHITE, quantity: 1 },
            { name: DECORATIVE_BODY_WHITE, quantity: 1 }
          ]
        },
        {
          name: "Cw armour 3",
          level: "28",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: DECORATIVE_HELM_GOLD, quantity: 1 },
            { name: DECORATIVE_SHIELD_GOLD, quantity: 1 },
            { name: DECORATIVE_BODY_GOLD, quantity: 1 }
          ]
        },
 
      ]
    },
    {
      name: "Armour",
      builds: [
        {
          name: "Mithril armour stand",
          level: "28",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: MITHRIL_FULL_HELM, quantity: 1 },
            { name: MITHRIL_PLATEBODY, quantity: 1 },
            { name: MITHRIL_PLATESKIRT, quantity: 1 },
          ]
        },
        {
          name: "Adamant armour stand",
          level: "28",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: ADAMANT_FULL_HELM, quantity: 1 },
            { name: ADAMANT_PLATEBODY, quantity: 1 },
            { name: ADAMANT_PLATESKIRT, quantity: 1 },
          ]
        },
        {
          name: "Rune armour stand",
          level: "28",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: RUNE_FULL_HELM, quantity: 1 },
            { name: RUNE_PLATEBODY, quantity: 1 },
            { name: RUNE_PLATESKIRT, quantity: 1 },
          ]
        },

      ]
    },
    {
      name: "Head trophy",
      builds: [
        {
          name: "Crawling Hand",
          level: "38",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: STUFFED_CRAWLING_HAND, quantity: 1 }
          ]
        },
        {
          name: "Cockatrice",
          level: "38",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: STUFFED_COCKATRICE_HEAD, quantity: 1 }
          ]
        },
        {
          name: "Basilisk",
          level: "38",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: STUFFED_BASILISK_HEAD, quantity: 1 }
          ]
        },
        {
          name: "Kurask",
          level: "58",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: STUFFED_KURASK_HEAD, quantity: 1 }
          ]
        },
        {
          name: "Abyssal demon",
          level: "58",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: STUFFED_ABYSSAL_HEAD, quantity: 1 }
          ]
        },
        {
          name: "King Black Dragon",
          level: "78",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: STUFFED_KBD_HEADS, quantity: 1 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        },
        {
          name: "Kalphite Queen",
          level: "78",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: STUFFED_KQ_HEAD, quantity: 1 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        },
        {
          name: "Vorkath",
          level: "82",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: VORKATHS_STUFFED_HEAD, quantity: 1 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        },
        {
          name: "Alchemical Hydra",
          level: "82",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: STUFFED_HYDRA_HEADS, quantity: 1 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        },
        
      ]
    },
    {
      name: "Fishing trophy",
      builds: [
        {
          name: "Mounted bass",
          level: "36",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: STUFFED_BIG_BASS, quantity: 1 }
          ]
        },
        {
          name: "Mounted swordfish",
          level: "56",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: STUFFED_BIG_SWORDFISH, quantity: 1 }
          ]
        },
        {
          name: "Mounted shark",
          level: "76",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: STUFFED_BIG_SHARK, quantity: 1 }
          ]
        },

      ]
    },
    {
      name: "Rune case",
      builds: [
        {
          name: "Rune case 1",
          level: "41",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 2 },
            { name: AIR_RUNE, quantity: 1 },
            { name: WATER_RUNE, quantity: 1 },
            { name: EARTH_RUNE, quantity: 1 },
            { name: FIRE_RUNE, quantity: 1 },
          ]
        },
        {
          name: "Rune case 2",
          level: "41",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 2 },
            { name: BODY_RUNE, quantity: 1 },
            { name: COSMIC_RUNE, quantity: 1 },
            { name: CHAOS_RUNE, quantity: 1 },
            { name: NATURE_RUNE, quantity: 1 },
          ]
        },
        {
          name: "Rune case 3",
          level: "41",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 2 },
            { name: LAW_RUNE, quantity: 1 },
            { name: DEATH_RUNE, quantity: 1 },
            { name: BLOOD_RUNE, quantity: 1 },
            { name: SOUL_RUNE, quantity: 1 },
          ]
        },
        
    
      ]
    },
  ]
};
