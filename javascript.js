
let startIndex = 0;
let count = 10;
let videos;
let listItem;
let listItemNumber;
let listItemText;
let listItemTime;
let listItemTextPTag;
let listItemNumberPTag;
let listItemTimePTag;

$.ajax({
  type: "GET",
  url: "https://ign-apis.herokuapp.com/videos" + `?startIndex=${startIndex}&count=${count}`,
  crossDomain: true,
  dataType: 'jsonp',
  success: function(result) {
    videos = result;
    console.log(videos);
    videos.data.forEach(function(obj,idx) {

      console.log("data elements reviewed");
      listItem = "<li class='list-item'</li>";
      $("#list").append(listItem);

      listItemNumber = "<div class='list-item-number'></div>";
      $(".list-item:last").append(listItemNumber);

      listItemText = "<div class='list-item-text'></div>";
      $(".list-item:last").append(listItemText);

      listItemTime = "<div class='list-item-time'></div>";
      $(".list-item:last").append(listItemTime);

      if(idx+1 < 10) {
        listItemNumberPTag = "<p>" + '0' + (idx+1) + "</p>";
      } else {
        listItemNumberPTag = "<p>" + (idx+1) + "</p>";
      }
      $(".list-item-number:last").append(listItemNumberPTag);

      listItemTextPTag = `<p>${obj.metadata.name}</p>`;
      $(".list-item-text:last").append(listItemTextPTag);

      listItemTimePTag = `<p>${obj.metadata.duration}</p>`;
      $(".list-item-time:last").append(listItemTimePTag);
    });

  },
  error: function() {
    listItem = "<li class='list-item'</li>";
    $("#list").append(listItem);

    listItemNumber = "<div class='list-item-number'></div>";
    $(".list-item:last").append(listItemNumber);

    listItemText = "<div class='list-item-text'></div>";
    $(".list-item:last").append(listItemText);

    listItemTime = "<div class='list-item-time'></div>";
    $(".list-item:last").append(listItemTime);

    listItemTextPTag = `<p>An error occured.</p>`;
    $(".list-item-text:last").append(listItemTextPTag);
  }
});

let sampleObj = {
  duration: "1:47",
  headline: "This is a sample headline",
  subheadline: "And this is also a sample!"
};




  // let listItem = "<li class='list-item'</li>";
  // $("#list").append(listItem);
  //
  // let listItemNumber = "<div class='list-item-number'></div>";
  // $(".list-item:last").append(listItemNumber);
  //
  // let listItemText = "<div class='list-item-text'></div>'";
  // $(".list-item:last").append(listItemText);
  //
  // let listItemTime = "<div class='list-item-time'></div>";
  // $(".list-item:last").append(listItemTime);
  //
  // let listItemNumberPTag = `<p>${'0'+(i+1)}</p>`;
  // $(".list-item-number:last").append(listItemNumberPTag);
  //
  // let listItemTextPTag = `<p>${sampleObj.headline}<br>${sampleObj.subheadline}</p>`;
  // $(".list-item-text:last").append(listItemTextPTag);
  //
  // let listItemTimePTag = `<p>${sampleObj.duration}</p>`;
  // $(".list-item-time:last").append(listItemTimePTag);
