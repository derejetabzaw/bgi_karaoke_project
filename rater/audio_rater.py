import warnings
import json
warnings.filterwarnings("ignore")

from dejavu import Dejavu
from dejavu.recognize import FileRecognizer, MicrophoneRecognizer
import os

import subprocess
if not os.path.exists("tmp"):
	os.makedirs("tmp")


# load config from a JSON file (or anything outputting a python dictionary)
with open("dejavu.cnf.SQLITE_SAMPLE") as f:
    config = json.load(f)

if __name__ == '__main__':

	# create a Dejavu instance
	djv = Dejavu(config)
	rec_audio = "tmp/WFlaDQKr.wav"
	# Fingerprint all the mp3's in the directory we give it
	djv.fingerprint_directory("mp3", [".mp3"])

	song = djv.recognize(FileRecognizer,rec_audio)
	#song = djv.recognize(FileRecognizer,rec_audio)
	

	print song['song_name']
	print song['confidence']
	print "From file we recognized: %s\n" % song
	


