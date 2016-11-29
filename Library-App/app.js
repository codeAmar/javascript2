// The book array which represent various books as an objects
// in relevance to its index

let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 0}
]



// The user array ,, which has all the registered user of the library
// with their details as keys & values in object

let users=[
{name:'Amarjot', lib_ID:'101', books_Issued:'1', issued_Date:'', return_Date:'' , late_Fine:''},
{name:'Artur', lib_ID:'102', books_Issued:'1', issued_Date:'', return_Date:'' , late_Fine:''},
{name:'Alexander', lib_ID:'103', books_Issued:'1', issued_Date:'', return_Date:'' , late_Fine:''},
{name:'Daniel', lib_ID:'104', books_Issued:'1', issued_Date:'', return_Date:'' , late_Fine:''},
{name:'Roberto', lib_ID:'105', books_Issued:'1', issued_Date:'', return_Date:'' , late_Fine:''}
]




// THIS FUNCTION SEARCHES AUTHOR WITH ITS AUTHORNAME AND 
// DISPLAYS THE RESULT

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author.indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}
// event listeners
document.getElementById('autSearch').addEventListener('click', authSearch)

function hideAllBooks (id) {
  var childtodelete=document.getElementById(id);
  while(childtodelete.firstChild){
    childtodelete.removeChild(childtodelete.firstChild);
  }
}






// RESERVE TABLE FUNCTIONALITY
//this table shows whether a book can be reserved by 
// user on not- it depends upon the number of similar books

function bookDetailFunc(){

    let booktable=document.getElementById('bookdetailtable');
    hideAllBooks('bookdetailtable');
    books.forEach((x)=>{
      let authorCol=document.createElement('td');
      let titleCol=document.createElement('td');
      let genreCol=document.createElement('td');
      let copiesCol=document.createElement('td');
      let reserveCol=document.createElement('INPUT')

      let authorColText=document.createTextNode(x.author);
      let titleColText=document.createTextNode(x.title);
      let genreColText=document.createTextNode(x.genre);
      let copiesColText=document.createTextNode(x.copies);

      reserveCol.setAttribute('value','Reserve');
      reserveCol.setAttribute('type','button');
      reserveCol.setAttribute('class','reserveclass');


      authorCol.appendChild(authorColText);
      titleCol.appendChild(titleColText);
      genreCol.appendChild(genreColText);
      copiesCol.appendChild(copiesColText);

      let bookRow=document.createElement('tr');
      bookRow.appendChild(authorCol);
      bookRow.appendChild(titleCol);
      bookRow.appendChild(genreCol);
      bookRow.appendChild(copiesCol);
      bookRow.appendChild(reserveCol);

      document.getElementById('bookdetailtable').appendChild(bookRow);
      // console.log(bookRow);
        });
  
}

bookDetailFunc();





// USER DETAIL TABLE FUNCTIONALITY
// this table shows all the user account details and activities

function userInformation(){

  // hideAllUsers('userdetailtable');

    let usertable=document.getElementById('userdetailtable');
    users.forEach((x)=>{
      let nameCol=document.createElement('td');
      let idCol=document.createElement('td');
      let issuedCol=document.createElement('td');
      let issuedateCol=document.createElement('td');
      let returndateCol=document.createElement('td')
      let fineCol=document.createElement('td');


      let nameColText=document.createTextNode(x.name);
      let idColText=document.createTextNode(x.lib_ID);
      let issuedColText=document.createTextNode(x.books_Issued);
      let issuedateColText=document.createTextNode(x.issued_Date);
      let returndateColText=document.createTextNode(x.return_Date);
      let fineColText=document.createTextNode(x.late_Fine);


      nameCol.appendChild(nameColText);
      idCol.appendChild(idColText);
      issuedCol.appendChild(issuedColText);
      issuedateCol.appendChild(issuedateColText);
      returndateCol.appendChild(returndateColText);
      fineCol.appendChild(fineColText);


      let userRow=document.createElement('tr');
      userRow.appendChild(nameCol);
      userRow.appendChild(idCol);
      userRow.appendChild(issuedCol);
      userRow.appendChild(issuedateCol);
      userRow.appendChild(returndateCol);
      userRow.appendChild(fineCol);

      document.getElementById('userdetailtable').appendChild(userRow);
      // console.log(userRow);
        });
  
}

userInformation();








// FUNCTION TO REMOVE ALL THE CONTENT BELOW AN HTML ELEMENT
// IN THE DOM

function hideAllUsers(previousUsers){

  document.getElementById(previousUsers).innerHTML='';
}







