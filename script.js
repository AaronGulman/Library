const myLibrary = [];
let addNewBook = document.getElementById('plusDiv')
let unorderList = document.querySelector('ul')




addNewBook.addEventListener('click', ()=>{
	let boxOfInputs = document.createElement('div')
	let inputTitle = document.createElement('input')
	let inputAuthor = document.createElement('input')
	let inputPages = document.createElement('input')
	let input = document.createElement('input')
	let submitBox = document.createElement('div')
	let submit = document.createElement('button')
	let inputWindow = document.createElement('div')
	let inputHeader = document.createElement('inputHeader')
	let cancel = document.createElement('img')
	let resize = document.createElement('img')
	let labelTitle = document.createElement('label')
	let labelAuthor= document.createElement('label')
	let labelPages = document.createElement('label')



	if(inputWindow){
		//disable all elements when the inputWindow is true
	}
	

	console.log('Clicked')

	inputWindow.height = 400;
	inputWindow.width = 400;
	inputWindow.setAttribute('id', 'inputWindow')
	document.body.appendChild(inputWindow)

	inputHeader.setAttribute('id','inputHeader')
	inputWindow.appendChild(inputHeader)

	boxOfInputs.setAttribute('id','boxOfInputs')
	inputWindow.appendChild(boxOfInputs)



	cancel.setAttribute('id','cancel')
	cancel.src = './assets/plus.png'
	inputHeader.appendChild(cancel);

	resize.setAttribute('id','resize')
	resize.src = './assets/arrow.png'
	inputHeader.appendChild(resize)

	boxOfInputs.appendChild(labelTitle)
	inputTitle.setAttribute('id', 'inputTitle')
	boxOfInputs.appendChild(inputTitle)
	
	labelTitle.setAttribute('class','labelTitle')
	labelTitle.setAttribute('for','inputTitle')
	labelTitle.textContent = 'Title'
	labelAuthor.setAttribute('class','labelAuthor')
	labelAuthor.setAttribute('for','inputAuthor')
	labelAuthor.textContent = 'Author'
	labelPages.setAttribute('class','labelPages')
	labelPages.setAttribute('for','inputPages')
	labelPages.textContent = 'Pages'


	boxOfInputs.appendChild(labelAuthor)
	inputAuthor.setAttribute('id', 'inputAuthor')
	boxOfInputs.appendChild(inputAuthor)

	boxOfInputs.appendChild(labelPages)
	inputPages.setAttribute('id', 'inputPages')
	inputPages.setAttribute('type','number')
	boxOfInputs.appendChild(inputPages)

	submitBox.setAttribute('id','submitBox')
	inputWindow.appendChild(submitBox)

	submit.setAttribute('id','submit')
	submit.setAttribute('type','submit')
	submit.textContent = 'SUBMIT'
	submitBox.appendChild(submit)


	inputTitle.addEventListener('focus', function() {
		labelTitle.style.transform = 'translate(-70px, 0px) scale(1.2)';
		labelTitle.style.transition = ' transform 1s';
		labelTitle.style.color = 'rgb(17 24 39)'
		labelTitle.style.textShadow = '1px 2px 10px rgb(17 24 39)'
		

	      });

	
	      inputTitle.addEventListener('blur', function() {
		if(!inputTitle.value){
		labelTitle.style.transition = ' transform 1s';
		labelTitle.style.transform = 'translate(-70px,35px)'
		labelTitle.style.color = "#000000";
		}
	      });

	      inputAuthor.addEventListener('focus', function() {
		labelAuthor.style.transform = 'translate(-70px, 0px) scale(1.2)';
		labelAuthor.style.transition = ' transform 1s';
		labelAuthor.style.color = 'rgb(17 24 39)'
		labelAuthor.style.textShadow = '1px 2px 10px rgb(17 24 39)'

	      });

	
	      inputAuthor.addEventListener('blur', function() {
		if(!inputAuthor.value){
			labelAuthor.style.transition = ' transform 1s';
			labelAuthor.style.transform = 'translate(-70px,35px)'
			labelAuthor.style.color = "#000000";
		}
	      });

	      inputPages.addEventListener('focus', function() {
		labelPages.style.transform = 'translate(-70px, 0px) scale(1.2)';
		labelPages.style.transition = ' transform 1s';
		labelPages.style.color = 'rgb(17 24 39)'
		labelPages.style.textShadow = '1px 2px 10px rgb(17 24 39)'

	      });

	
	      inputPages.addEventListener('blur', function() {
		if(!inputPages.value){
			labelPages.style.transition = ' transform 1s';
			labelPages.style.transform = 'translate(-70px,35px)'
			labelPages.style.color = "#000000";
		}
	      });

	
	
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
	let pageDisplay = document.createElement('h2');



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




	pageDisplay.textContent = 'Last page: '	



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
	let increment = 0;

	addPg.addEventListener('click',(event)=>{
		// for(let i = 0; i<3;i++){
			if(increment < addBook.pages){
			increment ++
			}

			pageDisplay.textContent = `Last page: ${increment}`;
		// }
	})

	removePg.addEventListener('click',()=>{
		if(increment > 0){
		increment--
		}
		pageDisplay.textContent = `Last page: ${increment}`;
	})
}


function removeBook(){
	
}


addBook.info()
console.log(addBook.title)
myLibrary.push(addBook)


