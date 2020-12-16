from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^index/$', views.index, name='index'),
    url(r'^recordings/$', views.voice_request, name='recordings')
]
