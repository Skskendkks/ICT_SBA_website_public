function changeImage() {
  const id = new URLSearchParams(window.location.search).get("id");

  var currentImageUrl = document.getElementById('rest-image').src;

  if (currentImageUrl.endsWith("_01.jpg")) {
    document.getElementById('rest-image').src = "img/rests/" + id.toString() + "_02.jpg";
  } else {
    document.getElementById('rest-image').src = "img/rests/" + id.toString() + "_01.jpg";
  }
}