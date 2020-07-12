document.getElementById('inputField').addEventListener("keyup", searchImg);

function searchImg() {

  const input = document.getElementById('inputField').value.toUpperCase();
  const imgs = document.querySelectorAll('#image-gallery a');


  for (i = 0; i < imgs.length; i ++){
    const imgCaption = document.getElementsByTagName('a')[i].getAttribute('data-title').toUpperCase();
    const indexSearch = imgCaption.indexOf(input);
    if(indexSearch > -1) {
      $(document.getElementsByTagName('a')[i]).fadeIn();
    } else {
      $(document.getElementsByTagName('a')[i]).fadeOut();
    }
  }
}
