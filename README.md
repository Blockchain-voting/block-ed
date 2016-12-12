# Block -Ed

Simple blockchain implementation to demonstrate the strengths of the blockchain. Designed for education, so security is not a priority (i.e. please don't use your usual password).

```
File Structure
├── PostgresUpdate.md
├── README.md
│
├── votechain
│   ├── Handler.py
│   ├── Helper.py
│   ├── Merkle.py
│   ├── Node.py
│   └── server.py (*Flask Server*)
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
├── server.js (*Express Server*)
│
├── src
│   ├── components
│   │   ├── App.css
│   │   └── App.jsx
│   ├── helpers
│   │   └── AjaxFunctions.js
│   └── index.js
│
└── webpack.config.js
```
