const BookService = require("../services/book-service");
const Book=require('../entities/book');
const BookRepository=require('../repositories/book-repository');


let bookRepository=new BookRepository();

var bookService=new BookService(bookRepository);

async function  getBookList(request,response){

    let books=await bookService.getAll(); 
    await response.send(books);  
}

async function addBook(request,response){
    var book=request.body;
    try{
        await bookService.add(book);
        response.status(201); //created
        await response.send(book);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

async function getBookById(request,response){

 
    let id= request.params.bookId; 
    let book=await bookService.getById(id);
    if(book)
        await response.send(book); 
    else{
        response.status(404); 
        await response.send({error: `book not found`, id:id}); 
    }

};

async function removeBook(request,response){
    let id=request.params.bookId;
    await bookService.remove(id);
    response.status(204); //no content
    await response.send({});
}



var express = require('express');
var router = express.Router();

//all this will be mapped /authors/
router.get('/', getBookList);
router.post('/', addBook);
router.get('/:bookId', getBookById);
router.delete('/:bookId', removeBook);



module.exports = router;




