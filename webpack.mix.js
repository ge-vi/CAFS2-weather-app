const mix = require('laravel-mix');

// mix.setPublicPath('public');

if (mix.inProduction()) {
  mix.sourceMaps();
}

mix.sass('public/stylesheets/style.scss', 'public/stylesheets/style.css');
