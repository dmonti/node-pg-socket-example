# node-pg-socket-example

Node + PostgreSQL + Socket.IO examples

Install nodemon and start the app:

```
> cd <path>/node-pg-socket-example
> npm install
> npm install -g nodemon
> nodemon
[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
listening on *:3000
```

Then open your browser at:
http://localhost:3000

To see server info:
http://localhost:3000/info

For database connection, you must configure the `.env` file.

More info to how configure the database URL:

https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING

All done!
