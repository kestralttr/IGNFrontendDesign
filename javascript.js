
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
let smallImageContainer;
let smallImage;
let mediumImageContainer;
let mediumImage;
let largeImageContainer;
let largeImage;

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
  $(".list-item").click(function() {
    if ( $(this).hasClass("expanded")) {
      console.log("contract activated");
      $(this).removeClass("expanded");
      //show text elements
      $(this).find('.list-item-number').css("display","block");
      $(this).find('.list-item-text').css("display","block");
      $(this).find('.list-item-time').css("display","block");
      //hide all thumbnails
      $(this).find('.small-image-container').css("display","none");
      $(this).find('.medium-image-container').css("display","none");
      $(this).find('.large-image-container').css("display","none");
      //modify elements
      $(this).find('.hover-square').css("height","40px");
    } else {
      console.log("expand activated");

      $(".expanded").find('.list-item-number').css("display","block");
      $(".expanded").find('.list-item-text').css("display","block");
      $(".expanded").find('.list-item-time').css("display","block");
      //hide all thumbnails
      $(".expanded").find('.small-image-container').css("display","none");
      $(".expanded").find('.medium-image-container').css("display","none");
      $(".expanded").find('.large-image-container').css("display","none");
      //modify elements
      $(".expanded").find('.hover-square').css("height","40px");
      $(".expanded").removeClass("expanded");

      $(this).addClass("expanded");
      //hide text elements
      $(this).find('.list-item-number').css("display","none");
      $(this).find('.list-item-text').css("display","none");
      $(this).find('.list-item-time').css("display","none");
      //show thumbnail
      if(window.innerWidth < 420) {
        $(this).find('.small-image-container').css("display","block");
        //modify elements
        $(this).find('.hover-square').css("height","162px");
      } else if(window.innerWidth < 630) {
        $(this).find('.medium-image-container').css("display","block");
        //modify elements
        $(this).find('.hover-square').css("height","252px");
      } else {
        $(this).find('.large-image-container').css("display","block");
        //modify elements
        $(this).find('.hover-square').css("height","342px");
      }
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

      smallImageContainer = `<a href='${obj.metadata.url}' style='display: none;' target='_blank' class='small-image-container'></a>`;
      $(".list-item:last").append(smallImageContainer);

      smallImage = `<div class='small-image' style="background: url('${obj.thumbnails[0].url}') no-repeat center;"></div>`;
      $(".small-image-container:last").append(smallImage);

      mediumImageContainer = `<a href='${obj.metadata.url}' style='display: none;' target='_blank' class='medium-image-container'></a>`;
      $(".list-item:last").append(mediumImageContainer);

      mediumImage = `<div class='medium-image' style="background: url('${obj.thumbnails[1].url}') no-repeat center;"></div>`;
      $(".medium-image-container:last").append(mediumImage);

      largeImageContainer = `<a href='${obj.metadata.url}' style='display: none;' target='_blank' class='large-image-container'></a>`;
      $(".list-item:last").append(largeImageContainer);

      largeImage = `<div class='large-image' style="background: url('${obj.thumbnails[2].url}') no-repeat center;"></div>`;
      $(".large-image-container:last").append(largeImage);

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
    listItem = "<li class='list-item-see-more'</li>";
    $("#list").append(listItem);

    listItemText = "<div  class='list-item-text'></div>";
    $(".list-item-see-more").append(listItemText);

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
