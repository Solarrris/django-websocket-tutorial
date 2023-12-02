const nav = document.getElementById("navigation");
const navigationList = nav.getElementsByTagName("ul")[0];
const steps = document.getElementsByClassName("step");

for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const stepTitle = step.getElementsByTagName("h2")[0];

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + step.id;
    a.innerHTML = stepTitle.textContent;

    li.appendChild(a);

    navigationList.appendChild(li);
}