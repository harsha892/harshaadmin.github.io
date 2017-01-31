w3IncludeHTML();
// Menu Toggle Script 
$(document).ready(function() {
    $('#example').DataTable();
    $("#menu-toggle").click(function(e) {
        console.log("clicked");
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $(function() {
        $("#datepicker").datepicker();
    });
    $("#registrationForms .getForms button").click(function() {
        $('.singupForm').toggleClass('activeFrom');
        $('.singinForm').toggleClass('inactiveFrom');
        $('.getSinginForm').toggleClass('activeFrom');
        $('.getSingupForm').toggleClass('inactiveFrom');
    });
    $(".getForgotPassword,.getSinginFormLink").click(function() {
        $('.singinForm').toggleClass('inactiveFrom');
        $('.forgotPasswordForm').toggleClass('activeFrom');

    })
    $(".getEditProfile").click(function(){
        $('.editProfile').toggleClass('inactiveFrom');

    });
});
