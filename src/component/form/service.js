export const loginForm = async (form) => {
    try {
        const response = await fetch("https://dummyjson.com/user/login", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(form)
        });
        if (!response.ok) {
            throw new Error("Login Failed!")
        }
        const result = await response.json();
        return {
            success: true,
            message: "Login Successfully!",
            data: result
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}