/* custom JS goes here */

// IIFE
(function(){
    if(document.title == "Books")
    {
        let deleteButtons = document.getElementsByClassName("btn-danger");
        
        for (let index = 0; index < deleteButtons.length; index++) {
            let button = deleteButtons[index];
            button.addEventListener("click", (event) => {
                event.preventDefault();
                document.getElementsByTagName("body")[0].innerHTML += `<!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" style="visibility:hidden;" id="modalActivator"></button>
                
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <span><h5 class="modal-title" id="staticBackdropLabel">Confirm</h5></span>
                        <span><button type="button" class="close" data-dismiss="modal" aria-label="Close"></span>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="cancelButton">Cancel</button>
                        <button type="button" class="btn btn-primary" id="confirmButton">Yes</button>
                    </div>
                    </div>
                </div>
                </div>`;
                modalActivator.click();
                document.getElementById("confirmButton").addEventListener("click", () => 
                {
                    window.location.href = button.getAttribute("href");
                });
                document.getElementById("cancelButton").addEventListener("click", () =>{
                    window.location.href = "/books";
                });
            });
            
        }
        
  
    };
})();
