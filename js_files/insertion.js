async function insertion() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green';
    for (let i = 1; i < ele.length; i++) {
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = '	yellow';

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            console.log('In while loop');
            // color
            ele[j].style.background = 'yellow';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[j + 1].style.background = '#a6001a'
        await waitforme(delay);
        ele[i].style.background = 'green';
        ele[j + 1].style.background = 'green'
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function () {
    const html = "<h5><b>Insertion Sort</b><br>Time Complexity</h5><p> Best case -Ω(n) <br> Worst case -O(n^2)</p><h5>Space Complexity</h5><p>O(1)</p>"

    document.querySelector(".info").style.visibility = "visible"
    document.querySelector(".card-header").innerHTML = html
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


