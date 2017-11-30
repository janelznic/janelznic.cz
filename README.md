www.janelznic.cz
================
Personal web site.

Pre-installation requirments
----------------------------
* Directory structure:

  `$ mkdir -p ~/vhosts/apache2`

  `$ mkdir ~/www`


* Directory `~/vhosts/apache2` need to be included in global `/etc/apache2/apache2.conf` file

* Grunt (version >= 1.2.0)

  `$ npm i -g grunt`


* PHP (version >= 5.6.30)

* Platform independent.


Installation instructions
-------------------------
1. Clone git repository:

   `$ git clone git@github.com:janelznic/janelznic.git`


2. Go to repository directory 'janelznic':

   `$ cd janelznic`


3. Install all dependencies:

   `$ yarn`


Development version
-------------------
* Watch all `*.less|*.css` files changes with Grunt to build standalone `*.css` vector bundle file

  `$ grunt watch`

