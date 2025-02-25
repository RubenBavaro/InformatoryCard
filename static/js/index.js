document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = "https://randomuser.me/api/?authuser=0";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching user data');
            }
            return response.json(); 
        })
        .then(data => {
            const user = data.results[0];

            const name = `${user.name.first} ${user.name.last}`;
            const gender = user.gender === 'male' ? 'Male' : 'Female'; 
            const email = user.email;
            const location = `${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
            const phone = user.phone;
            const picture = user.picture.large;

            document.getElementById('name').textContent = `Name: ${name} (${gender})`;
            document.getElementById('email').textContent = `Email: ${email}`;
            document.getElementById('location').textContent = `Location: ${location}`;
            document.getElementById('phone').textContent = `Phone: ${phone}`;

            const imgElement = document.querySelector('#card-container img');
            imgElement.src = picture;

        })
        .catch(error => {
            console.error("Error:", error);
        });
});

