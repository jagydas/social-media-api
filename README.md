# Social-Network-API

## Description:
This Social network API uses a MongoDB database so that the website can handle large amounts of unstructured data.It uses Express.js for routing, Mongoose ODM, and the moment package to format time stamps.

## Acceptance Criteria:

- When you enter the command to invoke the application then the server is started and the Mongoose models are synced to the MongoDB database.  
- Testing API GET routes in Insomnia Core for users and thoughts return the data for each of these routes in a formatted JSON
- Testing API POST, PUT, and DELETE routes in Insomnia Core are able to successfully create, update, and delete users and thoughts

- Testing API POST and DELETE routes in Insomnia Core are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Walkthrough Videos
[User Routes](https://watch.screencastify.com/v/iEITDe0XGP5wal9tWj2G)  
[Friend Routes](https://watch.screencastify.com/v/EybBLcx3OJZZbOKLnCIk)  
[Thought Routes](https://watch.screencastify.com/v/5V8QtprCR6F2SD7ox7ZB)  
[Reaction Routes](https://watch.screencastify.com/v/BNOgYvxG3lsabViqwEfo)  

## Installation:
1. Install  mongoDB 
2. Run the following at the command line
    - npm init -y
    - npm install express
    - npm install mongoose
    - npm install moment
    - 
3. Start the server
  $ npm start
  
5. Open Insomnia or Postman  to test API routes

## Tests:  

Testing restful API calls with Postman   

---
**`/api/users`**
* `GET` all users
* `POST` a new user:
    ```json
   Body
    {
        "username": "abc",
        "email": "abc@gmail.com"
    }
    ```
---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
     Body
    {
    "thoughtText": "Here's a cool thought...",
    "username": "abc",
    "userId": "zxzcdfedweeqwqwqs"
    }
    ```
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
  Body
    {
    "reactionBody":"Nice!!",
    "username":"abc"
    }
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 


# Contribution
jagydas

