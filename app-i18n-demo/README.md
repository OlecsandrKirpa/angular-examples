# AppI18nDemo
[DOCUMENTATION HERE](https://lokalise.com/blog/angular-i18n/?utm_source=google&utm_medium=cpc&utm_campaign=GENERIC_i18n-reactintl&gclid=Cj0KCQiA2sqOBhCGARIsAPuPK0gtYINL8Ww0Uu3IdiqN_j1cpSLvXo4Nt54qCbncmLE0JUowm-dbsn0aArvmEALw_wcB)
- `ng new app-i18n-demo`
- `ng serve --open --port 4200`
- edit angular.json adding necessary rows.
- Add some code with `i18n` directive. You can add it like
```html
<h1 i18n> Ciao mondo </h1>
<h1 i18n="Hello World"> Ciao mondo </h1>
<h1 i18n="welcome-message|Hello World"> Ciao mondo </h1>
<h1 i18n="welcome-message|Hello World@@helloworld"> Ciao mondo </h1>
<h1 i18n="@@helloworld"> Ciao mondo </h1>

```
- `ng extract-i18n --output-path src/i18n`
- in order to start server in a custom language, use `ng serve --open --configuration=ru`

[LOOK HERE FOR ROUTER translation](https://medium.com/wizdm-genesys/angular-runtime-i18n-made-simple-1f1c510da686)