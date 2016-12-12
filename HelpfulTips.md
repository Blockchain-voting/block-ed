# Heroku

- On heroku create the app

- In Terminal enter these:
```
heroku login
heroku git:remote -a <app name>
```

- On heroku go to 'Resources' tab in your app. In the 'Quickly add add-ons...' bar type `Heroku Postgres` and add it to your resources
  - if you aren't using postgres then don't bother with this and/or type whatever other resources you are using

- On heroku go to the `Setting` tab in your app. Click `Reveal Config Vars` and enter the necessary things from your .env
  - NOTE: Do not include any of your DB things, b/c that is handled by heroku when you added `Heroku Postgres`.
  - NOTE: Put a Var for `NODE_ENV` and set it equal to `production`. This tells the package.json, and the express server if you have it configured a certain way, to run in production.

- Make sure in your package.json your scripts section looks like :
```
"scripts": {
  "clean": "rm -rf dist && rm -rf node_modules",
  "heroku-prebuild": "bash ./scripts/deployment_react.sh",
  "heroku-postbuild": "bash ./scripts/deployment_cleanup.sh",
  "rebuild": "webpack -d --progress --colors",
  "watch": "webpack -d --progress --watch"
  },
  ```

- In Terminal enter:
`git push heroku master`
 if all goes according to plan you should be done.

- Type:
  `heroku open`

## Postgres Update
https://keita.blog/2016/01/09/homebrew-and-postgresql-9-

#### My version of this lovely blog

brew services stop postgresql

brew update && brew upgrade postgresql

initdb /usr/local/var/postgres9.6.1 -E utf8

pg_upgrade \
  -d /usr/local/var/postgres \
  -D /usr/local/var/postgres9.6.1 \
  -b /usr/local/Cellar/postgresql/9.5.4/bin/ \
  -B /usr/local/Cellar/postgresql/9.6.1/bin/ \
  -v

mv /usr/local/var/postgres /usr/local/var/postgres9.5.4
mv /usr/local/var/postgres9.6.1 /usr/local/var/postgres

brew services start postgresql

gem uninstall pg
gem install pg

## Digital Ocean

ssh root@104.131.69.109
