#!/bin/sh

# script to check for complete torrents in transmission folder, then stop and move them

MOVEDIR=/path/to/Transmission/Seeding/Directory
# If you use a password then add --auth=UserName:Password to each command

TORRENTLIST=`transmission-remote -l | sed -e '1d;$d;s/^ *//' | cut -s -d " " -f1`

# for each torrent in the list
for TORRENTID in $TORRENTLIST
do
  echo "* * * * * Operations on torrent ID $TORRENTID starting. * * * * *"

  # check if torrent was started
  STARTED=`transmission-remote --torrent $TORRENTID --info | grep "Id: $TORRENTID"`
  # echo " - started state = $STARTED" # debug message

  # check if torrent download is completed
  COMPLETED=`transmission-remote --torrent $TORRENTID --info | grep "Percent Done: 100%"`
  # 

  # check torrent's current state is "Stopped"
  STOPPED=`transmission-remote --torrent $TORRENTID --info | grep "State: Finished"`
  # echo " - torrent stopped seeding = $STOPPED" # debug message

  # if the torrent is "Stopped" after downloading 100% and seeding, move the files and remove the torrent from Transmission
  if [ "$STARTED" != "" ] && [ "$COMPLETED" != "" ] && [ "$STOPPED" != "" ]; then
    echo "Torrent #$TORRENTID is completed."
    echo "Removing torrent from list."
    transmission-remote --torrent $TORRENTID --remove-and-delete
    transmission-remote --torrent all --start
  elif [ "$COMPLETED" != "" ]; then
    echo "Torrent #$TORRENTID is downloaded."
    echo "Moving downloaded file(s) to $MOVEDIR."
    transmission-remote --torrent $TORRENTID --move $MOVEDIR
  else
    echo "Torrent #$TORRENTID is not completed. Ignoring."
  fi

  echo "* * * * * Operations on torrent ID $TORRENTID completed. * * * * *"

done
