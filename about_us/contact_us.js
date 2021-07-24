const input_elements = document.getElementsByClassName('user_input_ele');
Array.from(input_elements).forEach(element => {
    console.log(element);
    element.onfocus = function () {
        //selecting svg icon for each input ele
        element.parentElement.getElementsByTagName('svg')[0].style.stroke = 'rgb(34, 93, 253)';
    }
    element.onblur = function () {
        console.log('jb');
        //selecting svg icon for each input ele
        element.parentElement.getElementsByTagName('svg')[0].style.stroke = 'var(--white_secondary_font)';
    }


});