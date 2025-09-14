function js_obj_to_json(jsObject) {
    try {
        // Convert the JavaScript object to a JSON string
        const jsonString = JSON.stringify(jsObject, null, 2); // Pretty print with 2 spaces
        return jsonString;
    } catch (error) {
        // Handle any errors that occur during conversion
        console.error("Error converting JavaScript object to JSON:", error);
        return null;
    }
}
// Example usage
const jsObject = {    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "coding"]
};
const jsonString = js_obj_to_json(jsObject);
if (jsonString) {
    console.log("Converted JSON String:", jsonString);
    // Output: Converted JSON String: {
    //   "name": "John",
    //   "age": 30,
    //   "city": "New York",
    //   "hobbies": [
    //     "reading",
    //     "traveling",
    //     "coding"
    //   ]
    // }
} 