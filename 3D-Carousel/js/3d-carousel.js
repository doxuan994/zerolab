let animation = function() {
    let a = 1;
    let b = 3;
    let c;
    let d;
    let e = 1;

    function f() {
        if (a < b && e) {
            e = 0;
            c = document.getElementById("item" + a);
            d = document.getElementById("item" + (a + 1));
            setTimeout(function() {
                c.classList.add("left");
                d.classList.add("left");
            }, 100);
            setTimeout(function() {
                c.classList.value = "item";
                d.classList.value = "item active";
                e = 1;
                animation.setNext();
                animation.setPrev();
            }, 1000);
            a++;
        }
    }

    function g() {
        if (a > 1 && e) {
            e = 0;
            c = document.getElementById("item" + a);
            pre = document.getElementById("item" + (a - 1));
            setTimeout(function() {
                pre.classList.add("right");
                c.classList.add("right");
            }, 100);
            setTimeout(function() {
                pre.classList.value = "item active";
                c.classList.value = "item";
                e = 1;
                animation.setNext();
                animation.setPrev();
            }, 1000);
            a--;
        }
    }

    let h = function() {
        if (a < b) {
            d = document.getElementById("item" + (a + 1));
            if (!d.classList.contains("next")) {
                d.classList.add("next");
            }
        }
    };

    let i = function() {
        if (a > 1) {
            pre = document.getElementById("item" + (a - 1));
            if (!pre.classList.contains("prev")) {
                pre.classList.add("prev");
            }
        }
    };

    return {
        left: g,
        right: f,
        setNext: h,
        setPrev: i
    };
}();

animation.setNext();
