const myLibrary = [];
let addNewBook = document.getElementById('plusDiv')
let unorderList = document.querySelector('ul')




addNewBook.addEventListener('click', ()=>{
	let inputTitle = document.createElement('input')
	let inputAuthor = document.createElement('input')
	let inputPages = document.createElement('input')
	let submit = document.createElement('button')
	let inputWindow = document.createElement('div')
	if(inputWindow){
		//disable all elements when the inputWindow is true
	}
	

	console.log('Clicked')

	inputWindow.height = 400;
	inputWindow.width = 400;
	inputWindow.setAttribute('id', 'inputWindow')
	document.body.appendChild(inputWindow)

	inputTitle.height = 200;
	inputTitle.width = 200;
	inputTitle.setAttribute('id', 'inputTitle')
	inputWindow.appendChild(inputTitle)

	inputAuthor.height = 200;
	inputAuthor.width = 200;
	inputAuthor.setAttribute('id', 'inputAuthor')
	inputWindow.appendChild(inputAuthor)

	inputPages.height = 200;
	inputPages.width = 200;
	inputPages.setAttribute('id', 'inputPages')
	inputPages.setAttribute('type','number')
	inputWindow.appendChild(inputPages)

	submit.setAttribute('id','submit')
	submit.setAttribute('type','submit')
	submit.textContent = 'SUBMIT'
	inputWindow.appendChild(submit)
	
	document.addEventListener('keydown', function(event){
		if(event.key === 'Escape'){
			inputWindow.remove()
		}
	})

	document.addEventListener('dblclick', function(event){
		if(!inputWindow.contains(event.target) ){
			console.log('Click event');
			inputWindow.remove()
			
		}
	})

	submit.addEventListener('click',() =>{
		createBooks()
		inputWindow.remove()
	})

})


function Book(title,author,pages,read){
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = read ? 'read' : 'not read yet' 

	this.info = function(){
		console.log(`${this.title},${this.author},${this.pages},${this.read}`)
	}
}

function createBooks(){
	let addBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,false);
	let newBook = document.createElement('li')
	unorderList.appendChild(newBook)

	//li > text elements
	let title = document.createElement('h1');
	let author = document.createElement('h2');
	let pages = document.createElement('h2')
	let read = document.createElement('h2')
	let pageDisplay = document.createElement('p');


	//li > divs 
	let titleBox = document.createElement('div')
	let authorBox = document.createElement('div')
	let pagesBox = document.createElement('div')
	let readBox = document.createElement('div')
	let removeBox = document.createElement('div')
	let bookmark = document.createElement('div')


	//images
	let plus = document.createElement('img')
	plus.src ='./assets/plus.png'
	let minus =document.createElement('img')
	minus.src ='./assets/minus.png'



	//li > buttons
	let btnRemove = document.createElement('button')
	let addPg = document.createElement('div')
	let removePg = document.createElement('div')


	//divs properties
	titleBox.setAttribute('class','titleBox')
	authorBox.setAttribute('class','authorBox')
	pagesBox.setAttribute('class','pagesBox')
	readBox.setAttribute('class','readBox')
	removeBox.setAttribute('class','removeBox')
	bookmark.setAttribute('class','bookmark')
	addPg.setAttribute('id','addPg')
	removePg.setAttribute('id','removePg')
	pageDisplay.setAttribute('id','pageDisplay')




	pageDisplay.textContent = 'Last page: 3'	



	//btn properties
	btnRemove.setAttribute('id','remove')
	btnRemove.setAttribute('type','remove')
	btnRemove.textContent = 'REMOVE';
	
	

	
	// newBook appended elements
	newBook.appendChild(titleBox);
	newBook.appendChild(authorBox);
	newBook.appendChild(pagesBox);
	newBook.appendChild(readBox);
	newBook.appendChild(bookmark)
	newBook.appendChild(removeBox)


	//appended to divs elements
	titleBox.appendChild(title)
	authorBox.appendChild(author)
	pagesBox.appendChild(pages)
	readBox.appendChild(read)
	bookmark.appendChild(pageDisplay)
	bookmark.appendChild(addPg)
	bookmark.appendChild(pageDisplay)
	bookmark.appendChild(removePg)
	addPg.appendChild(plus)
	removePg.appendChild(minus)
	


	removeBox.appendChild(btnRemove)

	
	//input content
	title.textContent = addBook.title
	author.textContent = addBook.author
	pages.textContent = addBook.pages
	read = addBook.read

	myLibrary.push(newBook)
	console.log(myLibrary)

		
	btnRemove.addEventListener('click',()=>{
		newBook.remove()
	})
}


function removeBook(){
	
}


addBook.info()
console.log(addBook.title)
myLibrary.push(addBook)
