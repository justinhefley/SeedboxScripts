#!/bin/sh

#Cut up the transfer log and look for file names that we want.
# It starts by removing all lines that start with c we only want get
# Next we parse the file separating it out by "/"
# Lastly we search these bits for file names and keep the ones we like.
for (( i=1; i<=20; i++ ))
do
	sed '/^c/d' transfer.log | cut -d'/' -f$i | grep -i -e avi$ -e mkv$ -e mov$ -e mp4$ >> transferred
done

# Clean up the file names a bit and remove blank lines
sed -i 's/%20/ /g' transferred
sed -i 's/%5/ /g' transferred
sed -i '/^$/d' transferred

# Read the file and send notifications to my Android!
while read line
do
/bin/sh /home/dahef34/nma.sh "LFTP Transfer" "Files Transferred" "$line" 0
done <transferred 
