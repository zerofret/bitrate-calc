let filesize = document.getElementById('input_filesize');
let length = document.getElementById('input_length');
let output = document.querySelector('output');
let button = document.querySelector('button');

button.addEventListener('click', () => {
  output.value =
    Math.floor(
      (parseFloat(filesize.value) /
        ((parseFloat(length.value) / 60) * 0.0075) /
        1000) *
        100 *
        0.98 // 0.99 to allow for margin of error
    ) / 100;
});
