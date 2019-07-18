export const diningRoom = {
  doors: [
    //North
    [0, 37.5, 97, 37.5],
    //East
    [37.5, 0, 37.5, 97],
    //South
    [97, 37.5, 0, 37.5]
  ],
  hotSpots: [
    {
      name: "Table",
      position: [[25, 37.5, 25, 37.5]]
    },
    {
      name: "Fireplace",
      position: [[37.5, 87.5, 37.5, 0]]
    },
    {
      name: "Seating 1",
      position: [[25, 62.5, 25, 25]]
    },
    {
      name: "Seating 2",
      position: [[25, 25, 25, 62.5]]
    },
    {
      name: "Decoration",
      position: [[25, 92.5, 62.5, 0], [62.5, 92.5, 25, 0]]
    },
    {
      name: "Bell-pull",
      position: [[87.5, 0, 0, 87.5]]
    },
    {
      name: "Curtains",
      position: [
        [0, 62.5, 92.5, 25],
        [0, 25, 92.5, 62.5],
        [25, 0, 62.5, 92.5],
        [62.5, 0, 25, 92.5],
        [92.5, 25, 0, 62.5],
        [92.5, 62.5, 0, 25]
      ]
    }
  ],
  walls: []
};
