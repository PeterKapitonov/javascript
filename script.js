var num =10;
if (num!=10){
	alert('Верно');
} else {
	alert('Неверно');
}

var min = 70;
if (min >= 0 && min <= 24) {
	alert('В первую четверть.');
}
if (min >= 25 && min <= 50) {
	alert('Во вторую четверть.');
}
if (min >= 51 && min <= 75) {
	alert('В третью четверть.');
}
if (min >= 76 && min <= 100) {
	alert('В четвертую четверть.');
}

var lang = 'en';
if (lang == 'ru') {
	var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
alert(arr);

var lang = 'ru';
switch (lang) {
	case 'ru':
		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
alert(arr);

var lang = 'en';
var arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);