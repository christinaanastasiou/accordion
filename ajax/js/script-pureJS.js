(function() {
	var Accordion = {
		init: function(accordionRoot) {
			this.root = accordionRoot;
			var toggles = this.root.querySelectorAll(".card-toggle");
			toggles.forEach(function(toggle) {
				toggle.addEventListener("change", Accordion.onToggle);
			});
		},

		onToggle: function() {
			var input = this;
			var card = Accordion.root.querySelector('[data-card="'+ input.dataset.toggle +'"]');
			if (!card.dataset.fetched) {
				Accordion.fetchCard(input.dataset.toggle, function(cardHtml) {
					card.innerHTML = cardHtml;
					card.dataset.fetched = true;
				})
			}
		},

		fetchCard: function(cardId, successHandler) {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					successHandler(this.responseText);
				}
			};
			xhttp.open("GET", "cards/"+ cardId +".html", true);
			xhttp.send();
		}
	};
	Accordion.init(document.getElementById("accordion"));
})()
