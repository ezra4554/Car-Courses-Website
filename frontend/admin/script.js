// Check User
async function checkUser() {
  const token = sessionStorage.getItem("token");
  if (!token) {
    const errorMessage = `
    <p>Login first, okay? <a href="../auth.html"><u>click</u></a></p>
  `;
    document.body.innerHTML = errorMessage;
    return;
  }
  try {
    const res = await fetch("http://localhost:3000/api/auth/check", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data);
      return;
    } else {
      console.log();
      if (data.user.role == "Customer") {
        setRole(data.user.role);
      } else if (data.user.role == "Mentor") {
        setRole(data.user.role);
      } else {
      }
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}
checkUser();
function setRole(role) {
  const hiddenMenuDropdown = document.querySelectorAll(".menu-dropdown");
  const hiddenTextSetting = document.querySelector(".textSetting");
  const roleMenu = document.querySelector(".roleMenu");
  const title = document.title;
  hiddenMenuDropdown.forEach((menu) => {
    menu.classList.add("hidden");
  });
  hiddenTextSetting.classList.add("hidden");
  roleMenu.innerHTML = role;
  title = `Page ${role}`;
}
//Hidden Navbar Login
const hiddenNavLogin = document.querySelector(".login");
hiddenNavLogin.classList.add("hidden");
// Menu Dashboard
const dashboard = document.getElementById("menuDashboard");
dashboard.onclick = () => {
  window.location.href = "./index.html";
};
// Menu Add Customer
const addCust = document.getElementById("menuAddCustomer");
addCust.onclick = () => {
  window.location.href = "./addCustomer.html";
};
// Menu Update Customer
const updateCust = document.getElementById("menuUpdateCustomer");
updateCust.onclick = () => {
  window.location.href = "./updateCustomer.html";
};
// Menu Add Mentor
const addMentor = document.getElementById("menuAddMentor");
addMentor.onclick = () => {
  window.location.href = "./addMentor.html";
};
// Menu Update Mentor
const updateMentor = document.getElementById("menuUpdateMentor");
updateMentor.onclick = () => {
  window.location.href = "./updateMentor.html";
};
// Menu Set Schedule
const schedule = document.getElementById("menuSchedule");
schedule.onclick = () => {
  window.location.href = "./schedule.html";
};
// Menu Release Certificate
const certificate = document.getElementById("menuCertificate");
certificate.onclick = () => {
  window.location.href = "./certificate.html";
};
// Menu Profile
const profile = document.getElementById("menuProfile");
profile.onclick = () => {
  window.location.href = "./profile.html";
};
// Menu Logout
const logout = document.getElementById("menuLogout");
logout.onclick = () => {
  sessionStorage.removeItem("token");
  window.location.href = "../auth.html";
};
// MENU DropDown
const dropdowns = document.querySelectorAll(".menu-dropdown");
dropdowns.forEach((item) => {
  const ul = item.nextElementSibling;
  // console.log(ul);
  item.addEventListener("click", function (e) {
    e.preventDefault();

    ul.classList.toggle("max-h-full");
  });
});
var options = {
  stroke: {
    curve: "smooth",
  },
  chart: {
    type: "line",
  },
  series: [
    {
      name: "Get Certified",
      data: [29, 20, 25, 22, 33],
    },
    {
      name: "Not Get Certified",
      data: [20, 10, 5, 15, 19],
    },
  ],
  xaxis: {
    categories: [2020, 2021, 2022, 2023, 2024],
  },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// count up
let numbers = document.querySelectorAll("#num");
const interval = 1000;

numbers.forEach((number) => {
  let start = 0;
  let end = parseInt(number.getAttribute("data-value"));
  let duration = Math.floor(interval / end);
  let counter = setInterval(function () {
    start += 1;
    number.textContent = start;
    if (start == end) {
      clearInterval(counter);
    }
  }, duration);
});
