[![Build Status](https://travis-ci.com/kuzditomi/portfolio-viewer.svg?branch=master)](https://travis-ci.com/kuzditomi/portfolio-viewer)

# portfolio-viewer

You can import flex queries from IB and display stuff

LIVE(old static version): [https://kuzditomi.github.io/portfolio-viewer](https://kuzditomi.github.io/portfolio-viewer)

# Prerequisites
- Nodejs installed
- Docker installed
- Dotnet core 3.1 sdk installed

# Frontend
A react application in the `frontend` folder.

# Backend
ASP.NET core application in the `api` folder.

# How to run

1. start the frontend app
    ```
    npm run start
    ```

2. start the backend app
    ```
    dotnet run --project Portfolio.Web
    ```

3. start the reverse proxy
    ```
    docker-compose up -d
    ```
You can finally access the app on http://localhost