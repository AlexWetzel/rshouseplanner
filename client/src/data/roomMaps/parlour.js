export const parlour = {
  doors: [
    //North
    [0, 37.5, 97, 37.5],
    //East
    [37.5, 0, 37.5, 97],
    //South
    [97, 37.5, 0, 37.5],
  ],
  hotSpots: [
    {
      name: "Curtains",
      position: [
        [0, 62.5, 92.5, 25],
        [0, 25, 92.5, 62.5],
        [25, 0, 62.5, 92.5],
        [62.5, 0, 25, 92.5],
        [92.5, 25, 0, 62.5],
        [92.5, 62.5, 0, 25],
        [25, 92.5, 62.5, 0],
        [62.5, 92.5, 25, 0]
      ]
    },
    {
      name: "Chair 1",
      position: [[25, 50, 62.5, 37.5]]
    },
    {
      name: "Chair 2",
      position: [[37.5, 37.5, 50, 50]]
    },
    {
      name: "Chair 3",
      position: [[62.5, 50, 25, 37.5]]
    },
    {
      name: "Fireplace",
      position: [[37.5, 87.5, 37.5, 0]]
    }
  ],
  walls: []
};
