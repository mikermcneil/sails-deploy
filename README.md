# sails-deploy

This custom command for Sails deploys your app to any PaaS host like Azure, Heroku, EBS, etc. who implements a compatible strategy.


## Installation

In your sails app, run:

```js
npm install sails-deploy
```

And update your `.sailsrc` file to include:

```json
"command": {
  "deploy": "sails-deploy"
}
```


## Usage

You'll want to configure a compatible deployment strategy.


## Development

To fire this puppy up, open the Node REPL and run:

```js
require('./')({config: {deploy: {module: 'sails-deploy-whatever'}}}, console.log)
```


To run the tests:

```bash
$ npm test
```


## License

MIT

&copy; Mike McNeil 2015
