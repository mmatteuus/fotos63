# Fotos63

Monorepo with a Django REST API and a Bootstrap 5 frontend.

## Run dev

### Backend
```sh
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
Serve the static files:
```sh
npx serve frontend
```
Then open the printed local URL in your browser.

## Deploy
- Backend: configure variables from `.env.example`, set up S3 and Stripe, then deploy to your platform of choice (e.g. Render or Railway).
- Frontend: deploy the `frontend` folder to Netlify and set `ENV_API_BASE` to the backend URL.

Desenvolvido por MtsFerreira
