document.getElementById("example").onclick =
    function(){
        document.getElementById("text").innerHTML =
            "Example"
    }

document.getElementById("own_text").onclick =
    function(){
        document.getElementById("text").innerHTML =
            `<fieldset class="column-flex">
                <legend>Enter your Text:</legend>
                <textarea style='width: 70vw'></textarea>
                <br>
                <button type="button">Submit</button>
             </fieldset>
            `

    }

document.getElementById("introduction").onclick =
    function (){
        document.getElementById("reset").innerHTML =
            "<button>Reset Site</button>"
    }