function Centaur (one, two) {
	this.name = one;
	this.breed = two;
	this.cranky = false;
	this.standing = true;
	this.sleep = function() {return 'NO!'};
	var count = 0;
	this.shoot = function () {
		count++;
		if(count >= 3){
			this.cranky = true;
			return 'NO!';
		};
		return 'Twang!!!'
	};
	this.run = function () {
		count++;
		if(count >= 3){
			this.cranky = true;
		}
		return 'Clop clop clop clop!!!';
	};
};

module.exports = Centaur;
