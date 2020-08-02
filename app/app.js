function autoScroll(view) {
    var top = document.getElementById(view).offsetTop;
    window.scrollTo({top:top-40,behavior:'smooth'});
}
function backToTop(){
    window.scrollTo({top:0,behavior:'smooth'});
}
document.addEventListener('scroll', function () {
    var abt = document.getElementById('abt').getBoundingClientRect().top;
    var skl = document.getElementById('skl').getBoundingClientRect().top;
    var hm = document.getElementById('home').getBoundingClientRect().top;
    var els = this.querySelectorAll('.mnt-active');
    [].forEach.call(els, function (el) {
        if (skl < window.scrollY) {
            el.classList.remove('mnt-active');
            document.getElementById('skmnt').classList.add('mnt-active');
        } else if (abt < window.scrollY) {
            el.classList.remove('mnt-active');
            document.getElementById('abmnt').classList.add('mnt-active');
        }
        else {
            el.classList.remove('mnt-active');
            document.getElementById('hmnt').classList.add('mnt-active');
        }
    });
});

