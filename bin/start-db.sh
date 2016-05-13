 #!/usr/bin/env bash

 couchdb
 curl http://127.0.0.1:5984/
 status=$?

 if test $status -eq 0 then
     echo "couchdb started successfully"
 else
     echo "Failed to start couchdb"
     exit
 fi
