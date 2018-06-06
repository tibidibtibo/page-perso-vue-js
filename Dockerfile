FROM httpd:2.4

LABEL auteur tibidibtibo

COPY ./dist /usr/local/apache2/htdocs
COPY .htaccess /usr/local/apache2/htdocs
