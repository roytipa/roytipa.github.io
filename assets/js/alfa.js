var addrgallery = "#";

function ekos(e) {
    var l = document.getElementById(e).innerHTML.split("|"),
        n = l[0],
        t = l[3],
        d = l[1];
    addrgallery = t.replace("$", "&");
    var a = l[2].replace("$", "&"),
        o = document.getElementById("myModal"),
        e = document.getElementById("img01"),
        t = document.getElementById("caption"),
        l = document.getElementById("opengal");
        m = document.getElementById("btndwn")
        m2 = a.replace("view", "download");
    l.style.display = "#" != addrgallery ? "" : "none", "-" == a && (a = picdefault), o.style.display = "block", e.src = a, t.innerHTML = n + "<br>" + d;
    m.href= a;
}

function tutup() {
    document.getElementById("myModal").style.display = "none"
}
