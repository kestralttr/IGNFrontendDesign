# IGN Frontend Design

The challenge issued here was to create a website that emulated the example found [here](http://www.ign.com/code-foo/2017/frontend-design.gif).

My finished build can be found [here](https://kestralttr.github.io/IGNFrontendDesign/).

While I matched the design as closely as possible, I did change and add some functionality/styling, which I have listed and explained my reasoning for below:

## Major Changes

### List Items Do Not Completely Collapse

When a list item is clicked in the example, all text is removed and the only element visible to the user is the image.  I decided to rework this design for two reasons.  

First, while the example had the game referenced by the selected list item shown in text over the image, I could not find a JSON property that corresponded to the game.  Without text over the image to show/remind the user what the image was referring to, I found the absence of detail confusing.

Second, I felt that even if the user knew exactly which game the image was referring to, it's a little strange to click on an item and have the information completely disappear.  Clicking on an item generally signifies that a user wants to learn more about it, and removing the existing information does not signify that.

So in my website, when a list item is clicked on, the text information stays where it is, and the image is appended below.  Furthermore, the selected list item info is permanently highlighted in a light grey (identical to the hover styling) so that the user knows exactly what information the image pertains to.  This allows the user to view all available information about the item in question, while knowing exactly what elements on the screen reference the selected item.

### Expand & Collapse Functionality

The example did not show the exact functionality of how list items would collapse, or how many would be permitted to stay expanded at any given time.  So I decided to design my website so that any list item could be expanded and then collapsed, and that only one list item could be expanded at any time.  Clicking on a collapsed list item while another one is expanded results in the already expanded list item collapsing.

I found that this design reduces visual clutter on my webpage.  Being able to expand multiple list items at once quickly made the list extend past the bottom of even a large browser window, and there did not seem to be a purpose for viewing multiple images at once.

Also, any expanded list item can be collapsed by clicking on it in any location, other than the image present in the expanded state.  I felt this was the most natural way to allow users to collapse a list item without having to click on another.

### Video & Article Toggle

Again, the provided example did not show exactly how the website should swap between videos and articles, so I decided to keep the styling as familiar as possible to prevent confusion involved in being presented with a different UI.

The media selector at the top of the page imitates the example, and clicking either "Videos" or "Articles" will update the styling of the media selector to reflect which data is currently being viewed.  To that point, clicking either half of the media selector will send an API request that will populate the site with that respective data.

### Thumbnail Size Based on Window Width

Although this challenge asked for a responsive website, it did not detail exactly how to use the various sizes of thumbnails available through the API.

So in order to make the best use of the multiple thumbnails, my website checks the width of the window when a list item is selected and requests the corresponding image size.

## Minor Changes

### Left Hover Icon

I noticed that the red box that appears on the left side of the list items upon hovering over them did not match the red of the media selector, so I made sure to match them in my website to strengthen the theme.

In addition, I allowed the hover icon to appear next to an expanded list icon if the user is still hovering over it.  This way, the hover icon and the grey background color change work together to ensure the user always knows what has been selected and what is being hovered over.

### Pointer Cursor Over Interactive Elements

I didn't see this in the example, but I believe it's best practice to display a pointer whenever the cursor is hovering over anything that can be interacted with.  I made sure to do this in my site.

### Article Image Link Destination

I could not find a URL property in the JSON for articles like I could with the videos.  So clicking on any article image will take the user to the main IGN articles page.  All the video images open links to that video's URL when clicked.

## Final Thoughts

I enjoyed discovering how to emulate the provided example, and also what improvements might be made to make it more user friendly.

With more information about exactly how this page would be utilized within IGN's website, I am confident I could innovate additional features.
