from django.shortcuts import render
from .models import *
# Create your views here.
def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')

def works(request):
    return render(request,'works')

def works_detail(request, slug):

    products = Products.objects.get(slug=slug)


    data={
        'products':products
    }
    return render(request,'works-item.html', data)
