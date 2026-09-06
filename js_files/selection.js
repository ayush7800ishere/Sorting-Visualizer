async function selection() {
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        for (let j = i + 1; j < ele.length; j++) {
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = '#f6c700';

            await waitforme(delay);
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                console.log('In if condition height comparision');
                if (min_index !== i) {
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = '#a6001a';
                }
                min_index = j;
            }
            else {
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = '#a6001a';
            }
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = '#a6001a';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
    const html = "<h5><b>Selection Sort</b><br>Time Complexity</h5><p> Best case -O(n^2) <br> Worst case -O(n^2)</p><h5>Space Complexity</h5><p>O(1)</p>"

    document.querySelector(".info").style.visibility = "visible"
    document.querySelector(".card-header").innerHTML = html
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
