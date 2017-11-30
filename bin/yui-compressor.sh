#!/bin/bash

JSFILES_LIST="../wwwroot/config/jsfiles.conf"
JSFILE_ALL="../wwwroot/js/all.js"

rm -f $JSFILE_ALL
touch $JSFILE_ALL

cat $JSFILES_LIST | while read LINE; do
    yui-compressor ../wwwroot/js/$LINE >> $JSFILE_ALL;
done
