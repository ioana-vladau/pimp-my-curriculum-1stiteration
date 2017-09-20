function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// CURRICULUM HOVER EFFECT

(function() {
            // Initial container width
            var containerWidth = $('.container').outerWidth();
            var addEvent = function(object, type, callback) {
                if (object == null || typeof(object) == 'undefined') return;
                if (object.addEventListener) {
                    object.addEventListener(type, callback, false);
                } else if (object.attachEvent) {
                    object.attachEvent("on" + type, callback);
                } else {
                    object["on" + type] = callback;
                }
            };

            function detectMouseMove() {
                $(document).bind('mousemove', function(e) {
                    $('.hover').css({
                        left: e.pageX
                    });
                    $('.left-side').css({
                        left: e.pageX + 75
                    });
                    var rightSideLeft = containerWidth - e.pageX;
                    $('.right-side').css({
                        right: rightSideLeft
                    });

                });
            }
            detectMouseMove();
            // Detect container width after resizing
            addEvent(window, "resize", function(event) {
                var containerWidth = $('.container').outerWidth();
                $(document).bind('mousemove', function(e) {
                    $('.hover').css({
                        left: e.pageX
                    });
                    $('.left-side').css({
                        left: e.pageX + 75
                    });
                    var rightSideLeft = containerWidth - e.pageX;
                    $('.right-side').css({
                        right: rightSideLeft
                    });
                });
            });

            document.addEventListener('touchmove', function(e) {
                var containerWidth = $('.container').outerWidth();
                $('.hover').css({
                    left: e.pageX
                });
                $('.left-side').css({
                    left: e.pageX + 75
                });
                var rightSideLeft = containerWidth - e.pageX;
                $('.right-side').css({
                    right: rightSideLeft
                });
            }, false);


        })();

// ANIMATE THE MULTIMEDIA DESIGN TEXT - LANDING PAGE
//let span = document.getElementsByTagName('span');
//span.toArray;
//let spanLength = span.length;
//console.log(spanLength);

         window.addEventListener('load', function() {
            let tl = new TimelineMax();
            tl.
            staggerFrom('.menu span', 0.5, {
                    y: -500,
                    ease: SteppedEase.config(10),
                    'font-size': 1,
                 rotation: function() {
                        return Math.random() * 360
                    }
                },
                0.07).staggerTo(".menu span", 0.3, {
                  color:'#f75d45',
                 rotation: function() {
                        return Math.random() * 360
                    }
            }).staggerTo(".menu span", 0.5, {
                'color': "#60c4a5",
                'font-size': 120,
                ease: Expo.easeOut,
                rotation: "0deg"
            }).staggerTo(".menu span", 1, {
                'color':'#f75d45'
            }).staggerFrom("nav a", 1, {
                'opacity': "0",
                y:-20
            }).staggerTo("nav a", 2, {
                "color": "white",
                ease: Bounce.easeOut
            });
 });

window.addEventListener('load', function(){
    let tl2= new TimelineMax();
    tl2.staggerFrom(".main_main", 3, {
        'opacity':"0.1"
    }).staggerTo(".main_main", 3, {
        'opacity':"1"
    })
});


(function() {
    let links =document.querySelectorAll(".core_areas a");
    links.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            console.log(e.target.getAttribute('href'));
            $(".scroll_semesters").load(e.target.getAttribute('href') + " .semester_content")
        })
    })
}())
