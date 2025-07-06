# Mini Ticket System – Django + Angular

Projekt rekrutacyjny: uproszczony system zgłoszeń (tickets), składający się z REST API (Django + DRF) oraz frontendu (Angular). Pozwala na tworzenie, przeglądanie, aktualizowanie i usuwanie zgłoszeń.

## Wymagania

- Python 3.10+
- Node.js + npm
- Angular CLI

## Uruchomienie projektu

### Backend (Django)

```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

Angular komunikuje się z backendem przez http://localhost:8000/api/tickets/
Token statyczny: Token simple_secret_token

---

## Użyte technologie

- Django
- Django REST Framework
- Angular 20
- TypeScript
- Bootstrap 5

## Autoryzacja

Backend zabezpieczony tokenem w nagłówku HTTP:
Authorization: Token simple_secret_token
W Angularze token jest dołączany automatycznie przez `HttpHeaders`.

## Funkcjonalności

- Dodawanie zgłoszenia (POST)
- Lista zgłoszeń (GET)
- Szczegóły zgłoszenia (GET)
- Aktualizacja statusu (PUT)
- Usuwanie zgłoszenia (DELETE)
