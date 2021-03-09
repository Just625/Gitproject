let message;
let mess = prompt ("Message: ");
message = (mess === "Employee")
        ? alert("Hello")
        : mess === "Director"
            ? alert("Greetings")
            : mess === ""
                ? alert("No login")
                    : alert(" ");