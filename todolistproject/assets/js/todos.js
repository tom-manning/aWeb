// Check off specific to-dos by click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on trashcan to delete a to-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//When "enter" is pressed check value of input box 
$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			if(this.value === ""){
				return false
			} else {
			var todoText = $(this).val();
			$(this).val("");
			//create a new li and add to ul (at the top of the to-do list)
			$("ul").prepend("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>")
		}
	  }
	});

//Show "Add New Todo" when clicked and toggle up/down arrow

$(".fa-arrow-up").click(function(){
	$("input[type='text']").fadeToggle();
	$(this).toggleClass('fa-arrow-down fa-arrow-up');
});



