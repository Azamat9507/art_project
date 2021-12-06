from django.conf import settings

from django.urls import path
from .views import *



urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('works/', works, name='works'),
    path('works/<str:slug>/', works_detail, name='works_detail'),

]
