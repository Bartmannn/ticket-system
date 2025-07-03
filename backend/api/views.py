from rest_framework import generics
from .models import Ticket
from .serializer import TicketCreateSerializer
from .serializer import TicketSerializer


class TicketListCreate(generics.ListCreateAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketCreateSerializer


class TicketRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
    lookup_field = "pk"
            
