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
            { name: "Plank", quantity: 3 },
            { name: "Steel nails", quantity: 3 }
          ]
        },
        {
          name: "Cider",
          level: "12",
          materials: [
            { name: "Plank", quantity: 3 },
            { name: "Steel nails", quantity: 3 },
            { name: "Cider", quantity: 8 }
          ]
        },
        {
          name: "Asgarnian ale",
          level: "18",
          materials: [
            { name: "Oak plank", quantity: 3 },
            { name: "Asgarnian ale", quantity: 8 }
          ]
        },
        {
          name: "Greenman's ale",
          level: "26",
          materials: [
            { name: "Oak plank", quantity: 3 },
            { name: "Greenman's ale", quantity: 8 },
          ]
        },
        {
          name: "Dragon Bitter",
          level: "36",
          materials: [
            { name: "Oak plank", quantity: 3 },
            { name: "Dragon bitter", quantity: 8 },
            { name: "Steel bar", quantity: 2 }
          ]
        },
        {
          name: "Chef's Delight",
          level: "48",
          materials: [
            { name: "Oak plank", quantity: 3 },
            { name: "Chef's delight", quantity: 8 },
            { name: "Steel bar", quantity: 2 },
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
            { name: "Plank", quantity: 3 },
            { name: "Steel nails", quantity: 3 }
          ]
        },
        {
          name: "Oak kitchen table",
          level: "32",
          materials: [
            { name: "Oak plank", quantity: 3 }
          ]
        },
        {
          name: "Teak kitchen table",
          level: "52",
          materials: [
            { name: "Teak plank", quantity: 3 }
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
            { name: "Steel bar", quantity: 1 },
            { name: "Soft clay", quantity: 2 }
          ]
        },
        {
          name: "Firepit with hook",
          level: "11",
          materials: [
            { name: "Steel bar", quantity: 2 },
            { name: "Soft clay", quantity: 2 }
          ]
        },
        {
          name: "Firepit with pot",
          level: "17",
          materials: [
            { name: "Steel bar", quantity: 3 },
            { name: "Soft clay", quantity: 2 }
          ]
        },
        {
          name: "Small oven",
          level: "24",
          materials: [{ name: "Steel bar", quantity: 4 }]
        },
        {
          name: "Large oven",
          level: "29",
          materials: [{ name: "Steel bar", quantity: 5 }]
        },
        {
          name: "Steel range",
          level: "34",
          materials: [{ name: "Steel bar", quantity: 6 }]
        },
        {
          name: "Fancy range",
          level: "42",
          materials: [{ name: "Steel bar", quantity: 8 }]
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
            { name: "Plank", quantity: 8 },
            { name: "Steel nails", quantity: 8 }
          ]
        },
        {
          name: "Oak larder",
          level: "33",
          materials: [
            { name: "Oak plank", quantity: 8 },
          ]
        },
        {
          name: "Teak larder",
          level: "43",
          materials: [
            { name: "Teak plank", quantity: 8 },
            { name: "Bolt of cloth", quantity: 2 }
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
            { name: "Plank", quantity: 3 },
            { name: "Steel nail", quantity: 3 }
          ]
        },
        {
          name: "Wooden shelves 2",
          level: "12",
          materials: [
            { name: "Plank", quantity: 3 },
            { name: "Steel nail", quantity: 3 },
            { name: "Soft clay", quantity: 6 }
          ]
        },
        {
          name: "Wooden shelves 3",
          level: "23",
          materials: [
            { name: "Plank", quantity: 3 },
            { name: "Steel nail", quantity: 3 },
            { name: "Soft clay", quantity: 6 }
          ]
        },
        {
          name: "Oak shelves 1",
          level: "34",
          materials: [
            { name: "Oak plank", quantity: 3 },
            { name: "Soft clay", quantity: 6 }
          ]
        },
        {
          name: "Oak shelves 2",
          level: "45",
          materials: [
            { name: "Oak plank", quantity: 3 },
            { name: "Soft clay", quantity: 6 }
          ]
        },
        {
          name: "Teak shelves 1",
          level: "56",
          materials: [
            { name: "Teak plank", quantity: 3 },
            { name: "Soft clay", quantity: 6 }
          ]
        },
        {
          name: "Teak shelves 2",
          level: "67",
          materials: [
            { name: "Teak plank", quantity: 3 },
            { name: "Gold leaf", quantity: 2 },
            { name: "Soft clay", quantity: 6 }
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
            {name: "Steel bar", quantity: 5}
          ]
        },
        {
          name: "Pump and tub",
          level: "27",
          materials: [
            {name: "Steel bar", quantity: 10}
          ]
        },
        {
          name: "Sink",
          level: "47",
          materials: [
            {name: "Steel bar", quantity: 15}
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
            {name: "Bolt of cloth", quantity: 1}
          ]
        },
        {
          name: "Cat basket",
          level: "19",
          materials: [
            {name: "Plank", quantity:2},
            {name: "Steel nail", quantity:2},
          ]
        },
        {
          name: "Cushioned basket",
          level: "3",
          materials: [
            {name: "Plank", quantity: 2},
            {name: "Steel nail", quantity: 2},
            {name: "Wool", quantity: 2}
          ]
        }
      ]
    }
  ]
} 