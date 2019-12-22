export default function fetchImg() {
  const url = `https://pixabay.com/api/?key=6396306-bb47bc53f6111712a04accee8&category=nature&editors_choice=true&per_page=2&orientation=horizontal&image_type=photo`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => console.warn('Fetch Error:' + error));
}