// CREATE A NEW USER///////////////////
// this function create a new user with Lib_ID(unique)
// and name
// Only librarian will have this kind of functionality


document.getElementById('usersubmitbutton').addEventListener('click',function(){

  let usernamedetail=document.getElementById('inputusername').value;
  let libiddetail=document.getElementById('libId').value;
  users.push({
    name:usernamedetail,
    lib_ID:libiddetail,
    books_Issued:'',
    issued_Date:'',
    return_Date:''
  });
  hideAllUsers('userdetailtable');
  userInformation();
})


document.getElementById('userinfo').addEventListener('click',function(){
  hideAllUsers('userdetailtable');
  userInformation();

}
  );







// USER  BOOK DETAIL CONSOLE///////////////////////////////
// this table shows the various operations that can be performed
// by user which will be shown in user table 



var count=0;

function userBookDetailFunc(){

    let booktable=document.getElementById('userbookdetailtable');
    books.forEach((x)=>{
      count++;
      let authorCol=document.createElement('td');
      let titleCol=document.createElement('td');
      let genreCol=document.createElement('td');
      let copiesCol=document.createElement('td');
      let tdreturnCol=document.createElement('td');
      let tdreserveCol=document.createElement('td');
      let reserveCol=document.createElement('INPUT');
      let returnCol=document.createElement('INPUT');
      let fineCol=document.createElement('td');




      let authorColText=document.createTextNode(x.author);
      let titleColText=document.createTextNode(x.title);
      let genreColText=document.createTextNode(x.genre);
      let copiesColText=document.createTextNode(x.copies);
      let fineColText=document.createTextNode(x.late_Fine);


      reserveCol.setAttribute('value','Book');
      reserveCol.setAttribute('type','button');
      reserveCol.setAttribute('class','issueThisBook');

      returnCol.setAttribute('value','Return');
      returnCol.setAttribute('type','button');
      returnCol.setAttribute('class','returnbook');


      authorCol.appendChild(authorColText);
      titleCol.appendChild(titleColText);
      genreCol.appendChild(genreColText);
      copiesCol.appendChild(copiesColText);
      fineCol.appendChild(fineColText);
      tdreserveCol.appendChild(reserveCol);
      tdreturnCol.appendChild(returnCol);



      let bookRow=document.createElement('tr');
      bookRow.appendChild(authorCol);
      bookRow.appendChild(titleCol);
      bookRow.appendChild(genreCol);
      bookRow.appendChild(copiesCol);
      bookRow.appendChild(tdreserveCol);
      bookRow.appendChild(tdreturnCol);
      bookRow.appendChild(fineCol);



      document.getElementById('userbookdetailtable').appendChild(bookRow);
      // console.log(bookRow);
        });
  
};

userBookDetailFunc();



// REALTIME TABLE FUNCTIONALITY ////////////////
// IT SHOWS THE LIVE UPDATION ONCE THE BOOK IS ISSUED OR
// RETURNED


function orderedList(){
  hideAllBooks('tablelistmine');
  var orderedlistnode=document.getElementById('orderedlistmine');
     let authorColTh=document.createElement('td');
      let titleColTh=document.createElement('td');
      let genreColTh=document.createElement('td');
      let copiesColTh=document.createElement('td');

      let authorColTextTh=document.createTextNode('AUTHOR');
      let titleColTextTh=document.createTextNode('TITLE');
      let genreColTextTh=document.createTextNode('GENRE');
      let copiesColTextTh=document.createTextNode('COPIES');

      authorColTh.appendChild(authorColTextTh);
      titleColTh.appendChild(titleColTextTh);
      genreColTh.appendChild(genreColTextTh);
      copiesColTh.appendChild(copiesColTextTh);

            let listRowTh=document.createElement('tr');
      listRowTh.appendChild(authorColTh);
      listRowTh.appendChild(titleColTh);
      listRowTh.appendChild(genreColTh);
      listRowTh.appendChild(copiesColTh);


      document.getElementById('tablelistmine').appendChild(listRowTh);


    books.forEach((x)=>{
      let authorCol=document.createElement('td');
      let titleCol=document.createElement('td');
      let genreCol=document.createElement('td');
      let copiesCol=document.createElement('td');

      let authorColText=document.createTextNode(x.author);
      let titleColText=document.createTextNode(x.title);
      let genreColText=document.createTextNode(x.genre);
      let copiesColText=document.createTextNode(x.copies);

      authorCol.appendChild(authorColText);
      titleCol.appendChild(titleColText);
      genreCol.appendChild(genreColText);
      copiesCol.appendChild(copiesColText);

      let listRow=document.createElement('tr');
      listRow.appendChild(authorCol);
      listRow.appendChild(titleCol);
      listRow.appendChild(genreCol);
      listRow.appendChild(copiesCol);

      document.getElementById('tablelistmine').appendChild(listRow);
       

});
}

