#!/bin/bash
#
# Installation from subversion
#

# Basic variables
HOST=$(cat /etc/hostname)
read -p "Project name: " PROJECT
read -p "In what domain the site will run? " DOMAIN
TARGET=/home/$USER/www/$PROJECT
SOURCE=$(readlink -f $(dirname $(readlink -f ${BASH_SOURCE[0]}))"/..")

# Check for previous installation
if [ -d $TARGET ]; then
    echo "Error: '${TARGET}' already exists, exitting."
    exit 1
fi

# Directories
echo "Preparing directories..."
mkdir -p $TARGET
mkdir $TARGET/conf
mkdir $TARGET/log

# Symlinks
echo "Going to install from ${SOURCE} to ${TARGET}..."
ln -s $SOURCE/wwwroot $TARGET/wwwroot

# Config files
echo "Copying config files..."
CONFIG_FILES="$SOURCE/conf/apache2.dev.conf $SOURCE/conf/application.config.dev.php $SOURCE/conf/templates.config.dev.php"
for CFG in $CONFIG_FILES; do
    sed -e "s,__DOMAIN__,$DOMAIN," \
        -e "s,__PROJECT__,$PROJECT," \
        -e "s,__TARGET__,$TARGET," \
        -e "s,__SOURCE__,$SOURCE," \
        -e "s,__USER__,$USER," \
        -e "s,__HOST__,$HOST," \
        -e "s,__EMAIL__,$EMAIL," \
        $CFG > $TARGET/conf/$(basename $CFG)
done
ln -s $TARGET/conf/application.config.dev.php $TARGET/wwwroot/config/application.config.php
ln -s $TARGET/conf/templates.config.dev.php $TARGET/wwwroot/config/templates.config.php

# Virtual host
echo "Creating virtualhost..."
ln -s $TARGET/conf/apache2.dev.conf /home/$USER/vhosts/apache2/$PROJECT.conf

# Debug log
mkdir $SOURCE/wwwroot/log
touch $SOURCE/wwwroot/log/debug.log
chmod 0777 $SOURCE/wwwroot/log/debug.log
ln -s $SOURCE/wwwroot/log/debug.log $TARGET/log/debug.log

# Finish
echo "Installation complete."
