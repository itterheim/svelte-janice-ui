// Let's say that this is a REST API client
export class Client {
    constructor() {
        // Initialization logic can go here
    }

    // Example method
    getClientInfo() {
        return "Client information";
    }

    // Add more methods as needed
}

export const client = $state(new Client());