# InfiniteScroll project
code for retrieval, display, and 'infinite scrolling' of random pics from Unsplash API
**Note**
As a 'demo' Unsplash API project, only 50 requests can be made per hour. 'Infinite scrolling' is thus limited
   by the Unsplash API restrictions.

retrieves pics from Unsplash API (as an array of objects describing each picture)
loading animation for retrieval and display (of initial pic set only)

displays each pic within an anchor tag linking back to its page on Unsplash, with popup title text
helper function to set anchor and image attributes (from selected properties of the picture object)
   to avoid repetitive 'setAttribute()' calls
   - passes attribute names and settings as key/value pairs within an object literal created as an argument at 
       each invocation of the helper function
  
styling and custom font for attractive display of pics
   - media queries change title font size and picture margins for responsive styling at various screen sizes

tracks loading of picture array to set 'ready' boolean
tracks scrolling position in order to appropriately trigger next fetch request for more pictures
   - retrieves next pic set when 1) all pics in existing set are loaded on to page, and 2) user scrolls
      to within 1000px of bottom of existing displayed pictures
