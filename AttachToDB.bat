@ECHO OFF
REM The script sets environment variables helpful for PostgreSQL

SET PATH=C:\Program Files\PostgreSQL\10\bin;%PATH%
SET PGDATA=C:\Program Files\PostgreSQL\10\data
SET PGLOCALEDIR=C:\Program Files\PostgreSQL\10\share\locale
set DATABASE_URL=postgres://xbjpmmrzfjsxty:a8cf51b746fef4605925296d95e6a50ee825d30dfb33437621f59469218f13f2@ec2-54-195-252-243.eu-west-1.compute.amazonaws.com:5432/db4k8srmmk6jp9

heroku pg:psql postgresql-sinuous-24117 --app pta-registration