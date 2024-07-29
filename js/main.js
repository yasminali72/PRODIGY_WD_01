$(document).scroll(function () { 
   let scrollTop= $(this).scrollTop()
//    console.log(scrollTop);

let homeHeight= $('#home').height();
console.log(homeHeight);

if(scrollTop>homeHeight){
    $('nav').css('background-color','#0078FF')
}
else{
    $('nav').css('background-color','rgba(0, 0, 0, 1)')
    


}
   

});
$('.nav-link').click(function(){

$('.nav-link').removeClass('active');
$(this).addClass('active');
   let secId= $(this).attr('href')
   console.log(secId);
   let secTop= $(secId).offset().top
   console.log(secTop);

   $('body ,html').animate({
    scrollTop:secTop-70
   },1000)

   

    
})
let userName , email ,subject ,message
$('#Name , #Email ,#Subject ,#Message ').keyup(function () { 
     userName=$('#Name').val()
     email=$('#Email').val()
     subject=$('#Subject').val()
     message=$('#Message').val()
    console.log(userName,email,message,subject);
});

$('#sendBtn').click(function(){
   
    if(userName&&email&&subject&&message){
        $('#Name ,#Email ,#Subject  ,#Message').val('')
    }
    
})