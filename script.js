console.log("🚀 script.js has loaded successfully!");
window.setUsername = function () {
  const input = document.getElementById("username-input").value.trim();
  if (input) {
    localStorage.setItem("username", input); // Store username
    document.getElementById("username-container").style.display = "none"; // Hide input box
    document.getElementById("app").style.display = "block"; // Show feed
    username = input; // Set global username
    renderFeed(); // Ensure the feed loads properly
  } else {
    alert("Please enter a username.");
  }
};

let username = localStorage.getItem("username");

if (username) {
  document.getElementById("username-container").style.display = "none";
  document.getElementById("app").style.display = "block";
}

let likeCount = 0;

// Sample post data
const posts = [
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-1.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-2.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-3.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-4.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-5.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-6.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-7.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-8.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-9.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-10.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-11.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-12.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-13.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-14.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-15.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-16.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-17.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-18.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-19.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-20.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-1.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-2.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-3.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-4.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-5.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-6.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-7.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-8.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-9.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-10.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-11.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-12.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-13.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-14.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-15.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-16.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-17.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-18.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-19.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "video",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-20.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-1.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-1.2.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-2.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-2.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-2.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-2.4.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-2.5.jpg?raw=true",
    ],
    caption: "Hanging out at this cool museum! ˙✧˖°📷 ༘ ⋆｡°",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-3.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-3.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-3.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-3.4.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-4.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-4.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-4.3.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-5.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-5.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-5.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-5.4.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-6.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-6.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-6.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-6.4.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-7.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-7.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-7.3.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-8.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-8.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-8.3.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-9.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-9.2.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-10.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-10.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-10.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-10.4.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-10.5.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-11.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-11.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-11.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-11.4.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-12.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-12.2.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-13.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-13.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-13.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-13.4.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-13.5.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-14.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-14.2.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-15.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-15.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-15.3.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-16.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-16.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-16.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-16.4.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-17.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-17.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-17.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-17.4.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-18.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-18.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-18.3.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-19.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-19.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-19.3.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-20.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-20.2.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-20.3.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-20.4.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-20.5.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
  },
];

//setupVideoAutoplay
function setupVideoAutoplay() {
  // make video play sound
  let userHasInteracted = false; // Track if the user has scrolled

  document.addEventListener("scroll", () => {
    if (!userHasInteracted) {
      document.querySelectorAll(".video-post").forEach((video) => {
        video.muted = false; // 🔊 Unmute all videos once scrolling starts
      });
      userHasInteracted = true; // Prevent further changes
    }
  }); // make video play sound

  const videos = document.querySelectorAll(".video-post");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .play()
            .catch((error) => console.warn("Autoplay prevented:", error));
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.9 }
  );

  videos.forEach((video) => {
    observer.observe(video);

    const playOverlay = video.parentElement.querySelector(".play-overlay"); // ✅ Finds the correct overlay for each video
    playOverlay.classList.remove("hidden"); // ✅ Show play button on page load

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playOverlay.classList.add("hidden"); // ✅ Hide play button when playing
      } else {
        video.pause();
        playOverlay.classList.remove("hidden"); // ✅ Show play button when paused
      }
    });

    video.addEventListener("play", () => {
      setTimeout(() => playOverlay.classList.add("hidden"), 100); // ✅ Ensure it fades out after play starts
    });

    video.addEventListener("pause", () => {
      playOverlay.classList.remove("hidden"); // ✅ Show play button when paused
    });
  });
}

// Function to shuffle posts using Fisher-Yates algorithm
function shufflePosts() {
  for (let i = posts.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [posts[i], posts[j]] = [posts[j], posts[i]]; // Swap elements
  }
}

