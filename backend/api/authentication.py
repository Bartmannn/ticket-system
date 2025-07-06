from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings

class StaticTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get("Authorization")
        if token == f"Token {settings.STATIC_API_TOKEN}":
            return (None, None)
        raise AuthenticationFailed("Invalid or missing token.")
