function Calculadora(){

    this.display = document.querySelector('.display'); // aaa

    this.getClick = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num'))this.addDisplayValue(el);
            if(el.classList.contains('btn-del')) this.delete();
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-eql')) this.equal();
        });
        
    }

    this.enterPressed = () => {
        document.addEventListener('keypress', e => {    
            if(e.keyCode === 13){
                this.equal()
            }
        })
    }


    this.addDisplayValue = el => {
        this.display.value += el.innerText;
        this.display.focus()
    }



    this.inicia = () => {
        this.getClick();
        this.enterPressed();
    }

    this.delete = () =>{
        this.display.value = this.display.value.slice(0, -1)
    }

    this.clear = () => this.display.value = '';
    this.equal = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta)
            if(!conta){
                alert('conta invalida')
                return;
            }
            this.display.value = String(conta)
        } catch (e) { 
            alert('conta invalida');
                return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia()