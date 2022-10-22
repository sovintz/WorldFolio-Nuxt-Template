# WorldFolio | NuxtJS Portfolio Template

## Template-specific instructions

*For NuxtJS-specific instructions, please refer to the [Build Setup](#build-setup) chapter of this readme.*

### nuxt.config.js
In this file you configure all instance-specific properties. Simply search the file for the `// TODO:` keyword and configure as desired.

#### @nuxtjs/i18n
This package is used to add localization features to your portfolio website. Read more about it in its [documentation](https://i18n.nuxtjs.org/).

Change the `baseUrl` value of the `@nuxtjs/i18n` module to match your domain name.

To create a locale, make a copy of the `en.json` file in the `_localization` folder and rename it to `<new_locale>.json` where `<new locale>` matches the [ISO 639-1 two-letter code standard](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

Add a new locale object to the `locales` array of the `@nuxtjs/i18n` module, where:
- `code` stands for ISO 639-1 two-letter code
- `iso` stands for ISO 639-1 two-letter code **or** ISO 639-1 and ISO 3166-1 alpha-2 codes, separated by hyphen (e.g. 'en-US')
- `name` stands for the name of the language
- `file` stands for the name of the localization file in the `_localization` directory

#### @nuxtjs/recaptcha
To avoid spam, the template uses the @nuxtjs/recaptcha package.
The easiest way to use it is to generate a [Recaptcha v3](https://developers.google.com/recaptcha/docs/v3) Site Key and insert it as a value of `siteKey`.
More about the configuration of the package can be read [here](https://www.npmjs.com/package/@nuxtjs/recaptcha).

#### @nuxtjs/axios
This package is used to send contact form data.
For basic use, just change the `baseURL` to an address that accepts a `POST` request with json data in the body.
The body object corresponds to the form fields and contains the following keys:
- name,
- email,
- message,
- captchaToken

More about @nuxtjs/axios can be found [here](https://axios.nuxtjs.org/).

#### @nuxtjs/vuetify
Vuetify is a Vue UI library, built with Material Design in mind.

To configure the theme colors of your WordFolio instance, change the theme object colors using Vuetify Colors or HEX values.
Vuetify offers a lot more configuration options and the NuxtJS specific stuff can be found [here](https://www.npmjs.com/package/@nuxtjs/vuetify), but Vuetify's [website](https://vuetifyjs.com/en/) has a lot of documentation to help you start using their design framework.

### Social icons

You can customize your list of social links that appears in the header and footer of your portfolio.
To change them, simply add or remove objects from the `socialIcons` array in the localization files.

To specify the image, search for a suitable on [materialdesignicons.com](https://materialdesignicons.com/) and append `mdi-` to the icon name. Then use it as the `icon` property of the object.

To specify the URL of the icon, set the `url` property of the object as desired.

For example to create a Facebook link, add `{"icon": "mdi-twitter", "url": "https://twitter.com/janesmith"},` to the `socialIcons` object of the localization file.

This allows you to create different social links for different languages, if needed.

### Images

#### Header image, profile image & project images.

To change the header image and profile image, go to the `static/images` directory and replace `header.jpg` & `profile_picture.jpg` respectively.
Remember not to change the file names.

Upload all project images to the `static/images` directory and name them as you wish.
Then refer to them in your localization files within the project objects, for example: ` "image": "project.jpg"`.
This way, you can use different images for different languages, if needed.

#### Favicon

To change the favicon, replace the `favicon.ico` file in the `static` directory.
Remember not to change the file name.
To generate a favicon, similar to the one provided you can use the [Favicon Generator](https://favicon.io/favicon-generator/).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

---

### Attribution

Header and profile picture source: 
<a href="https://www.freepik.com/free-photo/portrait-business-woman-working-laptop_2859029.htm#&position=0&from_view=author">Image by senivpetro</a> on Freepik

Project picture source: [rawpixel](https://www.rawpixel.com/image/3286911/free-photo-image-building-office-architecture)
