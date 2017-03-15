
$.ajax({
  type: "GET",
  url: "https://ign-apis.herokuapp.com/videos",
  crossDomain: true,
  dataType: 'jsonp',
  success: function(result) {
    let videos = result;
    console.log(videos);
  },
  error: function() {
    console.log("didn't work");
  }
});

let sampleObj = {
  duration: "1:47",
  headline: "This is a sample headline",
  subheadline: "And this is also a sample!"
};

for (var i = 0; i < 9; i++) {
  let listItem = "<li class='list-item'</li>";
  $("#list").append(listItem);

  let listItemNumber = "<div class='list-item-number'></div>";
  $(".list-item:last").append(listItemNumber);

  let listItemText = "<div class='list-item-text'></div>'";
  $(".list-item:last").append(listItemText);

  let listItemTime = "<div class='list-item-time'></div>";
  $(".list-item:last").append(listItemTime);

  let listItemNumberPTag = `<p>${'0'+(i+1)}</p>`;
  $(".list-item-number:last").append(listItemNumberPTag);

  let listItemTextPTag = `<p>${sampleObj.headline}<br>${sampleObj.subheadline}</p>`;
  $(".list-item-text:last").append(listItemTextPTag);

  let listItemTimePTag = `<p>${sampleObj.duration}</p>`;
  $(".list-item-time:last").append(listItemTimePTag);
}
