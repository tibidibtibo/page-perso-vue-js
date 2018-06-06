FROM httpd:2.4

MAINTAINER tibidibtibo

COPY ./dist /usr/local/apache2/htdocs
WORKDIR /usr/local/apache2/htdocs

EXPOSE 7777
