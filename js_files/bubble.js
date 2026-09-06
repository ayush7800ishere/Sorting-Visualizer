async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        console.log('In ith loop');
        for (let j = 0; j < ele.length - i - 1; j++) {
            console.log('In jth loop');
            ele[j].style.background = '	#f6c700';
            ele[j + 1].style.background = '	#f6c700';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = '	#a6001a';
            ele[j + 1].style.background = '	#a6001a';
        }
        ele[ele.length - 1 - i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    const html = "<h5><b>Bubble Sort</b><br>Time Complexity</h5><p> Best case -Ω(n) <br> Worst case -O(n^2)</p><h5>Space Complexity</h5><p>O(1)</p>"
    document.querySelector(".info").style.visibility = "visible"

    document.querySelector(".card-header").innerHTML = html
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
