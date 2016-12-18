# Block -Ed

## Description

Simple blockchain implementation to demonstrate the strengths of the blockchain. Designed for education, so security is not a priority (i.e. please don't use your usual password).

## Functionality

## Use Case

## Approach

## Technologies Used

## Snippets

### File Structure
```
File Structure
├── HelpfulTips.md
├── LICENSE
├── README.md
│
├── db
│   └── schema.sql
│
├── lib
│   └── keyGenerate.js
│
├── models
│   ├── dbConnect.js
│   └── user.js
│
├── package.json
│
├── routes
│   ├── index.js
│   └── user.js
│
├── scripts
│   ├── deployment_cleanup.sh
│   └── deployment_react.sh
│
├── server.js
│
├── src
│   ├── components
│   │   ├── App.css
│   │   ├── App.jsx
│   │   │
│   │   ├── Block
│   │   │   ├── Block.css
│   │   │   └── Block.js
│   │   │
│   │   ├── Chain
│   │   │   ├── Chain.css
│   │   │   └── Chain.js
│   │   │
│   │   ├── Election
│   │   │   ├── Election.css
│   │   │   └── Election.js
│   │   │
│   │   ├── ElectionItem
│   │   │   ├── ElectionItem.css
│   │   │   └── ElectionItem.js
│   │   │
│   │   ├── Login
│   │   │   ├── Login.css
│   │   │   └── Login.js
│   │   │
│   │   └── Profile
│   │       ├── Profile.css
│   │       └── Profile.js
│   │
│   ├── helpers
│   │   └── AjaxFunctions.js
│   │
│   └── index.js
│
└── webpack.config.js
```

## Sources




##TODO
- Rework Flask fetches to work on Heroku
- Display live vote count
- Vote live update
- Vote hash and insertion display
- See other peoples votes (socket.io)?
