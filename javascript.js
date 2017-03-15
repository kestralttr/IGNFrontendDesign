
// $.ajax({
//   type: "GET",
//   url: "https://ign-apis.herokuapp.com/articles",
//   crossDomain: true,
//   dataType: 'jsonp',
//   success: function(result) {
//     let headline = result.data[0].metadata.headline;
//     $(document.body).append(headline);
//   },
//   error: function() {
//     console.log("didn't work");
//   }
// });

//list-item (<li>)
  //list-item-number (<div>)
    //(<p>)
  //list-item-text (<div>)
    //(<p>)
  //list-item-time (<div>)
    //(<p>)

  let listItem = "<li class='list-item'</li>";
  $("#list").append(listItem);

  let listItemNumber = "<div class='list-item-number'></div>";
  $(".list-item:last").append(listItemNumber);

  let listItemText = "<div class='list-item-text'></div>'";
  $(".list-item:last").append(listItemText);

  let listItemTime = "<div class='list-item-time'></div>'";
  $(".list-item:last").append(listItemTime);

  let listItemNumberPTag = "<p>02</p>";
  $(".list-item-number:last").append(listItemNumberPTag);

  let listItemTextPTag = "<p>This text is from jQuery!<br>And so is this!</p>";
  $(".list-item-text:last").append(listItemTextPTag);

  let listItemTimePTag = "<p>2:39</p>";
  $(".list-item-time:last").append(listItemTimePTag);
