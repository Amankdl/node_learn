const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

// Connect to mongodb
const dbURI = "mongodb+srv://amankdl:qwertypoi@learnnode.0wehc.mongodb.net/learnnode?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    app.listen(3000, ()=>{
        console.log("Server started");
    });
    console.log("connected to db");    
})
.catch((error)=>{
    console.log(error);
});
app.set('view engine', 'ejs');

/**
 * 
 * if folder name for views is views than we don't need to tell ejs explicitly the folder name for views  
 * But if we keep folder name other than 'views' than we need to tell ejs explicitly views folder name using 
 * "app.set('views', 'views_folder_name')"
 * */

// app.listen(3000, ()=>{
//     console.log("Server started");
// });

app.use(express.static('public'));

// app.use((req, res, next)=>{
//     console.log("New request made.");
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method', req.method);
//     // if(req.path == '/'){
//     //     res.end("Something went wrong");
//     // }else{
//     //     next();
//     // }
//     next();
// });

// app.use((req, res, next)=>{
//     console.log("In 2nd middleware.");
//     next();
// });

app.get('/', (req, res)=>{
    // res.send("<h1>Plain text or html text</h1>"); 
    // res.sendFile('./views/index.html', {root: __dirname}); //without ejs

    //dummy data
    // const blogs = [
    //     {title: "Mountains", snippet: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    //     {title: "Rivers", snippet: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    //     {title: "Countries", snippet: "Contrary to popular belief, Lorem Ipsum is not simply random text."},
    //     {title: "Culture", snippet: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"}
    // ]; 

    // res.render('index', {title : 'Home', blogs}); //with ejs.

    var blogs = [];
    Blog.find()
    .then((result)=>{
        // res.send(result);
        blogs = result;
        res.render('index', {title : 'Home', blogs}); 
    })
    .catch((error)=>{
        res.send(error);
    })
});

app.get('/about', (req, res)=>{
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title : 'About'});
});

// app.get('/product', (req, res)=>{
//     res.sendFile('./views/product.html', {root: __dirname});
// });

// redirect using express  **Automatically send status 302 which means resource is relocated to other place.
// app.get('/about-us', (req, res)=>{
//     res.redirect('/about');
// });

app.get('/blog/create', (req, res)=>{
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('create', {title : 'Create Blog Post'});
});

// mongoose and mongo-db routes
app.get('/add-blog', (req, res)=>{
    const blog = new Blog({
        title: 'New Blog 02',
        snippet: 'New blog snippet 02',
        body: 'New Blog2 body'
    });

    blog.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((error)=>{
        res.send(error);
    })
});

app.get('/all-blogs', (req, res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((error)=>{
        console.log(error);
    })
});

app.get('/single-blog', (req, res)=>{
    Blog.findById('6174021575c4101159b77af0')
    .then((result)=>{
        res.send(result);
    })
    .catch((error)=>{
        console.log(error);
    })
});

//404 Page  **Positioning of app.use (middleware) keep in mind.
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.render('404', {title : 'Not Found'});
});
