
### Installing Dependencies

The application relies upon various JS libraries, such as AngularJS and jQuery, and Node.js tools,
such as [karma] and [Protractor]. You can install these by running:

```
npm install
```


### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
  running.


## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  lib/...                --> 3rd party JS/CSS libraries, including AngularJS and jQuery (copied over from `node_modules/`)
  ngCart/...                --> files for the `Cart` module, including JS source code, HTML templates, specs
  reataurant-detail/...       --> files for the `reataurantDetail` module, including JS source code, HTML templates, specs
  reataurant-list/...         --> files for the `restaurantList` module, including JS source code, HTML templates, specs
  reataurant-delete/...       --> files for the `restaurantDelete` module, including JS source code, HTML templates, specs
  reataurant-new/...          --> files for the `restaurantNew` module, including JS source code, HTML templates, specs
  reataurant-edit/...         --> files for the `restaurantEdit` module, including JS source code, HTML templates, specs
  app.config.js          --> app-wide configuration of AngularJS services
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)
  
node_modules/...         --> 3rd party libraries and development tools (fetched using `npm`)
scripts/                 --> handy scripts
  private/...            --> private scripts used by the AngularJS Team to maintain this repo
  update-repo.sh         --> script for pulling down the latest version of this repo (!!! DELETES ALL CHANGES YOU HAVE MADE !!!)
karma.conf.js            --> config file for running unit tests with Karma

```
