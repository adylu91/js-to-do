document.addEventListener("DOMContentLoaded",  function(){
    
    const btnOk = document.querySelector('[data-btnOk]');
    const btnRes = document.querySelector('[data-btnRes]');    

    const inputTopic = document.querySelector('[data-inputTopic]');
    const textArea =  document.querySelector('[data-textArea]');
    const listData =  document.querySelector('[data-sectionThree]');


    btnOk.addEventListener("click", e => {
        let topic = inputTopic.value;
        let text = textArea.value;
        const el = document.createElement("div");
        el.classList.add("sectionThree__data");
        el.innerHTML = `
            <div class="sectionTree__data__text">${topic} --- ${text}</div>
            <button class="btn btn-red" data-btnDel type="reset">X</button>
        `;
        listData.appendChild(el);
    })

    btnRes.addEventListener("click", e => {
        inputTopic.value = "";
        textArea.value = "";
    })

    listData.addEventListener("click", e => {
        const btnDel = document.querySelectorAll('[data-btnDel]');
        btnDel.forEach(el => {
            if(e.target == el){
                e.target.closest(".sectionThree__data").remove();
            } 
        })
    })

})