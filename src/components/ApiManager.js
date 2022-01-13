
export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
}

export const addEntity = (objToSend, entityString, history) => {

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objToSend)
    }

    return fetch(`http://localhost:8088/${entityString}`, fetchOptions)
        .then(() => history.push(`/${entityString}`))
}