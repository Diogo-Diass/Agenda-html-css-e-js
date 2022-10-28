const criarTarefa = (evento) => {
    evento.preventDefault()//impedir que a página seja recarregada ao clicar no botão
    const input = document.querySelector('[data-form-input]')//seletor date-atributex
    const valor = input.value
    const lista = document.querySelector("[data-list]")
   // const tarefa = document.querySelector("[data-linha]")
   const tarefa = document.createElement('li')//ele irá criar uma linha, diferente da de cima onde ele puxa uma linha já feita
    tarefa.classList.add('tarefa')//adicionando a classe tarefa para ter o seu estilo aplicado
    const conteudo = `<p>${valor}</p>`//configurando a variável "valor" como um paragrafo
    
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoExcluir())
    lista.appendChild(tarefa)

input.value=" "

}
const BotaoConcluir = () =>{
    const botaoconcluir = document.createElement('button')

    botaoconcluir .classList.add('clicado')
    botaoconcluir.textContent = 'Concluir'
    botaoconcluir.addEventListener('click',concluirTarefa) 
    return botaoconcluir       
    
    
}
const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle("feito")

}

const BotaoExcluir = () =>{ 
    const botaoExcluir = document.createElement('button')   
    botaoExcluir.classList.add("clicado")
    botaoExcluir.textContent = "Excluir"
    botaoExcluir.addEventListener('click', ExcluirTarefa)
    return botaoExcluir

}
const ExcluirTarefa = (eventoExcluir) =>{
    const excluir = eventoExcluir.target
    const excluirTarefa = excluir.parentElement
    excluirTarefa.remove()

}

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener('click', criarTarefa) 