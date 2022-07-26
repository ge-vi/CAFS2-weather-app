const mix = require('laravel-mix');

// mix.setPublicPath('public');

if (mix.inProduction()) {
  mix.sourceMaps();
}

mix.copyDirectory('assets/images', 'public/images');
mix.copy('assets/favicon.ico', 'public/favicon.ico');

mix.sass('assets/stylesheets/style.scss', 'public/stylesheets/style.css');
mix.js('assets/javascripts/script.js', 'public/javascripts/script.js');
