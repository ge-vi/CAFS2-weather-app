# CAFS2 weather-app

WeatherApp is built using:

- [NodeJS](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/en/4x/api.html)
- [Laravel Mix](https://laravel-mix.com/docs/6.0/what-is-mix)
- [Axios](https://axios-http.com/docs/api_intro)
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction)
- [Handlebars](https://www.npmjs.com/package/express-handlebars)

App uses data provided by:  
_Lithuanian Hydrometeorological Service_  
[Meteo.lt API](https://api.meteo.lt)


---

## Clone, Install, Build, Run

### Get the code

`$ git clone https://github.com/ge-vi/CAFS2-weather-app.git`

### Change directory

`$ cd CAFS2-weather-app`

### Install dependencies

`$ npm install`

### Build and run app

`$ npm run build-and-start`


## Use WeatherApp

In your browser open: http://localhost:3000


---

### Run the app with debugger

On macOS or Linux, run the app with this command:  
`$ DEBUG=cafs2-weather-app:* npm start`

On Windows Command Prompt, use this command:  
`> set DEBUG=cafs2-weather-app:* & npm start`

On Windows PowerShell, use this command:  
`PS> $env:DEBUG='cafs2-weather-app:*'; npm start`

---

Express enables this setting by default when in production mode, i.e.:
process.env.NODE_ENV === "production"
