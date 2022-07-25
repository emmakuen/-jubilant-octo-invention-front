const COMMENTS = [
  {
    id: 5,
    parentId: null,
    authorId: 4,
    content:
      "Love the native memberships and the zipless themes, I was just asked by a friend about options for a new site, and I think I know what I'll be recommending then...",
    timestamp: "2022-06-21T17:31:20.000Z",
    likes: [],
    author: {
      id: 4,
      email: "cameronlawrence@example.com",
      name: "Cameron Lawrence",
      profilePicUrl: "https://randomuser.me/api/portraits/women/70.jpg",
    },
    isLikedByUser: false,
  },
  {
    id: 3,
    parentId: null,
    authorId: 2,
    content:
      "Switched our blog from Hubspot to Ghost a year ago -- turned out to be a great decision. Looking forward t othis update... The in-platform analytics look especially delicious. :)",
    timestamp: "2022-07-14T12:01:15.000Z",
    likes: [],
    author: {
      id: 2,
      email: "sophiebrecht@example.com",
      name: "Sophie Brecht",
      profilePicUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    isLikedByUser: false,
    replies: [
      {
        id: 4,
        parentId: 3,
        authorId: 3,
        content:
          "Thanks Sophie! Last year has been an absolute goldrush for the creator economy. Slowly at first, then all at once. Will be interesting to see how this ecosystem evolves over the next few years.",
        timestamp: "2022-07-15T15:01:15.000Z",
        likes: [],
        author: {
          id: 3,
          email: "james@example.com",
          name: "James",
          profilePicUrl: "https://randomuser.me/api/portraits/men/74.jpg",
        },
        isLikedByUser: false,
      },
    ],
  },
];

export default COMMENTS;
