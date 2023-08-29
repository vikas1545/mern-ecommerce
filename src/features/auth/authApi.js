
export function createUser(userData) {
    return new Promise(async (resolve) =>{
        const response = await fetch('http://localhost:8080/user',{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{'content-type':'application/json'}
        })
        const data = await response.json()
        resolve({data})
    })
}


export function checkUser(loginInfo) {
    return new Promise(async (resolve,reject) =>{
        const email = loginInfo.email;
        const password = loginInfo.password;

        const response = await fetch('http://localhost:8080/user?email='+email)
        const data = await response.json()
        if(data.length) {
            if(password===data[0].password) {
                resolve({data:data[0]})
            }else {
                reject({message:'wrong credential'})    
            }
            
        }else {
            reject({message:'user not found'})
        }
        
    })
}

