#!/usr/bin/python
import os
import sys
import re
import pynma

########### Begin Edit ###################
api = "Insert NotifyMyAndroid API key here"
log = "/Path/to/LFTP/log.file"

########### End Edit #####################

bad_words = ['chmod', 'mkdir']

with open(log) as oldfile, open('transfer.log-new', 'w') as newfile:
    for line in oldfile:
        if not any(bad_word in line for bad_word in bad_words):
            newfile.write(line)
newfile.close()
f = open('transfer.log-new', 'r')
for line in f:
	line.replace(" ","")
	output = os.path.basename(line)
	searc = re.findall("(.*mkv$|.*avi$|.*mp4$|.*mov$)", output)
	if searc:
		fn = os.path.splitext(searc[0])
		nf = fn[0].replace("."," ")
		p = pynma.PyNMA(api)
		p.push("New Movie Transferred", " ", str(nf)+fn[1])
