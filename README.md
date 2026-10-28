# SubStop 💜

Mobilny menedżer subskrypcji z czarnym interfejsem i neonowymi akcentami. Działa w przeglądarce na Androidzie, iOS oraz komputerze.

## Funkcje

- Dodawanie, edycja i usuwanie subskrypcji
- Płatności tygodniowe, miesięczne i roczne
- Przeliczanie kosztów miesięcznych i rocznych
- Terminy nadchodzących płatności i lista kolejnych obciążeń
- Kategorie, status aktywna/nieaktywna i podstawowe statystyki
- Zapis lokalny (`localStorage`), eksport i import danych JSON
- Dodanie skrótu na ekran główny telefonu (PWA)

## Uruchamianie lokalnie

Projekt jest statyczny i nie wymaga instalowania zależności. Uruchom dowolny lokalny serwer HTTP z katalogu `dist`, np.:

```bash
cd dist
python3 -m http.server 8080
```

Otwórz `http://localhost:8080`.

## Struktura

- `dist/index.html` — interfejs i style
- `dist/theme.css` — czarno-neonowy motyw
- `dist/app.js` — logika i zapis subskrypcji
- `dist/icon.svg` — ikona
- `dist/manifest.webmanifest` — konfiguracja instalacji na ekranie głównym
- `.openai/hosting.json` — konfiguracja istniejącego wdrożenia Sites

## Ważne

To MVP nie łączy się z bankiem, nie pobiera automatycznie subskrypcji i nie wysyła powiadomień push. Dane są przechowywane tylko w bieżącej przeglądarce. Do przeniesienia danych na inne urządzenie użyj eksportu i importu kopii JSON.

## Demo

[Otwórz SubStop](https://substop-bartek-2026.modestfrog17.chatgpt.site) (prywatna wersja testowa, dostęp zależy od uprawnień).
