// get values from the url params
const urlParams = new URLSearchParams(window.location.search);

// get the values from the url params
const itemName = urlParams.get('itemName');
const itemLocation = urlParams.get('itemLocation');
const itemPrice = urlParams.get('itemPrice');

// display the item details
const itemDetails = document.getElementById('itemDetails');
    itemDetails.textContent = 
    "What is the Item: "+ itemName + "\n" +
    "Where is the Item: " + itemLocation + "\n" +
    "What is the Price: " + itemPrice
   ;
    

// can now use these variables for NFT
    console.log('Item Name:', itemName);
    console.log('Location:', itemLocation);
    console.log('Price:', itemPrice); 



    
 