<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Country Redirect</title>
</head>
<body>

    <form id="countryForm">
        <label for="country">Enter a country:</label>
        <input type="text" id="country" name="country" required>
        <button type="submit">Submit</button>
    </form>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('countryForm');
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const countryInput = document.getElementById('country');
                const country = countryInput.value.trim().toLowerCase();
                let url = '';

                switch (country) {
                    case 'africa':
                        url = 'https://argentina-server.com';
                        break;
                    case 'europa':
                        url = 'https://francia-server.com';
                        break;
                    case 'sudamerica':
                        url = 'https://angola-server.com';
                        break;
                    default:
                        url = 'https://default-server.com';
                }

                window.location.href = url;
            });
        });
    </script>

</body>
</html>
