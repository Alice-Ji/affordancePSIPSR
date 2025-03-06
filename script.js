console.log("🚀 script.js has loaded successfully!");

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

window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    let comment = input.value.trim();
    posts[index].comments.push(comment);
    collectedComments.push(comment);
    updateComments(index);
    input.value = "";

    console.log("✅ addComment() triggered! New comment:", comment);

    // Auto-send comments
    sendCommentsToQualtrics();
  }
};

window.sendCommentsToQualtrics = function () {
  let commentsString = collectedComments.join(" | ");
  console.log("Trying to send comments:", commentsString);

  let qualtricsURL = "https://illinois.qualtrics.com";
  console.log("Sending message to:", qualtricsURL);

  window.parent.postMessage({ comments: commentsString }, qualtricsURL);
};
