  let myleads=[]
  const  inputEl=document.getElementById("input-el")
 	const inputBtn=document.getElementById('input-btn')
    const tabBtn=document.getElementById('tab-btn')
    const delBtn=document.getElementById('delete-btn')
 	const ulEl=document.getElementById('ulel')
    const from=  JSON.parse(localStorage.getItem("myleads"))
    if (from) {
        myleads = from  
        renderLeads (myleads)
    }
 	
 	function renderLeads(leads){
 		 let listitems=""
 	 	for (var i = 0; i < leads.length; i++) {
 	 		listitems+=` 
            <li>
 	 		<a target='_blank' href='${leads[i]}'>${leads[i]}<a>
 	 		</li>`
 	}
        ulEl.innerHTML = listitems
        
         	}
      tabBtn.addEventListener("click", function(){
        chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
            myleads.push(tabs[0].url)
       localStorage.setItem("myleads", JSON.stringify(myleads))
        renderLeads(myleads) 
    })
    })

   inputBtn.addEventListener("click",  function(){
        myleads.push(inputEl.value)
        inputEl.value=""
        localStorage.setItem("myleads", JSON.stringify(myleads))
        renderLeads(myleads)
    
    }) 

    delBtn.addEventListener("click", function(){
        localStorage.clear()
        myleads=[]
        renderLeads(myleads)
    }) 
