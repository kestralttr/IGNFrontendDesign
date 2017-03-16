
let startIndex = 0;
let count = 10;
let videos;
let listItem;
let listItemNumber;
let listItemText;
let listItemTime;
let listItemTextPTag1;
let listItemTextPTag2;
let listItemNumberPTag;
let listItemTimePTag;
let time;
let seeMoreLink;

let secondsToTime = function(seconds) {
  let timeMinutes = (Math.floor(seconds / 60)).toString();
  let timeSeconds = (Math.floor(seconds % 60)).toString();
  if(timeSeconds.length === 1) {
    timeSeconds = "0" + timeSeconds;
  }
  return timeMinutes + ":" + timeSeconds;
};

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

      time = secondsToTime(obj.metadata.duration);

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

      listItemTextPTag1 = "<p class='list-item-text-p1'>" + obj.metadata.name + "</p>";
      $(".list-item-text:last").append(listItemTextPTag1);

      listItemTextPTag2 = "<p class='list-item-text-p2'>" + obj.metadata.description + "</p>";
      $(".list-item-text:last").append(listItemTextPTag2);

      listItemTimePTag = `<p>${time}</p>`;
      $(".list-item-time:last").append(listItemTimePTag);
    });
    //See More Videos goes here
    listItem = "<li class='list-item'</li>";
    $("#list").append(listItem);

    listItemText = "<div class='list-item-text'></div>";
    $(".list-item:last").append(listItemText);

    seeMoreLink = "<a class='see-more-link'>See More Videos...</a>";
    $(".list-item-text:last").append(seeMoreLink);
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

    listItemTextPTag1 = `<p>An error occured.</p>`;
    $(".list-item-text:last").append(listItemTextPTag1);
  }
});

$( "li" ).hover(
  function() {
    $( this ).append( $( "<div class='hover-square'></div>" ) );
  }, function() {
    $( this ).find( ".hover-square" ).remove();
  }
);

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
