# Petful API

## Team Members
Mandela Jones<br />
Sherry McCarty

## Tech Stack
Javascript, React, CSS3, HTML5, NodeJS, ExpressJS, PostgreSQL

### Usage
Base Url: _to update__/api
| Endpoint    | Method | Description                                                                                           |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------- |
| /people       | post     | Takes a name and adds to adoption line                    |
| /people       | get     | Gets people in line for adoption                    |
| /people       | delete     | Removes first person in adoption line                    |
| /pets       | delete     | Takes a pet type and removes first cat or dog from inventory                     |
| /pets       | get     | Gets cat and dog up next for adoption                    |
| /api/cat       | get     | Gets first cat in line for adoption                    |
| /api/dog       | get     | Gets first dog in line for adoption                    |

### POST `/people`
Parameters:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;"personName":"Irma Juniors"  
}  
**personName** *string*  

Returns:   
{  
&nbsp;&nbsp;&nbsp;&nbsp;"Irma Juniors":   
}  

### GET `/people`
Parameters:  
none  

Returns:   
[  
&nbsp;&nbsp;&nbsp;&nbsp;"Randy Lahey",   
&nbsp;&nbsp;&nbsp;&nbsp;"Trevor Cory",   
&nbsp;&nbsp;&nbsp;&nbsp;"Jim Lahey",   
&nbsp;&nbsp;&nbsp;&nbsp;"Armon Bofgid",   
&nbsp;&nbsp;&nbsp;&nbsp;"Sigmund Johnson",   
&nbsp;&nbsp;&nbsp;&nbsp;"Hattie Mattie"   
]  

### DELETE `/people`
Parameters:  
{none
}  

Returns:   
{  
   
}  

### DELETE `/pets`
Parameters:  
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"petType":"cat",     
 }
 
Returns:   
{     
none
}

### GET `/pets`
Parameters:  
None  
  
Returns:
[
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"age":"2",     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"breed":"white cat",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description":"white cat",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"gender":"Female",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"imageURL":"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"Snaptjacks",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"story":"Thrown on the street"  
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"age":"3",     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"breed":"Akita",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description":"A smiling golden-brown dog",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"gender":"Female",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"imageURL":"https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"Fran",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"story":"Found downtown"  
&nbsp;&nbsp;&nbsp;&nbsp;},
]   


### GET `/api/cat`
Parameters:  
None  
  
Returns:   
{     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"age":"2",     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"breed":"white cat",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description":"white cat",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"gender":"Female",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"imageURL":"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"Snaptjacks",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"story":"Thrown on the street"  
&nbsp;&nbsp;&nbsp;&nbsp;}}  
  
### GET `/api/dog`
Request Body Parameters:  
{  
none 
}  

Returns:   
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"age":"3",     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"breed":"Akita",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description":"A smiling golden-brown dog",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"gender":"Female",    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"imageURL":"https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"Fran",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"story":"Found downtown"  
}  

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

## MyClientele - Client

This app is meant to run with [https://github.com/thinkful-ei-orka/myclientele-f5-client] (MyClientele) client.

Please look at the README.md for more information on utilizing the client.

## To Run A Clean Start 

1. Clone this repository to your local machine
2. cd into the cloned repository
3. Remove the git history with rm -rf .get && git init
4. Install dependencies with npm install
5. Move the example Environment file to .env that will be ignored by git and read by React with mv example.env .env
6. Change project name in package.json to use whatever name you've given this project instead of "name": "
