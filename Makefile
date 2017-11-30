# Javascript Compressor Makefile

MAKEFLAGS = --always-make
MAKE = make $(MAKEFLAGS)

TEMP_DIR=./temp
JSFILES_LIST=./wwwroot/config/jsfiles.conf
JSFILE_ALL=./wwwroot/js/all.js

prepare:
	rm -f $(JSFILE_ALL);
	touch $(JSFILE_ALL);
	cat $(JSFILES_LIST) | while read LINE; do \
		yui-compressor ./wwwroot/js/$$LINE >> $(JSFILE_ALL); \
	done

build:
	$(MAKE) prepare;

build-update:
	$(MAKE) clean;

all:
	$(MAKE) build;

clean:
	rm -rf $(TEMP_DIR);
	rm -f $(JSFILE_ALL);
	dh_clean;
