// document.getElementById("but3").addEventListener('click', function f3() {
//     document.getElementById("div2").style.display = "block";
// });
// document.getElementById("but").addEventListener('click', getUser);

function postUser() {
    let user = {
        Email: document.getElementById("h1").value,
        FirstName: document.getElementById("h3").value,
        LastName: document.getElementById("h4").value,
        Password: document.getElementById("h2").value,

    };
    fetch("User/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    }).then(response => {
        if (response.ok) {
            alert("המשתמש הוסף בהצלחה!!");

        }
        else {
            response.json().then(error1 => { alert(JSON.stringify(error1.errors)); })
        }
    })
}

function newUser() {
    let div = document.getElementById("hide");
    div.hidden = false;
}

function getUser() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("pswd").value;
    fetch("User/" + name + "/" + password)
        .then(response => {
            return response.json();
        })
        .then(data1 => {
            data1.forEach(element => {
                if (element.Email == name && element.Password == password) {
                    sessionStorage.setItem('user', JSON.stringify(element));
                    window.location.href = "htmlpage1.html";
                }
            });

        })
        .catch((error) => {
            alert("שם המשתמש או הסיסמא שגויים:( אנא נסה שוב")
            console.error("error:" + error);
        });
}

function putUser() {
    let oldUser = JSON.parse(sessionStorage.getItem('user'))._id;
    let user = {
        Email: document.getElementById("h1").value,
        FirstName: document.getElementById("h3").value,
        LastName: document.getElementById("h4").value,
        Password: document.getElementById("h2").value,
    }
    fetch("User/" + oldUser, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    }).then((response) => {

        if (response.ok) {
            alert("הפרטים עודכנו בהצלחה!!");
            return response.json();
        }
        else
            alert("תקלה בעידכון הנתונים נסה שוב...");

    })
    //.catch((error) => {
    //    alert("Sorry, the update was not performed successfully");
    //});
}

