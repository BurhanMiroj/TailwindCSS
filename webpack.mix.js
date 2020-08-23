const mix = require("laravel-mix");

mix
  .postCss("resources/css/min.css", "public/css", [
      require('tailwindcss')
  ])
  .setPublicPath("public");
