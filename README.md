# Node + Express + MongoDB template

[![N|Solid](https://cdn-images-1.medium.com/max/1600/0*kJRU-y-GlI_z0i7o.jpg)](https://nodejs.org/es/)

This project is a skeleton for building great back-end apps using Node + Express + MongoDB. It includes Webpack as module bundler + Mocha for tests and hot reloading using nodemon.


### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm run-script start:dev && npm run-script start:watch-server
```

For production environments...

```sh
$ npm build
```
For testing...

```sh
$ npm test
```
Hot reloading of tests

```sh
$ npm test:watch
```

#### Note

If you want to change the bundle name you will have to override the filename property (project-name.js by default) inside the output config in the [pre compilation file](./pre-compilation.js) and [pro compilation file](./pro-compilation.js).


License
----

### Development

You can start building your app by creating .ts classes inside the dao + bs + domain modules. You have available a connection factory builder for mongoDB but you could implement your own.

MIT

**Free Software, Hell Yeah!**