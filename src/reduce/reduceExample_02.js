// "()()()()"
// "(((())))"
// "))))"
// "()))))"
// ")("

function balancedParens(string) {
	return !string.split("").reduce((previous, char) => {
		if (previous < 0) return previous;
		if (char === "(") return ++previous;
		else if (char === ")") return --previous;
		return previous;
	}, 0);
}

console.log(balancedParens("()()()()"));
console.log(balancedParens("(((())))"));
console.log(balancedParens("))))"));
console.log(balancedParens("()))))"));
console.log(balancedParens(")("));
