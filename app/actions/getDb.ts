import products from "@/db/products.json";
// get item
export async function fetchItems() {  
  try {  
    // Fetch the JSON file  
    const response = await fetch('@/db/items.json');  
 
    // Check for HTTP errors  
    if (!response.ok) {  
      throw new Error(`HTTP error! Status: ${response.status}`);  
    }  
 
    // Parse JSON data  
    const data = await response.json();  
 
    // Work with the data  
    console.log("Parsed JSON data (async/await):", data);  
    // We’ll display data in Step 6  
 
  } catch (error) {  
    // Handle errors  
    console.error("Failed to fetch data:", error);  
   // document.getElementById("book-container").innerHTML = `<p class="error">Error loading data: ${error.message}</p>`;  
  }  
}  
 
// Call the async function  
// fetchItems()

