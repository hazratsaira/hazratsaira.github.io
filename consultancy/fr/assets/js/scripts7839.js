// Contact action
$('#contact_form').on('submit', function(event) {	
	event.preventDefault();

	$('.form_success').hide();
	$('.form_error').hide();
	
	var isSubmit	=	1;
	
	var contact_name	=	$("#contact_name").val();
	var contact_email	=	$("#contact_email").val();
	var contact_phone	=	$("#contact_phone").val();
	var contact_message	=	$("#contact_message").val();
	var captcha_code	=	$("#captcha_code").val();
	
	if (contact_name == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Name.");
	}
	else
	if (contact_email == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Email ID.");
	}
	else
	if (contact_phone == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Phone Number.");
	}
	else
	if (contact_message == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Message.");
	}
	else
	if (captcha_code == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Please enter CAPTCHA Code.");
	}
	
	if (isSubmit == 1) { // OK
	
		$('.form_success').hide();
		$('.form_error').hide();
		var form_data	=	new FormData(this);
		$.ajax({
			url: "mi-includes/contact_action.php",
			type: "POST",
			data : form_data,
			contentType: false,
			cache: false,
			processData:false,
			success: function(data) {
				if (data == 1) { // Done
					$('.hide_submit').hide();
					$('.form_error').hide();
					$('.form_success').show();
					$('#contact_form').trigger("reset");
				} else {
					$('.form_error').show();
					$('.form_error').html("The CAPTCHA you entered is incorrect");
				}
			}
		});
	
	}

}); // End form on submit

// Career action
$('#career_submit').on('click', function(event) {
	
	event.preventDefault();

	$('.form_error').hide();
	
	var isSubmit	=	1;
	
	var career_name		=	$("#career_name").val();
	var career_email	=	$("#career_email").val();
	var career_phone	=	$("#career_phone").val();
	var career_resume	=	$("#career_resume").val();
	var career_subject	=	$("#career_subject").val();
	var career_message	=	$("#career_message").val();
	
	if (career_name == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Name.");
	}
	else
	if (career_email == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Email ID.");
	}
	else
	if (career_phone == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Phone Number.");
	}
	else
	if (career_resume == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Upload Resume in PDF Format.");
	}
	else
	if (career_subject == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Subject.");
	}
	else
	if (career_message == "") {
		isSubmit	=	0;
		$('.form_error').show();
		$('.form_error').html("Enter your Message.");
	}
	
	if (isSubmit == 1) { // OK
	
		$('#career_form').submit();
	
	}

}); // End form on submit