# 🎬 Movie Watchlist — Frontend

אפליקציית React לניהול רשימת סרטים. מתחברת ל-Backend (Express + MongoDB) דרך axios.

## 🔗 קישורים

- **Frontend (live):** https://frontend-eight-taupe-82d9lpmm3i.vercel.app
- **Backend (live):** https://svexam-backend-production-cd91.up.railway.app
- **Backend repo:** https://github.com/talstilkol/svexam-backend

## 📄 עמודים

| נתיב | תיאור |
|------|-------|
| `/all-movies` | רשימת כל הסרטים + כפתור מחיקה |
| `/add-movie` | הוספת סרט עם ולידציה + יצירת תיאור ע"י AI |
| `/search-movies` | חיפוש חי לפי כותרת (ללא כפתור) |

## 🛠️ הרצה מקומית

```bash
npm install
npm run dev
```

יש להגדיר ב-`.env`:
```
VITE_API_URL=http://localhost:4000
```

## 🤖 שימוש ב-AI

נעזרתי ב-AI לבניית שלד הקבצים (axios layer, רכיבי העמודים, ה-router) והבנתי והתאמתי את הקוד.

## 🧱 Stack

React (Vite) · React Router · axios · Tailwind CSS
