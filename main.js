sentence_array = [];
function submit() {
    var display_sentence_array = [];

    for (var j = 1; j <= 4; j++) {
        var sentence = document.getElementById("sentence_" + j).value;
        console.log(sentence);
        sentence_array.push(sentence);
    }

    console.log(sentence_array);

    var length_of_name_of_students_array = sentence_array.length;
    console.log(length_of_name_of_students_array);

    for (var k = 0; k < length_of_name_of_students_array; k++) {
        display_sentence_array.push(sentence_array[k]);
        console.log(display_sentence_array);
    }

    console.log(display_sentence_array);

    var end_sentence = display_sentence_array.join(". ");
    console.log(end_sentence);
    document.getElementById("display_sentence").innerHTML = end_sentence;

    document.getElementById("submit_button").style.display = "none";
    //document.getElementById("display_sentence").innerHTML = "<h1>" + sentence_array + "</h1 > ";
}
