# Project details

 Project consists of Node js code for creating and listing the user details.
 1) The main file which runs is index.js which is declared in package.json file.
 2) this file contains three functions 
    i) list users 
    ii) create users
    iii) a middleware function for validating the url
 3) I used postman for Authentication key, to validate the URL.
 
# Procedure 
 1) download the zip folder.
 2) extract it on a particular folder 
 3) run "npm install" command for installing all kind of dependencies.
 4) run "npm start" to start a project.
 5) open postman and hit the url "https://localhost:8080/list" for listing the user details, do not forget to add "key" as 123456 in the header section for authentication. I have used 8080 port as mentioned in index.js file , you can change as per your choice.
 6) again in postman for creating user details I used "https://localhost:8080/create" again in header add key and value, for adding values you need to pass json parameters in the body section for eg: {"name":"xyz","surname":"xyz","title":"xxx","description":"xyz"} and click on send then an additional user will be created.
 

# Dependencies
 some dependancy files are listed below
 1) .babelrc
 2) babel-cli
 3) express
 4) nodemon
  these dependencies will automatically be loaded as you run "npm install" command.
  
 # Note
 
 The users created are stored in temperory array, but it can also be done using any kind of Database, by connecting it with mysql and using mysql module.
 


