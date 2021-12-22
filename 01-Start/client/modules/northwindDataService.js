export async function getAllEmployees()
{
    const response = await fetch ("/api/employees", {
        "method": "get",
        "headers": {
            "content-type": "application/json"
        },
        "cache": "default"
    });
    if (response.ok) {
        const employees = await response.json();
        return employees;
    } else {
        const error = await response.json();
        console.log (`ERROR: ${error}`);
        throw (error);
    }
}

export async function getOrdersForEmployee(employeeId)
{
    const response = await fetch ("/api/ordersForEmployee?employeeId=2", {
        "method": "get",
        "headers": {
            "content-type": "application/json"
        },
        "cache": "default"
    });
    if (response.ok) {
        const orders = await response.json();
        return orders.value;
    } else {
        const error = await response.json();
        console.log (`ERROR: ${error}`);
        throw (error);
    }    
}
