from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

def upload_path(instance, filename):
    """
    generate unique file name for each video
    """
    now = timezone.now()
    now_string = now.strftime("%d-%m-%Y %H:%M:%S")
    new_filename = now_string + filename
    return "/ ".join(["audio/",new_filename])

class RecordedAudio(models.Model):
    audio = models.FileField(upload_to=upload_path, null=True, blank=True, max_length=500)
    def __str__(self):
        return str(self.id)



