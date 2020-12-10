from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^recordings/$', views.voice_request, name='recordings')
]
