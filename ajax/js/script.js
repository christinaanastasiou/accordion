(function() {
	var Accordion = {
		init: function(accordionRoot) {
			this.root = accordionRoot;
			var toggles = this.root.find(".card-toggle");
			toggles.on("change", Accordion.onToggle);
		},
		//find the correct card according to the label that was clicked
		//be sure that each card is loaded once
		onToggle: function() {
			var input = $(this);
			var card = Accordion.root.find('[data-card="'+ input.data("toggle") +'"]');
			if (!card.data("fetched")) {
				Accordion.fetchCard(input.data("toggle"), function(cardHtml) {
					card.append(cardHtml);
					card.data("fetched", true);
				})
			}
		},
		//Load the cards using HTTP GET request
		fetchCard: function(cardId, successHandler) {
			$.get("cards/"+ cardId +".html", successHandler);
		}
	};
	Accordion.init($("#accordion"));
})()
