# ATLAS_OSINT

🔍 **Комплексна OSINT платформа для настільних комп'ютерів**

ATLAS_OSINT — це потужна система для збору, пошуку та аналізу даних з усіх доступних публічних джерел. Призначена для глибокого дослідження інформації про людей, компанії, домени та IP адреси.

## 🎯 Основні можливості

### 📊 Збір даних (17+ джерел)
- **Люди & Контакти**: LinkedIn, Twitter, GitHub, Facebook, Email lookup
- **Домени & IP**: WHOIS, DNS, Shodan, Censys, VirusTotal, SSL сертифікати
- **Соціальні мережі**: Twitter, Instagram, TikTok, Reddit, YouTube, Telegram
- **Витоки даних**: HaveIBeenPwned, Exposed databases, Pastebin
- **Геолокація & Бізнес**: Google Maps, реєстри компаній
- **Новини & Моніторинг**: RSS, новинні сайти, публічні оголошення

### 🔎 Пошук
- Розширена система фільтрів
- Пошук за різними критеріями
- Кешування результатів
- Експорт даних (JSON, CSV, PDF)

### 📈 Аналіз даних
- Графіки та статистика
- Виявлення зв'язків між сутностями
- Часові лінії подій
- Теплові карти географічних розподілів
- Побудова графів зв'язків

## 🛠️ Технічний стек

- **Frontend**: Electron + React + TypeScript
- **Backend**: Python + FastAPI
- **База даних**: SQLite3
- **Аналіз**: Pandas, Matplotlib, NetworkX, Seaborn
- **API клієнти**: requests, aiohttp, httpx

## 📁 Структура проекту

```
ATLAS_OSINT/
├── frontend/              # Electron + React додаток
│   ├── src/
│   │   ├── components/    # React компоненти UI
│   │   ├── pages/         # Сторінки додатку
│   │   ├── services/      # API клієнти
│   │   └── utils/         # Утиліти
│   ├── public/
│   └── package.json
│
├── backend/               # Python API сервер
│   ├── app/
│   │   ├── main.py        # Entry point
│   │   ├── api/           # API маршрути
│   │   ├── services/      # Бізнес логіка
│   │   └── models/        # Схеми даних
│   │
│   ├── collectors/        # Модулі збору даних
│   │   ├── social_media/  # Twitter, Instagram, TikTok
│   │   ├── people/        # LinkedIn, GitHub, Email lookup
│   │   ├── domains/       # WHOIS, DNS, SSL
│   │   ├── security/      # HaveIBeenPwned, Exposed DB
│   │   ├── intelligence/  # Shodan, Censys, VirusTotal
│   │   ├── news/          # RSS, новини
│   │   ├── geo/           # Геолокація, карти
│   │   └── business/      # Компанії, реквізити
│   │
│   ├── search_engine/     # Пошукова система
│   │   ├── indexer.py     # Індексування даних
│   │   ├── query.py       # Обробка запитів
│   │   └── filters.py     # Фільтри
│   │
│   ├── analyzer/          # Аналіз даних
│   │   ├── statistics.py  # Статистика
│   │   ├── relationships.py # Зв'язки
│   │   ├── graphs.py      # Графи зв'язків
│   │   └── visualization.py # Візуалізація
│   │
│   ├── database/          # ORM, схеми
│   │   ├── models.py      # SQLAlchemy моделі
│   │   └── schema.sql     # Схема БД
│   │
│   └── requirements.txt
│
├── config/
│   ├── settings.py        # Конфігурація
│   └── secrets.example.env # Приклад API ключів
│
├── tests/                 # Unit тести
├── docs/                  # Документація
├── docker-compose.yml     # Docker контейнери
├── .gitignore
└── README.md
```

## 🚀 Швидкий старт

### Вимоги
- Python 3.9+
- Node.js 16+
- SQLite3

### Установка

1. **Клонувати репозиторій**
```bash
git clone https://github.com/AlexKingGT/ATLAS_OSINT.git
cd ATLAS_OSINT
```

2. **Встановити backend залежності**
```bash
cd backend
pip install -r requirements.txt
```

3. **Встановити frontend залежності**
```bash
cd ../frontend
npm install
```

4. **Налаштувати API ключі**
```bash
cp config/secrets.example.env config/secrets.env
# Заповніть ваші API ключі
```

5. **Запустити backend**
```bash
cd backend
python -m app.main
```

6. **Запустити frontend (в новому терміналі)**
```bash
cd frontend
npm start
```

## 📚 Документація

- [Архітектура](./docs/architecture.md)
- [API Reference](./docs/api.md)
- [Колекторів](./docs/collectors.md)
- [Розроблення](./docs/development.md)

## ⚖️ Правові застереження

⚠️ **ATLAS_OSINT призначена виключно для законного використання:**
- Використовуйте лише для дослідження публічно доступної інформації
- Дотримуйтеся місцевих законів про збір даних
- Не порушуйте Terms of Service сервісів
- Використовуйте відповідально та етично

Розробник не несе відповідальність за неправомірне використання.

## 📄 Ліцензія

MIT License - див. [LICENSE](./LICENSE)

## 👨‍💻 Автор

**AlexKingGT** - Initial development

## 🤝 Внески

Приймаються Pull Requests! Для великих змін спочатку відкрийте Issue для обговорення.

---

**Останнє оновлення**: 2026-06-09