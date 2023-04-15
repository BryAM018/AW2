
function findBookForId(id){
    return new Promise((resolve, reject)=>{
        const book = books.find((book)=> book.id===id );
        if (!book)
        {
            const error= new Error();
            error.message="El libro no fue encontrado";
            reject(error);
        }
        resolve(book);

    })

}
/* 
function findAuthorForId(id){
    return new Promise((resolve, reject)=>{
        const author =  authors.find((author)=>{
            return author.id===id;
        });
        if (!author)
        {
            const error =  new Error();
            error.message="No pudimos encontrar el autor";
            reject(error);
        }
        //libro.author = author;
        resolve(author);
    })
}
findBookForId(2)
.then((book)=>{ 
    console.log(book);
    return findAuthorForId(book.idauthor);
})
.then((author)=>{
    console.log(author)
})
.catch((error)=>{
    console.log(error.message)
}) */