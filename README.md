# DagaMaxima

1. Make sure MongoDB is running.
2. On root directory -> npm i
3. Excecute 'node server.js'

- /login/{userID} GET. Returns ```'User'``` stored in DB or ```"User not found"```
- /login POST will recieve a JSON user. Checkout the [users schema](https://github.com/LaBandaDelFondo/DagaMaxima/blob/development/lib/schemas/userSchema.js) for more refference.
```json
    {
        "userID": "xxxxxxxxx",
        "name": "account name"
    }
```
For now, replies with ```"User Created + name"``` or ```"User already exists"```
- /publication POST requires
```json
    {
        "userID": "The one used to create on login",
        "description": "Some Description",
        "image": "image as form-multipart"
    }
```
Replies with ```404``` if User not found. Will return ```406``` on any error due to image not complying to backend requirements. 
Replies status ```201``` and a ```'Correctly Created'``` message if the publication is successfully created.
