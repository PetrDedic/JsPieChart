window.addEventListener('DOMContentLoaded', (event) => {

    const urlParams = new URLSearchParams(window.location.search);

    let input = urlParams.get("input");
    console.log(input)

    const words = input.split(';');
    console.log(words);
});