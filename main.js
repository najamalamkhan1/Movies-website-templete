function myarr() {
    let a = document.getElementById('m1');
    let b = document.getElementById('m2');
    let c = document.getElementById('m3');
    let d = document.getElementById('m4');
    let e = document.getElementById('m5');
    let f = document.getElementById('m6');
    let i = document.getElementById('input').value;
    if (i == 'Kick') {
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
    }
    else if (i == 'RRR') {
        a.style.display = 'none';
        b.style.display = 'block';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
    }
    else if (i == 'Tarzan') {
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'block';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
    }
    else if (i == 'Furios') {
        a.style.display = 'none';
        c.style.display = 'none';
        b.style.display = 'none';
        d.style.display = 'block';
        e.style.display = 'none';
        f.style.display = 'none';
    }
    else if (i == 'Red') {
        a.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        b.style.display = 'none';
        e.style.display = 'block';
        f.style.display = 'none';
    }
    else if (i == 'Dragon Ball zee') {
        a.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        b.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'block';
    }
    else {
        document.write('Search does not matches ');
    }
}