		var removeItem = function(event) {
			event.preventDefault();

			var self = $(this); 
    		self.closest('tr').hide();

    		/* -- Navegando entre a arvore do html
    		//var itemTotal = self.parent().siblings('.item-total').text();
    		var itemTotal = self.closest('tr').find('.item-total').text();
    		var total = $('#valor-total').text();
    		var novoTotal = parseFloat(total - itemTotal);
    		$('#valor-total').text(novoTotal);
    		
			/ Atualiza quantidade do carrinho
			var quantidadeAtual = $('#quantidade-de-itens').text();
			var novaQuantidade = parseInt(quantidadeAtual)-1;
			$('#quantidade-de-itens').text(novaQuantidade);
			*/

			calculaCarrinho();
		};

		var undo = function() {
			var carrinho = $(this).closest(".carrinho");
			var itens = carrinho.find("tr:visible");
			itens.removeClass("recuperado");
			itens = carrinho.find("tr:hidden");
			itens.show();
			itens.addClass("recuperado");
			
			calculaCarrinho();
		};

		function calculaCarrinho () {
			var carrinhos = $(".carrinho");
			carrinhos.each(function() {
				var carrinho = $(this);
				var itens = carrinho.find(".item-total:visible");
				var total =0,valor =0;
				$.each(itens, function(i,item) {
					valor = parseFloat($(item).text());
					total += valor;
				});
				carrinho.find('.valor-total').text(total);
				carrinho.find('.quantidade-de-itens').text(itens.length);
			});
		};

		var umaPropaganda = function() {
			var propagandas = ["O que acha de comprar uma motocicleta?",
               "O que acha de comprar uma lancha?",
               "O que acha de comprar uma bicicleta?",
               "O que acha de comprar uma carro?"
               ];
	        var posisaoSelecionada = Math.floor(propagandas.length * Math.random());
	        var texto = propagandas[posisaoSelecionada];
	        var tr =$("<tr>").addClass('propaganda');
	        tr.append($("<td>").attr("colspan", 6));
	        tr.find("td").text(texto);
	        return tr;
		};

var aposInicializado = function() {
	$(calculaCarrinho);
	$(".remove-item").click(removeItem);
	$(".undo").click(undo);
	$('tr:nth-child(3n),tr:last').each(function() {
		umaPropaganda().insertAfter($(this));
	});

};

$(aposInicializado);
