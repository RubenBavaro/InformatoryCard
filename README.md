<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the User Information Card project.
*** If you have any suggestions to improve the project or the README, please fork the repo and create a pull request,
*** or simply open an issue with your ideas. Happy coding!
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/YourUsername/UserInformationCard](https://github.com/RubenBavaro/InformatoryCard">
    <img src="static/img/logo.png" alt="User Info Logo" width="220" height="200">
  </a>

  <h3 align="center">Informatory Card</h3>

  <p align="center">
    A web application that displays detailed information about a user fetched from an API.
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#project-structure">Project Structure</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

**Informatory Card** is a web application that fetches and displays detailed information about a user such as their name, gender, address, email, and other useful information from a specified API endpoint.  
The user details are dynamically loaded into a styled card interface, which includes a user photo, name, and contact details for easy reference. This is ideal for applications that require showing detailed user profiles.

<!-- PROJECT STRUCTURE -->
## Project Structure
- **HTML**: Contains the structure for displaying user information, including the photo and personal details.
- **CSS**: Provides the styling for the Informatory Card and centers it on the page, ensuring the card looks polished and professional.
- **JavaScript**: Uses the Fetch API to get data from a user information endpoint and display it within the card. The script updates the card dynamically based on the data returned from the API.

The example below outlines the various elements that make up the Informatory Card:
1. User’s **name** (First and Last Name).
2. **Gender**.
3. **Photo** (image URL from the API).
4. **Address**.
5. **Email**.
6. **Additional information** about the user (such as hobbies, profession, etc.).

### Sample Data Format:
```json
{
  "firstName": "Chuck",
  "lastName": "Norris",
  "gender": "Male",
  "photoUrl": "https://example.com/photo.jpg",
  "address": "123 Main St, Springfield",
  "email": "chucknorris@example.com",
}
