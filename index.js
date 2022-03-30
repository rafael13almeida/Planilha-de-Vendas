'use strict';

//variáveis
let somaAbobrinha = 0;
let somaQueijo = 0;
let somaBrocolis = 0;
let vendaAbobrinha = 0.00;
let vendaQueijo = 0.00;
let vendaBrocolis = 0.00;

//botões
let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click',estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e) {
    if(document.getElementById('abobrinha').checked)
    {
        somaAbobrinha = somaAbobrinha + 1;
        vendaAbobrinha += 25.00;
        document.getElementById('resultadoAbobrinha').innerHTML = somaAbobrinha;
        document.getElementById('vendaAbobrinha').innerHTML = vendaAbobrinha.toFixed(2);
    } 
    else if (document.getElementById('queijo').checked)
    {
        somaQueijo = somaQueijo + 1;
        vendaQueijo += 25.00;
        document.getElementById('resultadoQueijo').innerHTML = somaQueijo;
        document.getElementById('vendaQueijo').innerHTML = vendaQueijo.toFixed(2);
    } 
    else if(document.getElementById('brocolis').checked)
    {
        somaBrocolis = somaBrocolis + 1;
        vendaBrocolis += 25.00;
        document.getElementById('resultadoBrocolis').innerHTML = somaBrocolis;
        document.getElementById('vendaBrocolis').innerHTML = vendaBrocolis.toFixed(2);
    }
}

function estorno(e) {
    if(document.getElementById('abobrinha').checked)
    {
        somaAbobrinha = somaAbobrinha - 1;
        vendaAbobrinha -= 25.00;
        if(somaAbobrinha < 0)
        {
            somaAbobrinha = 0;
            vendaAbobrinha = 0.00;
        }
        document.getElementById('resultadoAbobrinha').innerHTML = somaAbobrinha;
        document.getElementById('vendaAbobrinha').innerHTML = vendaAbobrinha.toFixed(2);
    } 
    else if (document.getElementById('queijo').checked)
    {
        somaQueijo = somaQueijo - 1;
        vendaQueijo -= 25.00;      
        if(somaQueijo < 0)
        {
            somaQueijo = 0;
            vendaQueijo = 0.00;
        }
        document.getElementById('resultadoQueijo').innerHTML = somaQueijo;
        document.getElementById('vendaQueijo').innerHTML = vendaQueijo.toFixed(2);
    } 
    else if(document.getElementById('brocolis').checked)
    {
        somaBrocolis = somaBrocolis - 1;
        vendaBrocolis -= 25.00;
        if(somaBrocolis < 0)
        {
            somaBrocolis = 0;
            vendaBrocolis = 0.00;
        }
        document.getElementById('resultadoBrocolis').innerHTML = somaBrocolis;
        document.getElementById('vendaBrocolis').innerHTML = vendaBrocolis.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}