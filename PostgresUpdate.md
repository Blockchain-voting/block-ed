## Postgres Updating
https://keita.blog/2016/01/09/homebrew-and-postgresql-9-5/

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
