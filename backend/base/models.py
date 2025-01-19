from django.db import models
from django.contrib.auth.models import AbstractUser

class MyUser(AbstractUser):
    bio = models.CharField(max_length=500)
    profile_image = models.ImageField(upload_to='profile_image/', blank = True, null=True)
    

