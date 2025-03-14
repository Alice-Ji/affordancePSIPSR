// ✅ Ensure username is retrieved at page load
let currentUser = localStorage.getItem("username") || "Guest";
console.log("✅ Logged in as:", currentUser);

// ✅ Sample post data
const posts = [
    {
        type: "image",
        username: "rozy.gram",
        media: ["https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-photo-1.jpg?raw=true"],
        caption: "Just chilling with my best look! ✨",
        likes: 0,
        liked: false,
        comments: [],
        profilePic: "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
    },
    {
        type: "video",
        username: "rozy.gram",
        media: ["https://github.com/ruochongji/affordancePSIPSR/raw/refs/heads/main/rozy-video-1.mp4"],
        caption: "Check out my latest moves! 🎥",
        likes: 0,
        liked: false,
        comments: [],
        profilePic: "https://github.com/ruochongji/affordancePSIPSR/blob/main/rozy-avatar.jpg?raw=true",
    }
];

// ✅ Function to autoplay videos when they enter the viewport
function setupVideoAutoplay() {
    const videos = document.querySelectorAll(".video-post");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.play().catch((error) => console.warn("Autoplay prevented:", error));
                } else {
                    entry.target.pause();
                }
            });
        },
        { threshold: 0.5 }
    );
    videos.forEach((video) => observer.observe(video));
}

// ✅ Function to render posts
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
                <div class="video-container">
                    <video class="video-post" muted loop playsinline>
                        <source src="${post.media[0]}" type="video/mp4">
                    </video>
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
                    alt="Like" class="action-icon" onclick="likePost(${index})">
                <img id="comment-btn-${index}" src="https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-comment.png?raw=true"
                    alt="Comment" class="action-icon" onclick="toggleComment(${index})">
            </div>
            <div id="comment-section-${index}" class="comment-section hidden">
                <div class="comment-input-container">
                    <input type="text" id="comment-input-${index}" placeholder="Add a comment...">
                    <img id="send-comment-${index}" src="https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-sendcomment.png?raw=true" 
                        alt="Send" class="send-icon" onclick="addComment(${index})">
                </div>
                <ul id="comments-${index}"></ul>
            </div>
        `;

        feed.appendChild(postElement);
        updateComments(index);
    });

    setupVideoAutoplay(); // ✅ Ensure observer is set up after rendering
}

// ✅ Function to like/unlike a post
function likePost(index) {
    let likeBtn = document.getElementById(`like-btn-${index}`);
    posts[index].liked = !posts[index].liked;
    posts[index].likes += posts[index].liked ? 1 : -1;
    likeBtn.src = posts[index].liked
        ? "https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-like2.png?raw=true"
        : "https://github.com/ruochongji/affordancePSIPSR/blob/main/ins-like1.png?raw=true";
}

// ✅ Function to add a comment
function addComment(index) {
    const input = document.getElementById(`comment-input-${index}`);
    let commentText = input.value.trim();

    if (commentText) {
        let comment = `${currentUser}: ${commentText}`;
        posts[index].comments.push(comment);
        updateComments(index);
        input.value = ""; // Clear input

        console.log("✅ New comment added:", comment);
    }
}

// ✅ Function to update comments
function updateComments(index) {
    const commentList = document.getElementById(`comments-${index}`);
    commentList.innerHTML = ""; // Clear and re-add comments

    posts[index].comments.forEach((comment) => {
        const newComment = document.createElement("li");
        newComment.textContent = comment;
        commentList.appendChild(newComment);
    });
}

// ✅ Function to toggle comment section
function toggleComment(index) {
    document.getElementById(`comment-section-${index}`).classList.toggle("hidden");
}

// ✅ Function to send collected comments to Qualtrics
function sendCommentsToQualtrics() {
    let allComments = [];
    posts.forEach((post) => allComments = allComments.concat(post.comments));
    
    let commentsString = allComments.join(" | ");
    console.log("📤 Sending comments to Qualtrics:", commentsString);

    if (commentsString.length > 0) {
        window.parent.postMessage({ comments: commentsString }, "*");
    } else {
        console.warn("⚠️ No comments to send.");
    }
}

// ✅ Ensure comments are sent before page advances
Qualtrics.SurveyEngine.addOnUnload(function () {
    console.log("⚠️ Page is advancing. Ensuring comments are sent...");
    sendCommentsToQualtrics();
});

// ✅ Load the feed when the page loads
document.addEventListener("DOMContentLoaded", renderFeed);
