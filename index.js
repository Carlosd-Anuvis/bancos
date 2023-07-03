

/*area inicio de sexion */
const loginArea = document.getElementById('login-area'),


   /* llamado de propiedades / insercion al html */

    dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    submitBtn = document.getElementById('submit-btn');

   /* boton de envio */
   /* Registra un evento a un objeto en específico.*/
submitBtn.addEventListener('click', () => {

    /* area inicio de sexion */
    loginArea.style.display = 'none';

    /*eliminar punto de tablero*/
    dashboard.classList.remove('d-none');
})

/* deposito y retiros*/

depositBtn.addEventListener('click', () => {
    const value = depositInput.value; /* valor constante*/
     
    const depositValue = Number(deposit.innerText) + Number(value);  /* valores en cadena convirtiendo en numero */
    const balanceValue = Number(balance.innerText) + Number(value); /* valor del deposito */
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = ''; /* borrar entradas */ 
})



withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;


    
    /* mensaje de alerta / errores  con la condicional if*/ 
    if (Number(value) === 0) {  /* condicional  falso  verdadero  */ 
        alert("No tienes saldo para retirar");
    } else if (Number(value) > Number(balance.innerText)) {
        alert("No tienes tanto saldo para retirar");

    } else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
})