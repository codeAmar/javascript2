<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>
Utilities
</title>
<style>
div.newcolor{
background:blue;
}
div.newcolor1{
background:cyan;
}
div.newcolor2{
background:maroon;
}
p{
color:red;
}
.divclass{
margin:3px;
width:40px;
height:40px;
position:absolute;
left:200px;
top:400px;
background:green;
display:none;
}
</style>
<script src="https://code.jquery.com/jquery-1.10.2.js">
</script>
</head>
<body>
<button>Start</button>
<button>Stop</button>
<p>Inside of a paragraph <span>Inside of a span</span></p>
<div>Inside of a div</div>
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
<div id="four"></div>
<div id="five"></div>
<label><input type="checkbox" name="male" checked>Male</label>
<label><input type="checkbox" name="age>17">Age is greater than 17</label>
<div class="divclass"></div>
<script>
//CONTAINS
//$("div").html($.contains(document.body,document.body.children[1]));

//EACH
/*
var arr=["one","two","three","four","five"];
var obj={one:1,two:2,three:3,four:4,five:5};
$.each(arr,function(i,val){
$("#"+val).text("Mine is : "+val+".");
return (val!=="three");
});
$.each(obj,function(i,val){
$("#"+i).append(document.createTextNode("- "+val));
});
*/

//EXTEND
/*
var obj={
name:"amar",
gender:"male",
age:"24",
address:{hno:"b12",street:"mall"}
};
var obj2={
name:"Amarjot",
city:"Kapurthala",
address:{street:"locate through google map"}
};
*/
/*
$.extend(obj,obj2);
$("#four").append("first object - "+JSON.stringify(obj));
*/
/*
$.extend(true,obj,obj2);
$("#five").append("second object - "+JSON.stringify(obj));
*/
/*
var newobject=$.extend({},obj,obj2);
$("#five").append("new object- "+JSON.stringify(newobject));
$("#four").append("obj - "+JSON.stringify(obj));
*/

//QUERY.FN.EXTEND
/*
jQuery.fn.extend({
check:function(){
	return this.each(function(){
			this.checked=true;
		});
},
uncheck:function(){
	return this.each(function(){
			this.checked=false;
		});
}
});
$("input:checkbox").eq(1).check();
$("input:checkbox").eq(0).uncheck();
*/

//JQUERY.GREP
/*
var arr=[1,9,3,8,6,1,5,9,4,7,3,8,6,9,1];
$("#three").html(jQuery.grep(arr,(n,i)=>(n>4 && i>2)));
$("#four").html(jQuery.grep(arr,(n,i)=>(n>4 && i>2),true));
*/

//INARRAY
/*
var arr=[1,9,3,8,6,1,5,9,4,7,3,8,6,9,1];
$("#five").html("found 3 at = "+$.inArray(6,arr));
$("#four").html("found 2 at = "+jQuery.inArray(2,arr));
*/

//JQUERY.MAKEARRAY
/*
var arr=$.makeArray($("button"));
arr.reverse();
$("#five").html(arr);
*/

//JQUERY.MAP
/*
var arr=[1,9,3,8,6,1,5,9,4,7,3,8,6,9,1];
$("#five").html($.map(arr,(val,i)=>(val*2+"<br>")));
*/
/*
var elems={
name:"amar",
age:"19"
};
$("#five").html($.map(elems,(val,key)=>(key+" : "+val+"<br>")));
*/

//JQUERY.MERGE
//$("#five").html($.merge([1,2,3,4,5],[6,7,8,9]));

//JQUERY.NOW
//$("#five").html($.now);

//PARSEHTML
/*
var str="Text before paragraph, <p>here is the</p><strong> bold text</strong> which is followed by <em>italics words</em> halleluah.      "
$.trim(str);
var htmlString=$.parseHTML(str);
$("#four").append(htmlString);
var htmlelems=[];
$.each(htmlString,function(i,val){
htmlelems[i]="<li>"+val.nodeName+"</li>";
});
console.log(htmlelems);
$("#five").append("<h3>NodeNames</h3>");
$("<ol></ol>").append(htmlelems.join(""))
	.appendTo("#five");
*/

//PARSEJSON
/*
var htmltxt=$.parseJSON('{"test":"successfull"}');
console.dir(htmltxt);
$("#five").append(htmltxt.test==="successfull");
*/

//PARSEXML
/*
var xml = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>";
xmldoc=$.parseXML(xml);
console.log(xmldoc);
var xmlobj=$(xmldoc);
console.dir(xmlobj);
$("#five").append(xmlobj.find("title").text("new title"));
*/

//$.PROXY
/*
var ob={
name:"Amar",
func:function(event){
	var elem=event.target;
	$(elem).css("background-color","green");
	$("#five").append("Hello "+this.name +" !")		;
	$("button:first").off("click",this.func);

	}
};
var ob2={
name:"Rajeev",
func:function(event){
	var elem1=event.target;
	$(elem1).css("background-color","red");
	$("#five").append("Hello ! is this "+this.name+" ?");
}
};

$("button:first")
	.on("click",$.proxy(ob.func,ob))
	.on("click",$.proxy(ob2.func,ob2))
	.on("click",$.proxy(ob.func,ob2))
	.on("click",$.proxy(ob2.func,ob))
	.on("click",$.proxy(ob,"func"))
	.on("click",$.proxy(ob2,"func"));
*/

/*
var ob3={
name:"Suresh",
func:function(one,two,event){
	var elem=event.target;
	$(elem).css("background-color","maroon");
	$("#five")
	.append("Hello "+this.name+"<br>")
	.append("Hi "+one.name+"<br>")
	.append("Hello Again"+two.name+"<br>")
	.append("event.type = "+event.type+"<br>")
	.append("event.target = "+elem.type);
}
};
var ob4={name:"Mahesh"};
var ob5={name:"Tareek"};
$("button:last")
.on("click",$.proxy(ob3.func,ob3,ob4,ob5));
*/

//$.QUEUE
/*
$("button:first").click(function(){
$(".divclass")
	.show()
	.animate({left:"+=200"},2000)
	.slideToggle(1000)
	.slideToggle("slow")
	.queue(function(){
	$(this).css("background-color","pink");
	$.dequeue(this);
		})
	.animate({left:"-=200"},2000);
$.queue($(".divclass")[0],"fx",function(){
	$(this).css("border","3px solid green");
	$.dequeue(this);
});
$(".divclass")
	.slideToggle(2000)
	.slideToggle("fast")
	.slideUp("slow");

});
$("button:last").click(function(){
$.queue($(".divclass")[0],"fx",[]);
$(".divclass").stop();
});
*/







</script>
</body>
</html>
