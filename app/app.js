function autoScroll(view) {
    var top = document.getElementById(view).offsetTop;
    window.scrollTo({top:top-40,behavior:'smooth'});
}
function backToTop(){
    window.scrollTo({top:0,behavior:'smooth'});
}
var abt = document.getElementById('bg1').offsetTop-50;
var skl = document.getElementById('bg2').offsetTop-50;
var hm = document.getElementById('home').offsetTop;
document.addEventListener('scroll', function () {
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

