from karaoke import models
from rest_framework import serializers

class RecordedAudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.RecordedAudio
        fields = '__all__'
