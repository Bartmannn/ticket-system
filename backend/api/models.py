from django.db import models


class Ticket(models.Model):

    title = models.CharField(max_length=100)
    description = models.TextField()
    done = models.BooleanField(default=False)
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

