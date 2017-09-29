import './home.view.html'

export class HomeController {
  constructor ($http, $scope) {
    'ngInject'

    const vm = $scope;
    const http = $http;

    let displayLinks = false;

    vm.inputURL = 'https://www.google.com/';

/*
  The app can be wired to a backend, where I have the vm.getURL()
  function in the HomeController. Instead of it Ajax-calling the URL,
  and submitting it to the vm.getLinks method, that method can wait
  for a response from the backend of links from the URL.

  The UI can then display a success (as you see) or a failure,
  based on a response from the back end.
*/

    vm.getURL = () => {
      http.get(vm.inputURL).then(
         response => {
           console.log(response.status);
           vm.getLinks(response.data);
         },
         response => {
           console.log(response.status);
           alert('Error Parsing URL -- consider enablings CORS in your browser');
         });
      }

      vm.getLinks = (html) => {
        let container = document.createElement("div");
        container.innerHTML = html;

        let anchors = container.getElementsByTagName("a");
        let list = [];

        for (let i = 0; i < anchors.length; i++) {
            let href = anchors[i].href;
            let text = anchors[i].textContent;
            list.push([text, href]);
        }
        vm.linkList = list;
        vm.displayLinks = true;
      }

  }
}
