
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
let hoverSquare;
let imageContainer;
let itemImage;

let hoverFunction = function() {
  $( "li" ).hover(
    function() {
      $(this).find(".hover-square").css("background-color","rgb(187,19,19)");
      // console.log("hovering!");
    }, function() {
      // console.log("no longer hovering");
      $(this).find(".hover-square").css("background-color","Transparent");
    }
  );
};

let clickFunction = function() {
  $("li").click(function() {
    if ( $(this).hasClass("expanded")) {
      console.log("contract activated");
      $(this).removeClass("expanded");
      $(this).find('.list-item-number').css("display","block");
      $(this).find('.list-item-text').css("display","block");
      $(this).find('.list-item-time').css("display","block");

    } else {
      console.log("expand activated");
      $(this).addClass("expanded");
      $(this).find('.list-item-number').css("display","none");
      $(this).find('.list-item-text').css("display","none");
      $(this).find('.list-item-time').css("display","none");

    }
  });
};

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

      time = secondsToTime(obj.metadata.duration);

      listItem = "<li class='list-item'</li>";
      $("#list").append(listItem);

      hoverSquare = "<div class='hover-square'></div>";
      $(".list-item:last").append(hoverSquare);

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

    seeMoreLink = "<a target='_blank' href='http://www.ign.com/videos' class='see-more-link'>See More Videos...</a>";
    $(".list-item-text:last").append(seeMoreLink);

    hoverFunction();
    clickFunction();
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

    listItemTextPTag1 = "<p class='list-item-text-p1'>An error occured.</p>";
    $(".list-item-text:last").append(listItemTextPTag1);
  }
});
