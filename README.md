[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10011803&assignment_repo_type=AssignmentRepo)

Group 40: Kyle K Lam and Michael Dinh

Overal Design:
The layout of the website consists of a main index.html page and a flexible product page. Initially, the user loads the index.html page to view a listing of products (gaming computer mice in this case). When the user selects a product they are interested in, they are redirected to the product.html page, which adapts based on which product the user selected beforehand. From here, the user can fill out a form to place an order, which generates an email, or may return by selecting the top left "124 PC Peripherals" link on the navbar.

Requirement Directory:

1. The overview of the business, product type sold, and management team are listed as a footer at the bottom of the index.html main page. 
2. On the main website index.html, a table of 10 total products (gaming mice) are displayed in an adaptive table with rows and columns.
3. Each image on the main table is visualized with an appropriate image. 
4. Price, brand, mouse shell materila, and color are listed in each table cell.
5. Users can select each cell on the index.html table to go to a detailed page with more information about the corresponding product.
6. On each detailed product page is a form that can be filled out to "order" an item. The form has product ID, quantity, first name, last name, phone number, shipping address, shipping method, and CC information.
7. When the form is submitted, the website generates an email with the information and prompts the user through their email client to send the email. This is done via the "mailto:" link.
8. Before submission, the form checks to ensure proper formatting of each field. Should a field be entered incorrectly, the website does not send the email and notifies the user.
9. Both product pages and main page use CSS for styling and match the assignment screenshot as close as possible.
10. The website is adaptive and responsive, able to respond to standard desktop dimensions or mobile devices. The table changes rows and columns as the device dimensions change. The product page changes its format as the device dimensiosn change.
11. When a user hovers over a cell in the main index.html table, the image grows bigger. When the user's mouse leaves the cell, it returns to its normal size.
