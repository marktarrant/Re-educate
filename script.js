//function that updates CSS colours
function updateCssColours() {
    let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    
  $("body").css("background", hue);
  $(".answer-button").css("background", hue);      
  $(".answer-button").css("border-color", hue);
  $(".next-question-button").css("background", hue);      
  $(".next-question-button").css("border-color", hue);
  }
  
  //function to handle the initial show answer click event
  $('body').on('click', '.answer-button', function(){  
  
  $(".question-box").after('<div class="jumbotron answer-box mx-auto"><h2 class="question blockquote text-center">Answer Example</h2></div>')
    
  $(".answer-button").replaceWith('<button type="button" class="btn btn-md btn-primary next-question-button">Next Question</button>')
    
  updateCssColours();
     
  });
  
  //function to handle the next question click event
  $('body').on('click', '.next-question-button', function() {
    $(".next-question-button").replaceWith('<button type="button" class="btn btn-md btn-primary answer-button">Show Answer</button>');
    
  $(".answer-box").remove();
    
  updateCssColours();
  
  });
  
  //have to use 'body'.on as the event handler as you can replace body with any parent element that exists on dom. If you dont do this it doesnt recognise that the element you dynamically create exists. 