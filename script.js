// Sample post data
const posts = [
  {
    type: "image",
    username: "fake_influencer",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-1.jpg?raw=true",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
  },
  {
    type: "video",
    username: "fake_influencer",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-1.mp4",
    ],
    caption: "Check out my latest moves! 🎥",
    likes: 0,
    liked: false,
    comments: [],
  },
  {
    type: "carousel",
    username: "fake_influencer",
    media: [
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-1.1.jpg?raw=true",
      "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-carouse-1.2.jpg?raw=true",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
  },
];

// Function to render posts
function renderFeed() {
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
                <video controls>
                    <source src="${post.media[0]}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
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
            <h3>@${post.username}</h3>
            ${mediaContent}
            <p>${post.caption}</p>
            <button id="like-btn-${index}" onclick="window.likePost(${index})">❤️ Like (<span id="likes-${index}">${post.likes}</span>)</button>
            <div class="comments">
                <input type="text" id="comment-input-${index}" placeholder="Add a comment...">
                <button onclick="window.addComment(${index})">Post</button>
                <ul id="comments-${index}"></ul>
            </div>
        `;
    feed.appendChild(postElement);

    updateComments(index);
  });
}

// Function to switch to the next image in the carousel
window.nextImage = function (index) {
  if (posts[index].type === "carousel") {
    posts[index].currentIndex =
      (posts[index].currentIndex + 1) % posts[index].media.length;
    document.getElementById(`carousel-${index}`).src =
      posts[index].media[posts[index].currentIndex];
    document.getElementById(`indicator-${index}`).textContent = `${
      posts[index].currentIndex + 1
    } / ${posts[index].media.length}`;
  }
};

// Function to switch to the previous image in the carousel
window.prevImage = function (index) {
  if (posts[index].type === "carousel") {
    posts[index].currentIndex =
      (posts[index].currentIndex - 1 + posts[index].media.length) %
      posts[index].media.length;
    document.getElementById(`carousel-${index}`).src =
      posts[index].media[posts[index].currentIndex];
    document.getElementById(`indicator-${index}`).textContent = `${
      posts[index].currentIndex + 1
    } / ${posts[index].media.length}`;
  }
};

// Function to like a post (only once)
window.likePost = function (index) {
  if (!posts[index].liked) {
    posts[index].likes++;
    posts[index].liked = true;
    document.getElementById(`likes-${index}`).textContent = posts[index].likes;
    document.getElementById(`like-btn-${index}`).disabled = true;
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
  commentList.innerHTML = "";
  posts[index].comments.forEach((comment) => {
    const newComment = document.createElement("li");
    newComment.textContent = comment;
    commentList.appendChild(newComment);
  });
}

// Function to switch images in the carousel
window.nextImage = function (index) {
  if (posts[index].type === "carousel") {
    posts[index].currentIndex =
      (posts[index].currentIndex + 1) % posts[index].media.length;
    document.getElementById(`carousel-${index}`).src =
      posts[index].media[posts[index].currentIndex];
  }
};

// Load the feed when the page loads
renderFeed();

// Global variable to store all comments
let collectedComments = [];

window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    let comment = input.value.trim();
    posts[index].comments.push(comment);
    collectedComments.push(comment); // Store comment in global array
    updateComments(index);
    input.value = ""; // Clear input
  }
};

function sendCommentsToQualtrics() {
  let commentsString = encodeURIComponent(collectedComments.join(" | ")); // Format comments
  let surveyURL = new URL(window.location.href); // Get Qualtrics survey URL
  surveyURL.searchParams.set("comments", commentsString); // Attach comments as a URL param

  window.location.href = surveyURL.toString(); // Redirect back to Qualtrics with data
}
