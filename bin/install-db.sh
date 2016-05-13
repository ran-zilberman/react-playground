#!/usr/bin/env bash

if brew list | grep couchdb > /dev/null; then
    echo "couchdb is already installed"
    exit
else
    echo "couchdb is not installed"
    brew install couchdb
fi

status=$?
if test $status -eq 0 then
    echo "couchdb installed successfully"
else
    echo "Failed to install couchdb"
fi

