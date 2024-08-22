// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     submitFormAndFeedback();
//   });

function Submit_Form
    (message) {
        if (message==='OK'){
            swal("Email Sent Successfully !", "You clicked the button!", "success");
        }

        else{
            swal("Opps email not sent. Please try again !", "You clicked the button!", "error");  
        }
}

