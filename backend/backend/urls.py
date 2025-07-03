from django.urls import path, include

urlpatterns = [
    path("api/tickets/", include("api.urls"))
]
