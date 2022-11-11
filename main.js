
const form = document.getElementById('frmVerifica');
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const msg = document.getElementById('msg');

form.addEventListener('submit',function(e){
    e.preventDefault();
    validaForm(parseFloat(inputB.value).toFixed(2),parseFloat(inputA.value).toFixed(2));
});

function formataCampos( classA, classB){
    inputA.className = classA;
    inputB.className = classB;
    
}

function formataMsg(operador,bg){
    msg.innerHTML= 'B <b>('+inputB.value+')</b> é <b>'+operador+'</b> que <b>A ('+inputA.value+')</b>';
    msg.style.display = 'block';
    msg.className = bg;
}

function validaForm(b,a){
    if(a === b){
        formataCampos('input-warning','input-warning');
        formataMsg('igual','bg-warning');
    }else if( b < a){
        formataCampos('input-error','input-error');
        formataMsg('menor','bg-error');
    }else{
        formataCampos('input-success','input-success');
        formataMsg('maior','bg-success');
    }
    inputA.value ='';
    inputB.value = '';
};


