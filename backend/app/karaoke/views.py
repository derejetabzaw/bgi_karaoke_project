from rater import audio_rater
from django.http import HttpResponse
import wave
import os 
from django.http import JsonResponse
import requests 
from pydub import AudioSegment


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_ROOT = os.path.join(BASE_DIR, "karaoke/rater/tmp/").replace("\\","/")
INS_ROOT = os.path.join(BASE_DIR, "karaoke/rater/Instrumental/").replace("\\","/")


def index(request):
    try:
        recorded_audio = os.path.join(MEDIA_ROOT, "output.wav").replace("\\","/")
        #media_index
        sound1 = AudioSegment.from_file(str(recorded_audio))
        song_name = audio_rater.song_rater(recorded_audio)[0]
        # if (song_name == "Teddy_Afro-ETHIOPIA"):
        sound2 = AudioSegment.from_file(os.path.join(INS_ROOT, "teddy_afro_f.wav").replace("\\","/"))
        
        # else: 
            # sound2 = AudioSegment.from_file("")
        combined = sound2.overlay(sound1)
        converted_audio = os.path.join(MEDIA_ROOT, "combined.wav").replace("\\","/")
        combined.export(converted_audio, format='wav')
        confidence = audio_rater.song_rater(converted_audio)[1]
    except Exception as e:
        print str(e)

    return HttpResponse(str(confidence))
    

'''accepts recorded audio and return the song_name and confidence'''
def voice_request(request):
        try:
            blob = request.FILES['audio']
            nchannels = 2
            sampwidth = 2
            '''44100 + 44100/16[Offset factor]'''
            framerate = 46856.25

            nframes = 101770
             

            name = os.path.join(MEDIA_ROOT,'output.wav')
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


