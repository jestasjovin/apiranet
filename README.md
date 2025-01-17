# apiratnet

## Introduction

This is an integrated system that aims to create a favorable environment for multi-service applications, meaning that two or more different services can begin to share resources and provide the intended output for users. For example, we may have different systems such as payment systems, hotel reservation systems, social media, and more.

---

For instance, with a single api call, a user may simply prompt the system to reserve a conference hall on specific dates, with required parameters. The system could then prompt the user to choose from various available services, entering a payment password, updating google calendars, posting on X and linkedin about the conference, and sending emails to the potential or designated participants.

---

Developers and engineers don’t need to implement these services themselves. They simply need to register their service in our network| system and they will benefit all available services.

### About
This is a node js server built with typescript and express
- With less libraries and packages as necessarily
    - dependecies
        * dotenv
        * express
        * jsonwebtoken

    - dev dependecies
        * nodemon

Currently : its an MVP , trying to actualy make it work or atleast make some sense!

#### Goals
  - Register a user who will register their APIs
  - User Being able to register services : i.e  APIs
  - Find specific API
  - Find multiple api that does something 
    : filter based  on the user's needs from parent api call
  - Map the node journey : with least cost 
  - start going through to call each api


### Run : Development Mode

```bash
npm run dev
```

accessing at

http://localhost:3000

### Build and Run : Production Mode

- build the TypeScript code
- start the application:

```bash
npx tsc
npm start
```



### API Calls and Routes

#### main

This is the main route that handles static page for documentation

#### client

This is to manage service registered

#### operate

This is for handling the system api calls

- Query : fetching information without writing
  - Query lists
  - Query an item
- Mutation : operate - dealing with writing and editing to the system



### RatNet service
 This holds the algorithms and procedures to handle the requested process


 ---

 *built by Jovin Jestas Kyolike*
 _Started: 8 in the morning :Jan 16 2025_
