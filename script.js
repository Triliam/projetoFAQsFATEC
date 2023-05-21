const pergunta1 = document.getElementById('pergunta-campo-resposta1')
const pergunta2 = document.getElementById('pergunta-campo-resposta2')
const pergunta3 = document.getElementById('pergunta-campo-resposta3')
const pergunta4 = document.getElementById('pergunta-campo-resposta4')
const perguntaAluno = document.getElementById('pergunta-aluno1')

const definirRespostas = () => {
    pergunta1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente."

    pergunta2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente."

    pergunta3.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente."

    pergunta4.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente."

    perguntaAluno.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae perferendis velit veniam natus nesciunt ullam ad illo ex, ab adipisci quod accusamus optio doloribus hic dolores, explicabo minus sapiente."

}

const btnAddPergunta = document.getElementById('botao-adicionar-pergunta')
const btnPerguntasComResposta = document.getElementById('botao-perguntas-com-respostas')
const btnPerguntasSemResposta = document.getElementById('botao-perguntas-sem-respostas')
const btnPerguntasExcluidas = document.getElementById('botao-perguntas-excluidas')
const btnSelecaoPerguntas = document.getElementById('selecao-perguntas')

const campoAddPerguntas = document.getElementById('adicionar-perguntas')
const campoPerguntasComResposta = document.getElementById('perguntas-resposta')
const campoPerguntasSemResposta = document.getElementById('perguntas-sem-resposta')
const campoPerguntasExcluidas = document.getElementById('perguntas-excluidas')
const tituloCampo = document.getElementById('titulo')

const selecionarBtn = (botao) => {
    switch (botao) {
        case "addPergunta":
            if (!btnAddPergunta.classList.contains('selecionado')) {

                if (btnPerguntasComResposta.classList.contains('selecionado')){
                    btnPerguntasComResposta.classList.remove('selecionado')
                    campoPerguntasComResposta.style.display = "none"
                }

                if (btnPerguntasSemResposta.classList.contains('selecionado')){
                    btnPerguntasSemResposta.classList.remove('selecionado')
                    campoPerguntasSemResposta.style.display = "none"
                }

                if (btnPerguntasExcluidas.classList.contains('selecionado')){
                    btnPerguntasExcluidas.classList.remove('selecionado')
                    campoPerguntasExcluidas.style.display = "none"
                }

                btnAddPergunta.classList.add('selecionado')
                campoAddPerguntas.style.display = "block"
                tituloCampo.innerHTML = "ADICIONAR PERGUNTA"
                btnSelecaoPerguntas.style.display = "none"
                
            } else {
                btnAddPergunta.classList.remove('selecionado')
                campoAddPerguntas.style.display = "none"
                tituloCampo.innerHTML = ""
            }
        break

        case "pergunta-com-respostas":
            if (!btnPerguntasComResposta.classList.contains('selecionado')) {

                if (btnAddPergunta.classList.contains('selecionado')){
                    btnAddPergunta.classList.remove('selecionado')
                    campoAddPerguntas.style.display = "none"
                }

                if (btnPerguntasSemResposta.classList.contains('selecionado')){
                    btnPerguntasSemResposta.classList.remove('selecionado')
                    campoPerguntasSemResposta.style.display = "none"
                }

                if (btnPerguntasExcluidas.classList.contains('selecionado')){
                    btnPerguntasExcluidas.classList.remove('selecionado')
                    campoPerguntasExcluidas.style.display = "none"
                }

                btnPerguntasComResposta.classList.add('selecionado')
                campoPerguntasComResposta.style.display = "block"
                tituloCampo.innerHTML = "PERGUNTAS COM RESPOSTAS"
                btnSelecaoPerguntas.style.display = "block"
                
            } else {
                btnPerguntasComResposta.classList.remove('selecionado')
                campoPerguntasComResposta.style.display = "none"
                tituloCampo.innerHTML = ""
                btnSelecaoPerguntas.style.display = "none"
            }
        break

        case "pergunta-sem-respostas":
            if (!btnPerguntasSemResposta.classList.contains('selecionado')) {

                if (btnAddPergunta.classList.contains('selecionado')){
                    btnAddPergunta.classList.remove('selecionado')
                    campoAddPerguntas.style.display = "none"
                }

                if (btnPerguntasComResposta.classList.contains('selecionado')){
                    btnPerguntasComResposta.classList.remove('selecionado')
                    campoPerguntasComResposta.style.display = "none"
                }

                if (btnPerguntasExcluidas.classList.contains('selecionado')){
                    btnPerguntasExcluidas.classList.remove('selecionado')
                    campoPerguntasExcluidas.style.display = "none"
                }

                btnPerguntasSemResposta.classList.add('selecionado')
                campoPerguntasSemResposta.style.display = "block"
                tituloCampo.innerHTML = "PERGUNTAS SEM RESPOSTAS"
                btnSelecaoPerguntas.style.display = "block"
                
            } else {
                btnPerguntasSemResposta.classList.remove('selecionado')
                campoPerguntasSemResposta.style.display = "none"
                tituloCampo.innerHTML = ""
                btnSelecaoPerguntas.style.display = "none"
            }
        break

        case "pergunta-perguntas-excluidas":
            if (!btnPerguntasExcluidas.classList.contains('selecionado')) {

                if (btnAddPergunta.classList.contains('selecionado')){
                    btnAddPergunta.classList.remove('selecionado')
                    campoAddPerguntas.style.display = "none"
                }

                if (btnPerguntasComResposta.classList.contains('selecionado')){
                    btnPerguntasComResposta.classList.remove('selecionado')
                    campoPerguntasComResposta.style.display = "none"
                }

                if (btnPerguntasSemResposta.classList.contains('selecionado')){
                    btnPerguntasSemResposta.classList.remove('selecionado')
                    campoPerguntasSemResposta.style.display = "none"
                }

                btnPerguntasExcluidas.classList.add('selecionado')
                campoPerguntasExcluidas.style.display = "block"
                tituloCampo.innerHTML = "PERGUNTAS EXCLUIDAS"
                btnSelecaoPerguntas.style.display = "block"
                
            } else {
                btnPerguntasExcluidas.classList.remove('selecionado')
                campoPerguntasExcluidas.style.display = "none"
                tituloCampo.innerHTML = ""
                btnSelecaoPerguntas.style.display = "none"
            }
        break
    }
}