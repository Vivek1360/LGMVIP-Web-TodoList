document.querySelector("#add").addEventListener("click", function(){
    if (document.querySelector("#taskname").value.length <= 2){
        alert("No task Entered");
        document.querySelector("#taskname").value = "";
    } else {
        document.querySelector("#tasks").innerHTML += `
        <div class="item">
            <input type="checkbox" id="remove">
            <p> ${document.querySelector("#taskname").value} </p>
        </div>
        `;
        document.querySelector("#taskname").value = "";
        var tasks = document.querySelectorAll("#remove");
        for( var i=0; i<tasks.length; i++){
            tasks[i].addEventListener("click", function (){
                setTimeout(()=>{
                    this.parentNode.remove();
                },400);
    });
}
    }
});

var tasks = document.querySelectorAll("#remove");
for( var i=0; i<tasks.length; i++){
    tasks[i].addEventListener("click", function (){
        setTimeout(()=>{
            this.parentNode.remove();
        },400);
    });
}