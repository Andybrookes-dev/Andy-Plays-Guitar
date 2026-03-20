from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import GuitarTab
from .serializers import GuitarTabSerializer

class TabListCreateView(generics.ListCreateAPIView):
    queryset = GuitarTab.objects.all()
    serializer_class = GuitarTabSerializer

class TabDetailView(generics.RetrieveAPIView):
    queryset = GuitarTab.objects.all()
    serializer_class = GuitarTabSerializer
