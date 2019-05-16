
var happyImages = [
    "https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDpJySewuhBEreoxLDBbVofhSkK94WW6T6vxc_to7Eo2QLoy4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOCwTKGvzQe8hnMmkVtjUcMZrf1HFhsbAU8DVyG_K4LnKBXQsmw"
];
var sadImages = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016","https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif","https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4082068%2Fimages%2Fn-VIOLENCE-WOMEN-628x314.jpg"];


var excitedimage=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWgHvcIq6Pu7HyRsSpuyGoM3L5SN6URHjrSasbIx8XS7oHyIN"
    
    ];


$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
   
});


function happyMood(){
$("body").css("background-color","blue");
}
function sadMood(){
    $("body").css("background-color","green");
}

function excitedmood(){
    $("body").css("background-color","red");
}

function changeBackgroundColor(color){
}

function changeTextColor(color){
}

function displayImages(images){
  
}
