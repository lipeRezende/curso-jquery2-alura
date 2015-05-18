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

		function calculaCarrinho () {
			var itens = $(".item-total");
			var total =0,valor =0;
			$.each(itens, function(i,item) {
				valor = parseFloat($(item).text());
				total += valor;
			});
			$('#valor-total').text(total);
			$('#quantidade-de-itens').text(itens.length);
		};
		var undo = function() {
			var itens = $("tr:hidden");
			itens.show();
			itens.addClass("recuperado");
		};


$(calculaCarrinho);
$(".remove-item").click(removeItem);
$("#undo").click(undo);