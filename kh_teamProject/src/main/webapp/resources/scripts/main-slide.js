window.addEventListener("load", function(){
    let placeListArea = document.querySelector(".place-list-area");

    placeListArea.addEventListener("click", function(e) {
        // if(e.target.nodeName != "SPAN") {                   // 클릭한것이 span이 아니면 리턴
        //     console.log("스팬 아님");
        //     return;
        // } else {                                            // span이면
        //     if(e.target.className == "prev-arrow") {             // 클래스명이 prev-arrow면
        //         prevMove(e);                                     // prevMove호출
        //     } else {
        //         nextMove(e);
        //     }
        // }
        
        currentNode = e.target;
        if(e.target.nodeName == "I") {
            currentNode = currentNode.parentElement;
        }

        // console.log(currentNode);
        if(currentNode.className == "prev-arrow") {
            prevMove(currentNode);
        } else {
            nextMove(currentNode);
        }
    })


    // 공통 
    let offset = document.querySelector(".slide-container").clientWidth + 20;
    let placeListWidth = document.querySelector(".place-list").clientWidth;
    let placeItemWidth = 305;


    function prevMove(currentNode) {
        let prevBtn = currentNode;
        let nextBtn = prevBtn.nextElementSibling;
        let placeList = nextBtn.nextElementSibling;

        // console.log(prevBtn);
        // console.log(nextBtn);
        nextBtn.style.display = "flex";
        let currentLeft = placeList.offsetLeft;
        let nextOffset = placeListWidth + currentLeft;
        
        if(nextOffset <= offset) {
            placeList.style.left = placeList.offsetLeft + offset + "px";
        } else if(nextOffset > offset) {
            placeList.style.left = 0 + "px";
            prevBtn.style.display = "none";
        }
    }

    function nextMove(currentNode){
        let nextBtn = currentNode;

        let prevBtn = nextBtn.previousElementSibling;
        let placeList = nextBtn.nextElementSibling;


        prevBtn.style.display = "flex";
        let currentLeft = placeList.offsetLeft;
        let newOffset = offset + -currentLeft;
        let nextOffset = placeListWidth - newOffset;
        
        if(nextOffset > offset) {
            placeList.style.left = placeList.offsetLeft - offset + "px";
        } else if(nextOffset <= offset) {
            placeList.style.left = placeList.offsetLeft - nextOffset + "px";
            nextBtn.style.display = "none";
        }
    }

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true
    });
});