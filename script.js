const yesAnswers = ['Totallyyyyyy', 'Absolutely', 'YES!!!!!!!', 'Yes please, I\'ll take it','It\'s a must'];
const noAnswers = ['Just, no', 'How about no', 'Banana! I mean, no', 'NO..', 'Nopydoo'];
const maybeAnswers = ['Maybe?', 'Probably~', 'It depends though', 'Hmm, tricky..', 'Eh.. 50-50?'];
const noquestionAnswers = ["Hey you didn't ask me", "Your question is?", "I didn't hear you", "Ptsssh, your secrets are safe with me", "The universe is listening"];
const repeatingAnswers = [];

var yesImg = {
    '0' : ".\\img\\yesImg\\1.jpg",
    '1' : ".\\img\\yesImg\\2.jpg",
    '2' : ".\\img\\yesImg\\3.jpg",
    '3' : ".\\img\\yesImg\\4.jfif",
    '4' : ".\\img\\yesImg\\5.jpg"
}

var noImg = {
    '0' : ".\\img\\noImg\\1.jpg",
    '1' : ".\\img\\noImg\\2.jpg",
    '2' : ".\\img\\noImg\\3.jpg",
    '3' : ".\\img\\noImg\\4.jfif",
    '4' : ".\\img\\noImg\\5.jpg"
}

var maybeImg = {
    '0' : ".\\img\\maybeImg\\1.jpg",
    '1' : ".\\img\\maybeImg\\2.jpg",
    '2' : ".\\img\\maybeImg\\3.jpg",
    '3' : ".\\img\\maybeImg\\4.jpg",
    '4' : ".\\img\\maybeImg\\5.jpg"
}

const randomYN = () => {
    return Math.floor(Math.random() * 3);
}

const randomAns = () => {
    return Math.floor(Math.random() * 5);
}

const answer = () => {
    if (document.getElementById("input").value !== '') {
        console.log(document.getElementById("input").value);
        document.getElementById("question").innerHTML = document.getElementById("input").value;
        switch (randomYN()) {
            case 0:
                document.getElementById("answer").innerHTML = yesAnswers[randomAns()];
                document.getElementById("answerImg").setAttribute("src", yesImg[randomAns()]);
                break;
            case 1:
                document.getElementById("answer").innerHTML = noAnswers[randomAns()];
                document.getElementById("answerImg").setAttribute("src", noImg[randomAns()]);
                break;
            case 2:
                document.getElementById("answer").innerHTML = maybeAnswers[randomAns()];
                document.getElementById("answerImg").setAttribute("src", maybeImg[randomAns()]);
                break;
            default:
                console.log("Error loading randomYN function");
                break;
        }
    } else {
        document.getElementById("question").innerHTML = noquestionAnswers[randomAns()];
    }
}

document.getElementById("submit").onclick = () => {answer()};