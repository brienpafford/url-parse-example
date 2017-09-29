## URL Parse Example ##

Getting Started

 * Clone the Repo
 * Run  `npm i && npm start`
 * The app will be served to  `localhost:9000/`


I chose option B, and used Angular 1 since it was easiest for me to get started up quickly (most familiarity).

Form validation can be handled to ensure a user inputs a proper `'https://**.com'` URL.

The app can be wired to a backend, where I have the `vm.getURL()` function in the `HomeController`. Instead of Ajax-calling the URL, and submitting it to the `vm.getLinks` method, that method can wait for a response from the backend of links from the URL. The UI can then display a success (as you see) or a failure, based on a response from the back end.


The app will not function at the moment (since it is client-only) without CORS being enabled. If on a Mac, you can open a Chrome instance with it enabled by entering the following in your terminal:

`open -a Google\ Chrome --args --disable-web-security --user-data-dir`

Then navigate to `localhost:9000/`
