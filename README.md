<div align="center">
  <img width="159" height="60" src="https://github.com/DenisBakh/productCard/productCard.png">
  <h1>Hotel-Toxin</h1>
  <p>
    Hotel-Toxin - веб страница, разработанная с использованием Gulp 4 по методологии БЭМ с компонентной архитектурой исходных файлов.
  </p>
  <p>Автор разработки приложения: Бахматов Денис</p>
</div>

## Project Links:

* <a href="https://denisbakh.github.io/productCards/dist/index.html" target="_blank">`Главная страница`</a> - https://denisbakh.github.io/productCards/dist/index.html


## Project install:

``` bash
# Download repository:
git clone https://github.com/DenisBakh/productCards productCards

# Go to the app:
cd productCards

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8002/:
gulp

# Build project:
build
```

## Project Structure:

* `dist/` - собранное приложение
* `src/pages` - страницы сайта
* `src/components` - блоки, переменные, миксины, для дальнейших импортов на страницы
* `src/components/static` - дополнительные статичные файлы для сайта, такие как favicon
* `src/components/blocks` - компоненты приложения
* `src/components/_common` - обнулятор CSS, переменные, общие миксины, и т.п.
* `gulpfile.js` - настройки `Gulp`