orderedList();








// ISSUE BOOK BUTTON FUNCTIONALITY/////////////////////
// this button issues the book from book details table and
// refreshes the live table


var booktitleholder,startdate;


(function() {
  var elms = document.getElementsByClassName("issueThisBook"),
  l = elms.length, m;
  for( m=0; m<l; m++) {
    (function(m) {
      elms[m].onclick = function() {
        console.log("done");
        var booktitlevar=this.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue;
       booktitleholder=booktitlevar;
       booksDecrease(booktitlevar);
        console.log(booktitlevar);
        orderedList();
      };
    })(m);
  }
})();

function booksDecrease(booktitlevar){
          books.forEach((x)=>{
          if(x.title === booktitlevar){
            console.log("yes");
            if(x.copies>=1){
              alert("Congratulations you have successfully booked your desired book");
              x.copies--;

              users.forEach((p)=>{
// this p.lib can be used as a kind of user session or cookies to
// identify him (Kind of his identity to perform operation). since
// i am the only one using the console

                if(p.lib_ID=== '101'){
                  var start= new Date();
                  p.issued_Date=start.toUTCString();
                  startdate=start;
                }
              });

              hideAllUsers('userdetailtable');
              userInformation();

            }
            else{
              alert("Sorry .. Lack of book availability");
            }

          }

        });

}



// RETURN BOOK BUTTON FUNCTIONALITY///////////////////
// this return book return the book as name describes and
// refreshes the live table and also tells if user have to 
// pay the fine (if he issues for more than 6 days)



var returnbooktitleholder,enddate,timeelapsed;


(function() {
  var elementsselection = document.getElementsByClassName("returnbook"),
  l = elementsselection.length, n;
  for( n=0; n<l; n++) {
    (function(n) {
      elementsselection[n].onclick = function() {
        console.log("done");
        var returnbookname=this.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue;
       returnbooktitleholder=returnbookname;
       booksIncrease(returnbookname);
        console.log(returnbookname);
        orderedList();
      };
    })(n);
  }
})();

function booksIncrease(returnbookname){
          books.forEach((x)=>{
          if(x.title === returnbookname){
            x.copies++;
              users.forEach((p)=>{
                if(p.lib_ID=== '101'){
                    enddate = new Date();
                  p.return_Date=enddate.toUTCString();
                  timeelapsed = enddate.getTime()-startdate.getTime();
                  console.log(timeelapsed);
                   if(timeelapsed < 518400000){
                      console.log("nofine");
                      p.late_Fine="No Fine";
                    }
                  else{
                      console.log("pay fine");
                      p.late_Fine="Pay Fine";
                    }
                  alert('Book has been Returned Successfully,thanks')
                  console.log("ok");

                }
              });

              hideAllUsers('userdetailtable');
              userInformation();

            }

          });

        };






// SEARCH FOR A BOOK BY TITLE OR GENRE

document.getElementById('titleSearchbutton').addEventListener('click',function(){

  let aName = document.getElementById('titleorgenresearchinput').value
  let name = books.filter((x) => x.genre.indexOf(aName) !== -1 || x.title.indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('titleorgenreresult')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('titleorgenreresult').appendChild(listItem)
    })
  } else {
    hideAllBooks('titleorgenreresult')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('titleorgenreresult').appendChild(listItem)
  }
});






// RESERVE BOOK FUNCTIONALITY - RESERVE IF ZERO BOOK PRESENT IN LIBERARY


var reservebutton=document.getElementsByClassName('reserveclass');
for(var i=0;i<=reservebutton.length;i++){
  try{
reservebutton[i].addEventListener('click',function(event){
  console.log(event.target.parentNode.childNodes[1].childNodes[0].nodeValue);
   var titleofreserve=event.target.parentNode.childNodes[1].childNodes[0].nodeValue;

   books.forEach((x)=>{

    if(x.title === titleofreserve && x.copies === 0){
      console.log("if 1 working");
      alert(`The Book : ${x.title} has been reserved for you`);
    }

    if(x.title === titleofreserve && x.copies !== 0){
      alert(`You can Issue the Book :  ${x.title} its available`);
    }
    
   });

})

}catch(err){
  console.log(err.message);
}
}





