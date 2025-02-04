# Polis-events

En simpel sida där man kan kolla upp polisens senaste händelser genom att söka på en stad/tid/händelse
## 📂 Projektstruktur
```bash
.
├── src/                # Källkod
│   ├── components/    
│   │   ├── cards.ts
│   │   ├── constants.ts
│   │   ├── form.ts
│   │   ├── history.ts
│   │   ├── loading-spinner.ts
│   │   ├── searchfield.ts
│   │   ├── selectfield.ts
│   ├── Scss/          # Stilmallar
│   │   ├── components/
│   │   │   ├── cards.scss
│   │   │   ├── form.scss
│   │   │   ├── history.scss
│   │   │   ├── searchfield.scss
│   │   │   ├── selectfield.scss
│   │   │   ├── spinner.scss
│   │   ├── layout/
│   │   │   ├── footer.scss
│   │   │   ├── header.scss
│   │   │   ├── main.scss
│   │   ├── utils/
│   │   │   ├── colors.scss
│   │   │   ├── mixins.scss
│   │   │   ├── variables.scss
│   │   ├── index.scss
│   ├── main.scss
│   ├── main.ts
│   ├── render.ts
│   ├── types.ts
│   ├── vite-env.ts
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── tsconfig.json       # TypeScript-konfiguration
└── README.md          # Dokumentation
       
```

## 🚀 Installation

Följ dessa steg för att installera och köra projektet lokalt:

```bash
git clone https://github.com/mLordswe/polisevents
cd projekt
npm install
npm start
```

## 🛠 Teknologier

Projektet är byggt med:

- **vite** 
- **typescript** 
- **scss** 
- **npm** 


## 📡 API Dokumentation

**Bas-URL:** `https://polisen.se/api/events`



**Request:**
```json
{
  "id": "0123456789",
  "datetime": "yyyy-mm-dd",
  "name":"town"
  "summary":"url"
  "type":"trafikolycka"
  "location":{
    "name":"town"
    "gps":"00.000000, 00.000000"
  },
}
```





## 📬 Connect with me


- 💼 [LinkedIn](https://www.linkedin.com/in/alex-csore)


---
