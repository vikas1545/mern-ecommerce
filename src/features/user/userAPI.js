export function fetchLoggedInUserOrders() {
    return new Promise(async (resolve)=>{
       const response = await fetch('http://localhost:8080/orders/own/')
       const data = response.json();
       resolve({data});
   })
}


export function fetchLoggedInUser() {
    return new Promise(async (resolve) =>{
      console.log("fetchLoggedInUser is called...");
      const response = await fetch('http://localhost:8080/user/own') 
      const data = await response.json()
      resolve({data})
    }
    );
  }

export function updateUser(update) {
  console.log("update value :",update.id);
   return new Promise(async (resolve)=> {
       const response = await fetch('http://localhost:8080/user/'+update.id,{
           method:'PATCH',
           body:JSON.stringify(update),
           headers:{'content-type':'application/json'}
       })
       const data = response.json();
       resolve({data})
   })
}