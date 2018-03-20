function Unicorn(one, two, three) {
	this.name = one;
	this.color = two || 'white';
	this.isWhite = function () {return false};
	this.says = function (three) {return '**;* ' + three + ' *;**'};
}

module.exports = Unicorn;
