let stars = document.getElementById('stars'),
    moon = document.getElementById('moon'),
    mount2 = document.getElementById('mount3'),
    mount3 = document.getElementById('mount4'),
    river = document.getElementById('river'),
    boat = document.getElementById('boat'),
    mount4 = document.getElementById('mount7'),
    nouvil = document.querySelector('.nouvil');

window.onscroll = () =>{
    let v = scrollY;
    stars.style.left = v + 'px';
    moon.style.top = v * 4 + 'px';
    mount2.style.top = v * 2 +'px';
    mount3.style.top = v * 1.5 +'px';
    river.style.top = v +'px';
    boat.style.top = v +'px';
    boat.style.left = v * 3 +'px';
    if (v >= 67){
        nouvil.style.fontSize = 67 +'px';
        nouvil.style.position = 'fixed';
        if (scrollY >= 335){
            nouvil.style.display = 'none';
        }else {
            nouvil.style.display = 'block';
        }
        if (scrollY >= 127){
            document.querySelector('main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }else {
        nouvil.style.fontSize = 25 +'px';
    }

}


