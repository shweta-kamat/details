import express from 'express';
import bodyParser from 'body-parser';
import data from './data/users';

const app = express();
// for proper json response.
app.use(bodyParser.json());

const key = "123456"; // currently given as hardcoded, this can be dynamically taken from the user while using the url.
// for authentication purpose , used as middleware.
const auth =function(req,res, next){
  
  if(req.headers['key'] == key){
   next();
  }else{
    return res.status(401).send({
      failure: 'Authentication failure',
      message: 'Authentication key mismatch!',
    });
  }
}

// used globally as as to authenticate each an every function.

app.use(auth);

// function for listing user details
app.get('/list', function(req, res) {

    return res.status(200).send({
      success: 'true',
      message: 'Users retrieved successfully',
      users: data,
    });
  }
);

// function for creating user details
app.post('/create', function (req, res) {
    if(!req.body.name){
      return res.status(400).send({
        success: 'false',
        message: 'Name is required',
      });
    }else if(!req.body.surname){
      return res.status(400).send({
        success: 'false',
        message: 'Surname is required',
      });
    }else if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    const users = {
      id: data.length + 1,
      name:req.body.name,
      surname:req.body.surname,
      title: req.body.title,
      description: req.body.description,
    };
    data.push(users);
    return res.status(200).send({
      success: 'true',
      message: 'users added successfully',
      users,
    });
  }
  );

// you can change the port no as per your choice.
const PORT = 8080;

app.listen(PORT, () => {
    console.log('App running successfully on port ',PORT);
  });

  export default app;
