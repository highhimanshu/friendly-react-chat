
export const mockChats = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    date: "Today",
    selected: false
  },
  {
    id: 2,
    title: "Lorem ipsum dolorLorem dolor",
    date: "Today",
    selected: false
  },
  {
    id: 3,
    title: "consectetur",
    date: "Yesterday",
    selected: true
  },
  {
    id: 4,
    title: "consectetur adipiscing elit",
    date: "Yesterday",
    selected: false
  },
  {
    id: 5,
    title: "adipiscing elit",
    date: "Yesterday",
    selected: false
  }
];

export const mockMessages = [
  {
    id: 1,
    sender: "AI Bot",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et",
    timestamp: "11:40 AM"
  },
  {
    id: 2,
    sender: "You",
    content: "Lorem ipsum dolor sit amet",
    timestamp: "11:45 AM"
  }
];

export const mockMessageDetails = [
  {
    id: 1,
    title: "D Lorem ipsum dolor sit",
    contentItems: [
      {
        type: "section",
        title: "Lorem:",
        items: [
          {
            type: "bullet",
            text: "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
          },
          {
            type: "nested-bullet",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          },
          {
            type: "nested-bullet",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          }
        ]
      },
      {
        type: "section",
        title: "Lorem:",
        items: [
          {
            type: "bullet",
            text: "Lorem ipsum ."
          },
          {
            type: "nested-bullet",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          },
          {
            type: "nested-bullet",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          }
        ]
      }
    ]
  }
];

export const mockUser = {
  name: "Vipul Srivastav",
  role: "Members"
};
