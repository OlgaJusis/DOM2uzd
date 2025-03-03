const container = document.getElementById('container');
        const vardas1 = document.getElementById('vardas1');
        const vardas3 = document.createElement('spin');
        vardas3.textContent = 'Jose';
        container.replaceChild(vardas3, vardas1);

        vardas3.style.color = 'green';
        vardas3.style.fontSize = "large";

        const salis1 = document.getElementById('salis1');
        const salis2 = document.createElement('spin');
        salis2.textContent = 'Italiją';
        container.replaceChild(salis2, salis1);

        salis2.style.color = "white";
        salis2.style.backgroundColor = "black";

        const vardas2 = document.getElementById('vardas2');
        const vardas4 = document.createElement('spin');
        vardas4.textContent = 'Jovanni';
        container.replaceChild(vardas4, vardas2);

        vardas4.style.fontSize = "small";
        vardas4.style.color = "orange";