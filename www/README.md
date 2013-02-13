SeedboxScripts
==============

1.  This seedbox setup is dependant on the following programs:
  -  Transmission
  -  Ajaxplorer
  -  Marascino
  -  Apache
  -  LFTP
  -  Incron
  -  PHP
  -  Flexget
  -  ADD them to your default runtimes (update-rc.d "program" defaults)
2.  Install these programs using the method for your distro.
3.  Edit config.js
4.  Edit logs.php.
  - There are several places.  Just point it to the logs you create.
6.  Setup Flexget with your own recipe
7.  Create three separate directories.
    1.  Transmission Downloading Directory
    2.  Transmission Seeding Directory
    3.  LFTP Transfer Directory
8.  Configure transmission settings.json
9.  Configure crontab and incrontab according to the example
    -  Incrontab should point to Transmission Seeding Directory and `cp` to LFTP Transfer Directory
    -  Crontab should run transmision script and shortly after run LFTP script
