#!/bin/bash

while [ `pgrep cp` ]; do
for i in `pgrep cp`
do
if [ "$i" ]; then 
	while [ $(kill -0 "$i") ]; do 
		sleep 1 
	done 
fi
done
done
cd /path/to/transfer/directory
	if [[ -z `find . -name *.r*` ]]
		then
            	echo "no files to unpack"
		
		else
		find . -name *.rar -print -execdir unrar -y e {} +
			if [ -n $? ]
			then
			find . -name *.r* -print -execdir rm {} +
			else
			
			fi
	fi
	if [ -z "$(pgrep lftp)" ]; then
        
	transmission-remote --torrent all --stop
	/usr/bin/lftp -f /path/to/rc
	transmission-remote --torrent all --start
	wait ${!}
	curl -H "Content-Type: application/json" -d "{\"jsonrpc\":\"2.0\",\"method\":\"VideoLibrary.Scan\",\"id\":\"scan\"}" http://username.dyndnss.org:port/jsonrpc
	wait ${!}
	find /path/to/transfer/dir/ -empty -type d -delete
fi
exit 0
