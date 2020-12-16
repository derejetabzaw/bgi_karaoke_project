from rater import audio_rater
from django.http import HttpResponse
import wave
import os 
from django.http import JsonResponse
import requests 


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_ROOT = os.path.join(BASE_DIR, "karaoke/rater/tmp/").replace("\\","/")



def index(request):
    try:
        recorded_audio = os.path.join(MEDIA_ROOT, "output.mp3").replace("\\","/")
        song_name, confidence = audio_rater.song_rater(recorded_audio)
    except Exception as e:
        print str(e)

    return HttpResponse(str(confidence))
    

'''accepts recorded audio and return the song_name and confidence'''
def voice_request(request):
        try:
            blob = request.FILES['audio']
            nchannels = 2
            sampwidth = 2
            framerate = 44100
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
        
        return HttpResponse(str(recorded_audio))


