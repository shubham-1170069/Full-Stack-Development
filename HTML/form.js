//alert("Hi I am alert");
//var form=document.getElementById("form");
//var form = document.getElementById("Form");
//alert("Click OK to continue. ");
console.log("press submit to check ");
function handleSubmit()
{
	//console.log("Hi");
	
	var form = document.getElementById("Form");
	console.log("form "+form);
	//console.log("va="+form.childern[0].value);
	var u = form.childern[0].value;
	//console.log("username =" +typeOf(u));
	if (form.childern[0].length==0 /*&& isNaN(typeOf(u))==true*/)
	{	
		alert("Enter Correct username");
	//event.preventDefault()
	}
	else
	{	
		console.log("username = " +u);
	}
	
	return false;
}

// onclick, onmouseover, onmovement, onfocus, onchanges