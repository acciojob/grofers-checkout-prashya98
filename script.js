const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");
  
  let totalSum = 0;
  
  // Calculate total
  prices.forEach(price => {
    totalSum += parseFloat(price.textContent);
  });
  
  // Create a new row for the total
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: Rs " + totalSum;
  
  newRow.appendChild(totalCell);
  
  // Append the new row to the table
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
