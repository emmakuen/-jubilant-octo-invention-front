const commentsContainer = document.getElementById("comments-container");
let modal;

displayUpvotes();

commentsContainer.addEventListener("click", async (e) => {
  if (e.target?.tagName !== "BUTTON") return;

  const button = e.target;

  if (button.classList.contains("upvote-btn")) {
    await toggleUpvote(button);
  } else if (button.classList.contains("reply-btn")) {
    const parentId = button.dataset.id;
    modal = document.getElementById(`modal-${parentId}`);
    if (modal.open) return;
    await openModal(modal, parentId);
  } else if (button.classList.contains("cancel-btn")) {
    modal.close();
  }
});

async function toggleUpvote(button) {
  button.disabled = true;
  const userId = getUserId();
  const rawResponse = await fetch("/like-comment", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      commentId: parseInt(button.dataset.commentid),
      userId,
    }),
  });
  if (!rawResponse.ok) {
    return;
  }

  updateUpvote(button);
  button.disabled = false;
}

function getUserId() {
  const userId = JSON.parse(localStorage.getItem("comment-ui-profile-id"));
  return userId;
}

async function getUserInfo() {
  const userId = getUserId();
  const rawResponse = await fetch("/user-data", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: userId }),
  });
  if (!rawResponse.ok) {
    return null;
  }
  const user = await rawResponse.json();
  return user;
}

async function openModal(modal, parentId) {
  if (modal) {
    const user = await getUserInfo();
    const img = document.getElementById(`img-${parentId}`);
    const authorId = document.getElementById(`id-input-${parentId}`);
    if (user) {
      img.src = user.profilePicUrl;
      img.alt = `Profile picture of ${user.name}`;
      authorId.value = user.id;
    }
    modal.show();
  }
}

function displayUpvotes() {
  const upvoteButtons = document.querySelectorAll(".upvote-btn");
  upvoteButtons.forEach((button) => {
    const likeCount = parseInt(button.dataset.likecount);
    displayUpvote(button, likeCount);
  });
}

function displayUpvote(button, likeCount) {
  if (likeCount === 0) {
    button.innerHTML = `&#9650; Upvote`;
  } else if (likeCount === 1) {
    button.innerHTML = `&#9650; 1 Upvote`;
  } else {
    button.innerHTML = `&#9650; ${likeCount} Upvotes`;
  }
}

function updateUpvote(button) {
  let likeCount = parseInt(button.dataset.likecount);
  if (button.classList.contains("liked")) {
    likeCount = Math.max(0, likeCount - 1);
  } else {
    likeCount++;
  }

  button.dataset.likecount = likeCount;

  displayUpvote(button, likeCount);
  button.classList.toggle("liked");
}
