var books = require('../models/books');
// List of all books
exports.books_list = function(req, res) {
 res.send('NOT IMPLEMENTED: books list');
};
// for a specific books.
exports.books_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: books detail: ' + req.params.id);
};
// Handle books create on POST.
exports.books_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: books create POST');
};
// Handle books delete from on DELETE.
exports.books_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: books delete DELETE ' + req.params.id);
};
// Handle books update form on PUT.
exports.books_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: books update PUT' + req.params.id);
};

// List of all books
exports.books_list = async function(req, res) {
    try{
    thebooks = await books.find();
    res.send(thebooks);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

   // VIEWS
// Handle a show all view
exports.books_view_all_Page = async function(req, res) {
    try{
    thebooks = await books.find();
    res.render('books', { title: 'books Search Results', results: thebooks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

// Handle books create on POST.
exports.books_create_post = async function(req, res) {
    console.log(req.body)
    let document = new books();
    document.title = req.body.title;
    document.author = req.body.author;
    document.year = req.body.year;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }

   // specific books. lab-12 s-1
exports.books_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await books.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }
   
   //lab-12 s-2
   exports.books_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await books.findById(req.params.id)
        // Do updates of properties
        if (req.body.books_title)
            toUpdate.title = req.body.title;
        if (req.body.author) toUpdate.author = req.body.author;
        if (req.body.year) toUpdate.year = req.body.year;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

// s4 ad s5
// Handle books delete on DELETE.
exports.books_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await books.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

//s6

// Handle a show one view with id specified by query
exports.books_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await books.findById(req ? req.query.id : req['query']['id'])
    res.render('booksdetail',
    { title: 'books Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

exports.books_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('bookscreate', { title: 'Books Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

//s8
    
exports.books_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await books.findById(req.query.id)
    res.render('booksupdate', { title: 'books Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`)
    }
    };
    
//     //s9

//     exports.books_delete_Page = async function (req, res) {
//         console.log("Delete view for id " + req.query.id)
//         try {
//             result = await books.findById(req.query.id)
//             res.render('booksdelete', {
//                 title: 'books Delete', toShow:
//                     result
//             });
//         }
//         catch (err) {
//             res.status(500)
//             res.send(`{'error': '${err}'}`);
//         }
//     };