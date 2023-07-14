# APP FRONTEND PROJECT

Deploy frontend

2. To run the proyect please execute the next commands:
    -   npm start 
    -   npm dev <- build imagen with webpack

3. To create a docker imagen, please execute in the root project the next commands:

    -   docker build -t app:latest .
    -   docker run -p 4000:4000 app:latest
