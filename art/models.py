from django.db import models

# Create your models here.



class Main(models.Model):
    title = models.CharField(max_length=200, verbose_name='Slider name')
    content = models.CharField(max_length=200, verbose_name='Slider description')
    image = models.ImageField(max_length=200, verbose_name='Slider name')




class Product(models.Model):
    image = models.ImageField(verbose_name='Category image')
    title = models.CharField(max_length=200, verbose_name='Category number')
    name = models.CharField(max_length=200, verbose_name='Category name')
    sub_name = models.CharField(max_length=200, verbose_name='Category sub_name')