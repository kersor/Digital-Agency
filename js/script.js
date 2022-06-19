const mobileDevice = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return (
            mobileDevice.Android() || mobileDevice.BlackBerry() || mobileDevice.IOS() ||
            mobileDevice.Opera()|| mobileDevice.Windows()
        );
    }
}


if(mobileDevice.any()){
    document.body.classList.toggle('_mobile');
}else{
    document.body.classList.toggle('_pc');
}

const menuIcon = document.querySelector('.header__icon');
if(menuIcon){
    const menuBody = document.querySelector('.menu__body');
    const menuLogo = document.querySelector('.header__logo');

    menuIcon.addEventListener('click', function(e){
        menuBody.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
        menuLogo.classList.toggle('_active');
    })
}