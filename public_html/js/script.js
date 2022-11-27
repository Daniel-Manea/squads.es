
const fetchActiveUsers = () => {

  axios
    .get("https://canary.discord.com/api/guilds/758049294023524423/widget.json")
    .then((response) => {
      const active_users = response.data.presence_count;
      document.getElementById("active-members").innerText = active_users;
    })
    .catch((error) => console.error(error));
};

fetchActiveUsers();

const fetchConnectedUsers = () => {

  axios
    .get("https://squads-rainbow-six-default-rtdb.europe-west1.firebasedatabase.app/members/connected.json")
    .then((response) => {
      const connected_users = response.data;
      document.getElementById("connected-members").innerText = connected_users;
    })
    .catch((error) => console.error(error));
};

fetchConnectedUsers();

const fetchTotalUsers = () => {

  axios
    .get("https://squads-rainbow-six-default-rtdb.europe-west1.firebasedatabase.app/members/total.json")
    .then((response) => {
      const total_users = response.data;
      document.getElementById("total-members").innerText = total_users;
    })
    .catch((error) => console.error(error));
};

fetchTotalUsers();