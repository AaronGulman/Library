const myLibrary = [];
let addNewBook = document.getElementById('plusDiv')
let unorderList = document.querySelector('ul')



addNewBook.addEventListener('click', ()=>{
	console.log('Clicked')
	let inputWindow = document.createElement('div')
	inputWindow.height = 400;
	inputWindow.width = 400;
	inputWindow.setAttribute('id', 'inputWindow')
	document.body.appendChild(inputWindow)
	let inputTitle = document.createElement('input')
	inputTitle.height = 200;
	inputTitle.width = 200;
	inputTitle.setAttribute('id', 'inputTitle')
	inputWindow.appendChild(inputTitle)
	let inputAuthor = document.createElement('input')
	inputAuthor.height = 200;
	inputAuthor.width = 200;
	inputAuthor.setAttribute('id', 'inputAuthor')
	inputWindow.appendChild(inputAuthor)
	let inputPages = document.createElement('input')
	inputPages.height = 200;
	inputPages.width = 200;
	inputPages.setAttribute('id', 'inputPages')
	inputPages.setAttribute('type','number')
	inputWindow.appendChild(inputPages)
	let submit = document.createElement('button')
	submit.setAttribute('id','submit')
	submit.setAttribute('type','submit')
	submit.textContent = 'SUBMIT'
	inputWindow.appendChild(submit)
	submit.addEventListener('click',() =>{
		let addBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,false);
		let newBook = document.createElement('li')
		newBook.textContent = `${addBook.title} ${addBook.author} ${addBook.pages} ${addBook.read}`
		unorderList.appendChild(newBook);
		myLibrary.push(newBook)
		console.log(myLibrary)
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



addBook.info()
console.log(addBook.title)
myLibrary.push(addBook)
