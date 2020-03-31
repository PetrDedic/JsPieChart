window.addEventListener('DOMContentLoaded', (event) => {

    const urlParams = new URLSearchParams(window.location.search);

    let input = urlParams.get("input");
    console.log(input)

    const words = input.split(';');
    console.log(words);

    words.forEach(function(value, key){
      newValue = parseInt(value);
      if (newValue != value) {
        console.log(value + ' neni int');
      }
      else {
        console.log(newValue)
      }
    });

    var sektor = new Sektor(".oj-sektor", {
      circleColor: 'red' 
    });
    sektor.changeAngle(newValue);

    var sektor = new Sektor(".oj-sektor", {
      circleColor: 'yellow' 
    });
    sektor.changeAngle(180);


    var sektor = new Sektor(".oj-sektor-s-tridou", {
      circleColor: 'coral'
    });
    sektor.changeAngle(newValue);
});