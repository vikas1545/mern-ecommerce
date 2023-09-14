export function createUser(userData) {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: { "content-type": "application/json" },
        });
        const data = await response.json();
        resolve({ data });
    });
}

export function checkUser(loginInfo) {
    //console.log("loginInfo from checkUser :",loginInfo);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                body: JSON.stringify(loginInfo),
                headers: { "content-type": "application/json" },
            });

            if (response.ok) {
                const data = await response.json();
                resolve({ data });
            } else {
                const err = await response.text();
                reject(err);
            }

        } catch (err) {
            reject(err);
        }
    });
}

export function signOut(userId) {
    return new Promise(async (resolve) => {
        // TODO: on server we will remove user session info
        resolve({ data: "success" });
    });
}
