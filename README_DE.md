# Ternärer Operator
* Arbeite in solution.js
* Entferne nach und nach `/*` `*/` um bestehende Codeblöcke
## 1. Schreibe diese bedingte Anweisung mit dem ternären Operator `?:` um.
```js
    let result;
    let a=3;
    let b=6;
    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }

    console.log(result)
```
## 2. Schreibe den folgenden Code um, um den ternären Operator (?:) zu verwenden (du solltest die if-else-Logik in einer Zeile zusammenfassen können).
```js
    let score = 42;
    let msg = "";

    if (score > 1337)
    {
        msg = "This is a new highscore!";
    }
    else
    {
        msg = "You need more points to beat the highscore!";
    }
    console.log(msg)
```

## 3. Schreibe if..else mit mehreren ternären Operatoren '?:' um.

    Um die Lesbarkeit zu verbessern, wird empfohlen, den Code in mehrere Zeilen aufzuteilen.
```js
    let message;
    let login="Employee"
    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }
    console.log(message)
```
