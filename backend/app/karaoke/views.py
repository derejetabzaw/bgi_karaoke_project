from rater import audio_rater
from django.http import HttpResponse
import wave
import os 


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_ROOT = os.path.join(BASE_DIR, "karaoke/rater/tmp/").replace("\\","/")



'''accepts recorded audio and return the song_name and confidence'''
def voice_request(request):
        try:
            blob = request.FILES['audio']
            nchannels = 2
            sampwidth = 2
            framerate = 44000
            nframes = 100
            

            name = os.path.join(MEDIA_ROOT,'output.mp3')
            audio = wave.open(name, 'wb')
            audio.setnchannels(nchannels)
            audio.setsampwidth(sampwidth)
            audio.setframerate(framerate)
            audio.setnframes(nframes)
            audio.writeframes(blob.read())
            audio.close()
        except Exception as e:
            print "error:" + str(e)
        recorded_audio = name.replace("\\","/")
        song_name, confidence = audio_rater.song_rater(recorded_audio)
        return song_name,confidence




