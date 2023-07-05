<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            background-color: black;
        }

        body {
            width: 100%;
            height: 100%;

        }

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10%;
        }

        h1 {
            color: white;
            font-size: 100px;
            text-transform: uppercase;
            cursor: pointer;

        }
    </style>
</head>

<body>
    <div class="container">
        <h1 data-value="Welcome to our site" style="color:#4AF626 ;">Welcome to our site</h1>
        
    </div>
</body>
<script>
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    // .onmouseover = event => {
       const heading= document.querySelector("h1");

        const start=()=>{
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            heading.innerText = heading.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return heading.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= heading.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }
    start();
</script>

</html>
