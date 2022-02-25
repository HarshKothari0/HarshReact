var number={};

Object.defineProperty(number,"first",{
	get:function(){
	return value;
	},
	set:function(inputval){
		debugger;
	document.getElementById("userInput").value=inputval;
	value=inputval;
	}
});

setInterval(() => {
    number.first=Math.floor(Math.Random()*100);
}, 3000);

function changevalue(event){
	number.first=event.target.value;
	
}