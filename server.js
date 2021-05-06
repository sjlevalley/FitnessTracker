const express = require('express');

const PORT = process.env.PORT || 3000;



const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});
