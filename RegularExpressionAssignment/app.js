let books=[
	{author:"Thomas Pynchon", title:"Bleeding Edge"},
	{author:"Haruki Murakami", title:"1Q84"},
	{author:"John D Macdonald", title:"NightMare in PinK"},
	{author:"John Henry", title:"NightMare in PinK"},
	{author:"Nicholas Zakas", title:"Understanding ECMAScript6"}
]

function authSearch(){
	let aName=document.getElementById('authorSearch').value;
	let regx=new RegExp(aName,"i");
	let name=books.filter(function(x){ 
		var expression=x.author;
		 return expression.match(regx);
		});
	console.log(name);

	try{

		name.forEach((x)=>{
			let listItem=document.createElement('li');
			let textNode=document.createTextNode(x.author);
			listItem.appendChild(textNode);
		 	document.getElementById('result').appendChild(listItem);});
	}
	catch(err){
		document.getElementById('result').innerHTML='sorry no books by '+aName;
	}
}

function addBook(){
	let authorName={author:document.getElementById('addBook').value,
	title:document.getElementById('addBookTitle').value};
	console.log(authorName);
	books.push(authorName);


}
function showAllBooks(){
	let listItem=document.createElement('li');
	let textNode=document.createTextNode('a book');
	listItem.appendChild(textNode);
	document.getElementById('allTheBooks').appendChild(listItem);
	(()=>console.log(books))();
}
function allBooks(){
	books.forEach((book)=>{
	let listItem=document.createElement('li');
	let textNode=document.createTextNode(book.author);
	listItem.appendChild(textNode);
	document.getElementById('booksList').appendChild(listItem);
	});
}