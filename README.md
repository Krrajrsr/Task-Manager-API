# Task-Manager-API
A RESTful API that allows users to manage a list of tasks.

This API have the following endpoints:
1. GET /tasks - Returns a list of all tasks.
2. GET /tasks/:id - Returns the details of a single task with the given id.
3. POST /tasks - Creates a new task.
4. PUT /tasks/:id - Updates the task with the given id.
5. DELETE /tasks/:id - Deletes the task with the given id.
The task should have the following properties:
id (string) - a unique identifier for the task
title (string) - a short description of the task
description (string) - a detailed description of the task
status (string) - the current status of the task, either "completed" or "incomplete"

Tools used: 
1. VS Code
2. node.js
3. mongoDB Database Server 
4. MongoDB compass
5. Postman

Dependencies/Modules:

1. dotenv (We have used this to get the environment variables set).
2. express
3. mongoose
4. nodemon
5. shortid (As a Unique identifier we have used shortid in out project which will automatically provide us a Random Unique Id for all our tasks.
The system is also automatically creating a unique obeject id with (_id) but as mentioned in the Requirements i have used a custom "id" for all tasks)

*(Please use our id created by Shortid for searching, updating or deleting a task)


**Node modules are already included in this file, so you dont need to install them again from npm.

You will need:
1. MongoDB
2. Node.js
3. Any code editor like VScode will be good.
4. Postman 

Instructions to run this Project:

1.
#Install Node.js

#Install MongoDB 

#Install Postman 

#Install VScode

#Instal MongoDB Compass

Note: Setup the environment variables for the apps if already not set.

2. Open VScode => Goto New => Open Folder and select extracted folder Downloaded

Now This will look like this:
![Screenshot (20)](https://user-images.githubusercontent.com/124825647/225782688-1ee6daf5-2e3e-49f1-a471-cbd99bc75b03.png)

3. In terminal type node app.js or npm run dev:
![Screenshot (21)](https://user-images.githubusercontent.com/124825647/225782866-50031296-0446-4ead-9632-8382d3aa8380.png)
If everthing is going fine it will look like this.

4.Test all the methods in the Postman app
*POST
![post request](https://user-images.githubusercontent.com/124825647/225783119-d0de974e-6164-4f43-b9fc-a63777b2549b.png)

*GET ALL
![get all tasks](https://user-images.githubusercontent.com/124825647/225783130-3ffd98b9-d43c-48a7-9484-ea64d3e63257.png)

*GET BY ID
![get taskbyid](https://user-images.githubusercontent.com/124825647/225783139-87055b78-e76c-44fb-8e43-47a29429846e.png)

*PUT (update byID)
![updatebyid](https://user-images.githubusercontent.com/124825647/225783177-f7b98759-ebdf-48b4-9a67-fe40f87fe8d4.png)

*Delete(by id)
![delete](https://user-images.githubusercontent.com/124825647/225783211-7ad19599-fa33-4d1b-a8f0-ebcbce1372f8.png)

*Error handled

1.Mandatory fields are not passed:
![invalid data post](https://user-images.githubusercontent.com/124825647/225783492-110daf01-cc48-4e88-bebb-01a0040ea6b3.png)

2.Wrong id enterted while updating/getting by id or deleting it:
![Screenshot (22)](https://user-images.githubusercontent.com/124825647/225783468-c1f70594-238b-4db7-85dc-cc31e7295a6c.png)

3. Wrong endpoints entered:
![Screenshot (23)](https://user-images.githubusercontent.com/124825647/225783608-f4372cc8-7586-4592-8110-9063bb35fec2.png)