// Function to render posts
function renderFeed() {
  shufflePosts(); // Randomize posts before rendering
  const feed = document.getElementById("feed");
  feed.innerHTML = ""; // Clear existing content

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    let mediaContent = "";
    if (post.type === "image") {
      mediaContent = `<img src="${post.media[0]}" alt="Post image">`;
    } else if (post.type === "video") {
      mediaContent = `
      <div class="video-container">
      <video class="video-post" muted loop playsinline>
          <source src="${post.media[0]}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div class="play-overlay hidden"></div> <!-- ✅ This is the only play button now -->
  </div>
      `;
    } else if (post.type === "carousel") {
      mediaContent = `
        <div class="carousel-container">
            <button class="carousel-btn left" onclick="prevImage(${index})">&lt;</button>
            <img id="carousel-${index}" src="${post.media[0]}" alt="Carousel Image">
            <button class="carousel-btn right" onclick="nextImage(${index})">&gt;</button>
            <div class="carousel-indicator" id="indicator-${index}">1 / ${post.media.length}</div>
        </div>
      `;
    }

    postElement.innerHTML = `
      <div class="post-header">
      <img class="avatar" src="${post.profilePic}" alt="Avatar">
          <span class="username">${post.username}</span>
      </div>
      ${mediaContent}
      <p>${post.caption}</p>
      <div class="post-actions">
          <img id="like-btn-${index}" src="https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-like1.png?raw=true" 
               alt="Like" class="action-icon" onclick="window.likePost(${index})">
          <img id="comment-btn-${index}" src="https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-comment.png?raw=true"
               alt="Comment" class="action-icon" onclick="window.toggleComment(${index})">
      </div>
      <div id="comment-section-${index}" class="comment-section hidden">
          <div class="comment-input-container">
              <input type="text" id="comment-input-${index}" placeholder="Add a comment...">
              <img id="send-comment-${index}" src="https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-sendcomment.png?raw=true" 
                   alt="Send" class="send-icon" onclick="window.addComment(${index})">
          </div>
          <ul id="comments-${index}"></ul>
      </div>
    `;

    feed.appendChild(postElement);
    updateComments(index);
  });

  setupVideoAutoplay(); // ✅ Ensure observer is set up after rendering
}

// Function to switch to the next image in the carousel
window.nextImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex < posts[index].media.length - 1) {
      posts[index].currentIndex++;
      console.log(
        `➡️ Next Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to switch to the previous image in the carousel
window.prevImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex > 0) {
      posts[index].currentIndex--;
      console.log(
        `⬅️ Previous Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to update the carousel display, including the indicator
function updateCarousel(index) {
  let post = posts[index];

  console.log(
    `🔄 Updating carousel ${index}: Now at ${post.currentIndex + 1} / ${
      post.media.length
    }`
  );

  let imageElement = document.getElementById(`carousel-${index}`);
  let indicatorElement = document.getElementById(`indicator-${index}`);

  if (imageElement) {
    imageElement.src = post.media[post.currentIndex]; // Update the image
  } else {
    console.warn(`❌ Image element "carousel-${index}" not found.`);
  }

  if (indicatorElement) {
    indicatorElement.textContent = `${post.currentIndex + 1} / ${
      post.media.length
    }`; // Fix: Removed extra parentheses
  } else {
    console.warn(`❌ Indicator element "indicator-${index}" not found.`);
  }
}

// Function to like a post (only once)
window.likePost = function (index) {
  let likeBtn = document.getElementById(`like-btn-${index}`);
  if (!posts[index].liked) {
    posts[index].likes++;
    posts[index].liked = true;
    likeCount++; // Increase total like count
    likeBtn.src =
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-like2.png?raw=true";
  } else {
    posts[index].likes--;
    posts[index].liked = false;
    likeCount--; // Decrease total like count if unliked
    likeBtn.src =
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-like1.png?raw=true";
  }
};

// Function to add a comment
window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    posts[index].comments.push(input.value);
    updateComments(index);
    input.value = ""; // Clear input
  }
};

// Function to update comments
function updateComments(index) {
  const commentList = document.getElementById(`comments-${index}`);
  commentList.innerHTML = ""; // Clear and re-add comments

  posts[index].comments.forEach((comment) => {
    const newComment = document.createElement("li");
    newComment.textContent = comment;

    // 🚨 THIS FORCES THE COMMENTS TO BE ON A NEW LINE 🚨
    newComment.style.display = "block";
    newComment.style.width = "100%";
    newComment.style.marginTop = "5px";
    newComment.style.wordWrap = "break-word";
    newComment.style.clear = "both"; // 💥 Ensures no floating elements next to it

    commentList.appendChild(newComment);
  });

  // 🚀 FORCES THE BROWSER TO RERENDER THE COMMENTS 🚀
  commentList.style.display = "none";
  setTimeout(() => (commentList.style.display = "block"), 10);
}

// Load the feed when the page loads
renderFeed();

// Global variable to store all comments
let collectedComments = [];

window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    let comment = `${localStorage.getItem("username")}: ${input.value.trim()}`;
    posts[index].comments.push(comment);
    collectedComments.push(comment);
    updateComments(index);
    input.value = "";

    console.log("✅ New comment:", comment);

    // Send to Qualtrics
    sendCommentsToQualtrics();
  }
};

window.sendCommentsToQualtrics = function () {
  let commentsString = collectedComments.join(" | ");
  let qualtricsURL = "https://illinois.qualtrics.com";

  console.log("Sending to Qualtrics:", {
    comments: commentsString,
    likes: likeCount,
  });

  window.parent.postMessage(
    { comments: commentsString, likes: likeCount },
    qualtricsURL
  );
};

window.toggleComment = function (index) {
  let commentSection = document.getElementById(`comment-section-${index}`);
  commentSection.classList.toggle("hidden"); // Show/hide comment section
};
