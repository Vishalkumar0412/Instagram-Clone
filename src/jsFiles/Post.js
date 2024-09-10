
for (let i = 1; i < 3; i++) {

  let postDetails = {

    postID: `post${i}`,
    userId: "user1",
    userDetails: {
      username: '1vishalnigam',
      userProfilePageUrl: "#",
      userProileImageUrl: "",
      postAgo: "8 h",
      userCaption: "live in Agra",


    },
    media: {
      mediaURL: "https://picsum.photos/200/300",
      mediaType: "image",
    },
    UserInteractions: {
      likeCount: 29,
      likedUser: "ajayKumar",
      CommentCount:3,

    },
    Description: {
      Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima facilis voluptas, quas consequuntur deserunt omnis nihil fuga laborum, eos hic quis nam temporibus, illo suscipit quia laboriosam molestiae earum ab!hello i am  vishal kumar i am thrild to annouse the that i am working on clone of insagr",
                          
      },
      

  }

  console.log(postDetails);


}






