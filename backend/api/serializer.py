from rest_framework import serializers
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ["id", "title", "description", "done", "published_date"]


class TicketCreateSerializer(TicketSerializer):
    class Meta(TicketSerializer.Meta):
        read_only_fields = ["done"]


