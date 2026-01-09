from django.db import models

# Create your models here.
from django.db import models

class GuitarTab(models.Model):
    song_name = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    difficulty = models.CharField(max_length=50)
    tab_text = models.TextField()

    def __str__(self):
        return f"{self.song_name} - {self.artist}"
