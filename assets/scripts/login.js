$(document).ready(function(){

 $('.form-signin').submit(function(){
        
        $(this).find("label[for='username']").html('Username');
        $(this).find("label[for='password']").html('Password');
        ////
       
        var username = $(this).find('input#username').val();
        var password = $(this).find('input#password').val();
        
        if(username == '') {
            $(this).find("label[for='username']").append("<span style='display:none' class='red'> - Please enter a valid username.</span>");
            $(this).find("label[for='username'] span").fadeIn('medium');
            return false;
        }
        
        if(password == '') {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - Please enter a valid password.</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
    });



})