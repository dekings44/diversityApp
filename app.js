const userForm = document.querySelector('form');
const detail = document.querySelector('.detail');

const updateDetail = data => {
	detail.innerHTML = `
        <h4 class="list-group-item">Name:  ${data.fullname}</h4>
        <p class="list-group-item">Gender:  <strong>${data.gender}</strong></p>
        <p class="list-group-item">Ethnicity:  <strong>${data.ethnicity}</strong></p>

    `;
};

// Calling the APIs
async function submitUser(name) {
	const base = 'https://api.diversitydata.io/';
	const query = `?fullname=${name}`;
	const response = await fetch(base + query);
	const data = await response.json();
	return data;
}

userForm.addEventListener('submit', e => {
	// prevent dafault action
	e.preventDefault();

	// Get user info
	const userInfo = userForm.user.value.trim();
	userForm.reset();

	submitUser(userInfo)
		.then(data => updateDetail(data))
		.catch(err => console.log(err));
});
