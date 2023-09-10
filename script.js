function saveComment() {
  var commentInput = document.getElementById("comment");
  var comment = commentInput.value;
  var time = Date.now();
  var newComment = {
    comment: comment,
    time: time
  };
  var comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(newComment);
  localStorage.setItem("comments", JSON.stringify(comments));
}
function loadComments() {
  var comments = JSON.parse(localStorage.getItem("comments")) || [];
  var commentList = document.getElementById("commentList1");
  commentList.innerHTML = "";
  comments.forEach(function (comment) {
    var timeString = new Date(comment.time).toLocaleString();
    var commentItem = document.createElement("li");
    commentItem.innerHTML = "<div style='border: 4px solid white; border-radius: 10px; margin: 20px; padding: 10px; word-break: break-word;'>" + comment.comment + "<br><span style='font-size: 10px; color: #999;'>" + timeString + "</span>" + "</div>";
    commentList.appendChild(commentItem);
  });
}
function showList() {
  var list = document.getElementById("commentList", "commentList1");
  list.classList.toggle("com__item");
}
document.getElementById("btn").addEventListener("click", mes);
function mes(){
  alert("Отзыв добавлен")
}