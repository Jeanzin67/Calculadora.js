function insertar(num)
{
    let numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}
function limpiar()
    {
        document.getElementById('Resultado').innerHTML = "";
    }
    function retroceso()
        {
            let resultado = document.getElementById('Resultado').innerHTML;
            document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length -1);
         }
function calcular()
     {
     let resultado = document.getElementById('Resultado').innerHTML;
     if(resultado){
        document.getElementById('Resultado').innerHTML = eval(resultado);
     }else{
        document.getElementById('Resultado').innerHTML = "Nada..."
     }
    }

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculadora = document.querySelector(".calculadora.dark");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculadora.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
