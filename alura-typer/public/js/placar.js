function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "André";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);

}

function novaLinha(usuario, numPalavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");
    
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    
    linha.prepend(colunaRemover);
    linha.prepend(colunaPalavras);
    linha.prepend(colunaUsuario);

    return linha;    
}

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}