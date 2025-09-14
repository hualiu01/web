function json_to_js_obj(jsonString) {
    try {
        // Parse the JSON string into a JavaScript object
        const jsonObject = JSON.parse(jsonString);
        return jsonObject;
    } catch (error) {
        // Handle any errors that occur during parsing
        console.error("Error parsing JSON:", error);
        return null;
    }
}

// Example usage
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsObject = json_to_js_obj(jsonString);
if (jsObject) {
    console.log("Parsed JavaScript Object:", jsObject);

    // accessing properties of the object
    console.log("Name:", jsObject.name); // Output: Name: John
    console.log("Age:", jsObject.age);   // Output: Age: 30
    console.log("City:", jsObject.city); // Output: City: New York
}
// Output: Parsed JavaScript Object: { name: 'John', age: 30, city: 'New York' }