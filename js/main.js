;(function() {
	/**
	 * Weather Card
	 */
	var UsersCard = new CardPrototype({

		/**
		 * @var string 	The name of this card
		 */
		name: "UsersCard",

		version: "",

		preload: function() {},
		render: function() {
			var self 	= this;

			self.getPage(1, 0);			
		},
		
		getPage: function(page, count) {
			var self = this;

			$.ajax({
				url: $("#endpoint").attr("data-attr-endpoint") + "/api/user/index?page=" + page,
				type: "GET",
				headers: CiiMSDashboard.getRequestHeaders(),
				success: function(data, textStatus, jqXHR) {
					count += data.response.length;
					self.getPage(++page, count);
				},
				error: function() {
					$("#" + self.id + " .count").text(count);
				}
			});
		}
	});
}(this));
