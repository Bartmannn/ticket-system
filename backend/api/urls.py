from django.urls import path
from . import views

urlpatterns = [
    path(
        route="",
        view=views.TicketListCreate.as_view(),
        name="ticket_view_create",
    ),
    path(
        route="<int:pk>/",
        view=views.TicketRetrieveUpdateDestroy.as_view(),
        name="update"
    ),
]
