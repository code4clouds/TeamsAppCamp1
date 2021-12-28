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
    const response = await fetch (`/api/employee?employeeId=${employeeId}`, {
        "method": "get",
        "headers": {
            "content-type": "application/json"
        },
        "cache": "default"
    });
    if (response.ok) {
        const employee = await response.json();
        return employee.orders;
    } else {
        const error = await response.json();
        console.log (`ERROR: ${error}`);
        throw (error);
    }    
}

export async function getOrder(orderId)
{
    const response = await fetch (`/api/order?orderId=${orderId}`, {
        "method": "get",
        "headers": {
            "content-type": "application/json"
        },
        "cache": "default"
    });
    if (response.ok) {
        const orders = await response.json();
        return orders;
    } else {
        const error = await response.json();
        console.log (`ERROR: ${error}`);
        throw (error);
    }    
}
