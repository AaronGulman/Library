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

	//li > h elements
	let title = document.createElement('h1');
	let author = document.createElement('h2');
	let pages = document.createElement('h2')
	let read = document.createElement('h2')


	//li > divs 
	let removeBox = document.createElement('div')
	let pagesBox = document.createElement('div')
	let titleBox = document.createElement('div')
	let authorBox = document.createElement('div')

	//properties have't been created yet
	let readBox = document.createElement('div')

	//li > buttons
	let btnRemove = document.createElement('button')

	//divs properties
	removeBox.setAttribute('class','removeBox')


	//btn properties
	btnRemove.setAttribute('id','remove')
	btnRemove.setAttribute('type','remove')
	btnRemove.textContent = 'REMOVE';
	
	// newBook appended elements
	newBook.appendChild(title);
	newBook.appendChild(author);
	newBook.appendChild(pages);
	newBook.appendChild(read);
	newBook.appendChild(removeBox)

	//appended to divs elements
	removeBox.appendChild(btnRemove)
	pagesBox.appendChild(pagesBox)
	
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
