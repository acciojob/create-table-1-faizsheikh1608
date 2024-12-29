function insert_Row() {
    //Write your code here
  const table = document.querySelector('#sampleTable');

	  // Insert a new row at the top of the table (index 0)
    const newRow = table.insertRow(0);

    // Insert new cells in the row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Add the values "New Cell1" and "New Cell2" to the cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
}
