
/* Challenge 1 */ 
function convert(minutes) {
	return minutes*60;
}
/* Challenge 2 */
function footballPoints(wins, draws, losses) {
	return ((wins*3) + (draws*1) + (losses*0));
}
/* Challenge 3 */
function isSameNum(num1, num2) {
	return (num1 === num2);
}
/* Challenge 4 */
function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}
/* Tests */
console.log(convert(5));
console.log(footballPoints(3, 4, 2));
console.log(isSameNum(2,"2"));
console.log(isSameNum(2,2));

