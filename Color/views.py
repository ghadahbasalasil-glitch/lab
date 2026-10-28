from django.shortcuts import render

def color(request):
    return render(request, "Color/color.html")