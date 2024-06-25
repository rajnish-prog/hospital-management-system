-                               BACKEND:- 

#             PROJECT NAME:- Hospital Management System

# Pre-Requisite :- Mongodb , Expressjs , Nodejs , Reactjs

# Some Package and Their Function For This Project:-

    "npm i bcrypt cloudinary cookie-parser cors dotenv express mongoose  Express-fileupload jsonwebtoken validator"

    bcrypt:- Used To Hash Password 
    cloudinary:- Used To Store Images On Cloud 
    cookie-parser:- Used For Parse The Cookie So That, We can update the Cookie
    cors:- To Connect Frontend and Backend
    dotenv:- Used To Keep Variable Secret
    express:- Framework Of Nodejs 
    mongoose:- It's Package by which we Can Work with mongodb or Database
    Express-fileupload:- Used To Handle Avatar Images
    jsonwebtoken:- To Generate Token
    validator:- Used For Email Validation


- This Project Contaian a Separate Dash-Board, That Run On Seperate Port Number.

# In This Projet There Are Three Main Pages :-
            1. HOME
            2.APPOINTMENT
            3.ABOUT US
            
# Features Of This Project :-
    1. Authentication 
    2. Authorized
    3. Crud Operation
    4. Manage Multiple JSON Web-token
    5. Data Manipulation




# Also We Use POSTMAN:-
    - Postman is an API(application programming interface) development tool that helps to build, test, and modify APIs.


# Postman Structure are in Such Way :- 

                                                     
    Hospital Management System (Project Name (This Is Also A Folder))

-        There Are Some Sub Folder of This Main Folder, 

    1. USER
    2. MESSAGE
    3. APPOINTMENT

- and In Every Sub Folder We Create Add Request,  Some Of Them Are POST type and Some of Them Are GET type.

-  1. USER 
        Login (Type:- POST)
        Patient Register(Type:- POST)
        Get All Detail(Type:- GET)
        Get Patient Details(Type:- Get)
        Admin Logout(Type:- POST)
        Get Admin Details(Type:- Get)
        Patient Logout(Type:- POST)
        Add New Doctor(Type:- POST)

-  2. MESSAGE
        Get All Message(Type:- Get)
        Send Message(Type:- POST)

-  3. APPOINTMENT
        Get All Appointment(Type:- Get)
        Accept Appointment 
        Delete Appointment(Type:- Delete)
        Post(Type:- POST)
