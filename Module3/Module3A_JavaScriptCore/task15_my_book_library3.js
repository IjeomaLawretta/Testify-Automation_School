const books = [

    {
        title: 'Ijays Books 1',
        description: 'Testing is not for the weak +;' + 'Volume 1',
        numberOfPages: 100,
        author: 'Ijeoma Lawretta',
        reading: true,
    },
    
    {
        title: 'Ijays Books 2',
        description: 'Testing is not for the weak +;' + 'Volume 2 ',
        numberOfPages: 300,
        author: 'Ijeoma Lawretta',
        reading: false,
    },
    
    {
        title: 'Ijays Books 3',
        description: 'Testing is not for the weak +;' + 'Volume 3 ',
        numberOfPages: 150,
        author: 'Ijeoma Lawretta',
        reading: true,
    },
    
    {
        title: 'Ijays Books 4',
        description: 'Testing is not for the weak +;' + 'Volume 4 ',
        numberOfPages: 200,
        author: 'Ijeoma Lawretta',
        reading: false,
    }
    ];
    
    for(let i= 0; i<books.length; i++) {
        let book = books[i]  //this was to assign each entry of the array into a variable per iteration
        if(book.reading===true) {
            console.log(book)
        }
    }
    
    
    