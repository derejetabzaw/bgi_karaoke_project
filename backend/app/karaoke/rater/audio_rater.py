import warnings
import os
import sys

warnings.filterwarnings("ignore")

from dejavu import Dejavu
from dejavu.recognize import FileRecognizer

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))



config = {
	"database": {
		"db_path": "audio_print_data.sqlite3"
	},
	"database_type": "sqlite3"
}


def song_rater(rec_audio):
	"""
	Receive recorded audio and returns song name and confidence level
	"""
	# Create a Dejavu instance
	djv = Dejavu(config)

	# Create the directory if not found
	if not os.path.exists(BASE_DIR + "/rater/tmp"):
		os.makedirs(BASE_DIR + "/rater/tmp")

	if not os.path.exists(BASE_DIR + "/rater/mp3"):
		os.makedirs(BASE_DIR + "/rater/mp3")	

	file_dir = BASE_DIR + "/rater/tmp"
	fingerprint_dir = BASE_DIR + "/rater/mp3"

	# Fingerprint all the mp3's in the directory given which is mp3
	djv.fingerprint_directory(fingerprint_dir, [".mp3"])
	song = djv.recognize(FileRecognizer, rec_audio)
	print("From file we recognized: %s\n" % song)

	return song['song_name'], song['confidence']



#rec_audio = (BASE_DIR).replace("\\","/") + "/rater/tmp/test.mp3"
#print(song_rater(rec_audio))

