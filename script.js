document.getElementById("example").onclick =
    function(){
        document.getElementById("text").innerHTML =
            `
            <fieldset class="column-flex">
                <legend>How many characters should the text include?</legend>
                <input type="radio" id="char_60" name="chars">
                <label for="char_60">60 Characters</label>
                <br>
                <input type="radio" id="char_120" name="chars">
                <label for="char_120">120 Characters</label>
                <br>
                <input type="radio" id="char_240" name="chars">
                <label for="char_240">240 Characters</label>
                <br>
                <input type="radio" id="char_480" name="chars">
                <label for="char_480">480 Characters</label>
                <br>
                <button type="button" onclick="getTypingArea()">Submit</button>
            </fieldset>
            `
    }

document.getElementById("own_text").onclick =
    function(){
        document.getElementById("text").innerHTML =
            `
            <fieldset class="column-flex">
                <legend>Enter your Text:</legend>
                <textarea style='width: 70vw'></textarea>
                <br>
                <button type="button" onclick="getTypingArea()">Submit</button>
             </fieldset>
            `
    }

document.getElementById("introduction").onclick =
    function (){
        document.getElementById("reset").innerHTML =
            "<button>Reset Site</button>"
    }

function getTypingArea(){
        document.getElementById("typing-area").innerHTML =
            `<label for="typingField">Start Typing here:</label>
            <textarea id="typingField"></textarea>
            `
    }